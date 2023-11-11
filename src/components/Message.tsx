import {
  useAccount,
  useSignMessage,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  useNetwork,
} from "wagmi";
import { Solve3 } from "@solve3/captcha";
import { abi } from "./abi";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Message = () => {
  const messageContract: `0x${string}` =
    "0xf7C9Bd689891F42fc65CFfd551A19b75326eB38b";

  const { signMessageAsync } = useSignMessage();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  const [message, setMessage] = useState<string>("");

  const { data: readData, refetch } = useContractRead({
    address: messageContract,
    abi: abi,
    functionName: "getMessage",
    args: [address],
  });

  const { data: writeData, writeAsync } = useContractWrite({
    address: messageContract,
    abi: abi,
    functionName: "setMessage",
  });

  const { isLoading } = useWaitForTransaction(writeData);

  useEffect(() => {
    refetch();
  }, [isLoading]);

  const solve3 = new Solve3();

  const onClickHandler = async () => {
    const messageToSign: string = await solve3.init({
      account: address as string,
      destination: messageContract,
      network: chain?.id as number,
    });

    const signature = await signMessageAsync({ message: messageToSign });

    solve3.on("success", async (proof: string) => {
      await writeAsync({ args: [message, proof] });
      setMessage("");
    });

    console.log(signature);
    await solve3.open(signature);
  };

  return (
    <>
      {isConnected && (
        <div className="pad-20 mart-20 marb-40 small-box light-bg flex-center">
          <div className="text-center">
            <h3>Current Message:</h3>
          </div>

          {!isLoading && (
            <div>
              <p>{readData as string}</p>
            </div>
          )}
          {isLoading && (
            <div>
              <BeatLoader color="#9849b4" size={8} speedMultiplier={0.5} />
            </div>
          )}
          <div className="text-center">
            <h3>New Message:</h3>
          </div>
          {/* add input field */}
          <div className="text-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="text-center w-100 flex-centered">
            <div
              className="mart-20 text-center button-k chubby"
              onClick={onClickHandler}
            >
              Set Message
            </div>
          </div>
          {/* leave some feedback */}
          <div className="text-center mart-20 smol fat">
            <a href="https://forms.gle/PDy2Hos9jZT6w1Gq6" target="_blank">
              <div>
                <span>We'd Love to Hear Your Thoughts!</span>
              </div>
            </a>
            <div className="mart-10">❤️</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
