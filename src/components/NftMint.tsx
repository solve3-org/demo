import { Solve3 } from "../../Solve3Module";
import { useAccount, useSignMessage } from "wagmi";

const NftMint = () => {
  const { signMessageAsync } = useSignMessage();
  const { address, isConnected } = useAccount();

  const solve3 = new Solve3();

  const onClickHandler = async () => {
    const messageToSign: string = await solve3.init({
      account: address as string,
      destination: address as string,
      network: 5,
    });

    const signature = await signMessageAsync({ message: messageToSign });
    await solve3.open(signature);
  };

  return (
    <div className="container padt-10" style={{ backgroundColor: "#333" }}>
      <div>
        <h1 className="text-center">Solve3 Demo</h1>
      </div>
      <div className="">
        <h2 className="text-center">NFT Minting</h2>
      </div>
      {isConnected && (
        <div className="">
          <button onClick={onClickHandler}>mint</button>
        </div>
      )}
    </div>
  );
};

export default NftMint;
