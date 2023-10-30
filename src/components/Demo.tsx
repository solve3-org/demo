import { useAccount } from "wagmi";

import Message from "./Message";

const Demo = () => {
  const { isConnected } = useAccount();

  return (
    <div className="container padt-10 w-100 flex-centered">
      <div>
        <h1 className="text-center text-white">Solve3 Demo</h1>
      </div>
      <div className="">
        <h2 className="text-center text-white">
          Set a Message using Solve3 Bot Protection
        </h2>
      </div>

      <div className="full-width content-center smol">
        <ul className="text-center marl-1 marr-40">
          <p className="mart-5">
            Step 0:
            <br />
            <b>Connect Wallet</b>
          </p>
          <p className="mart-5">
            Step 1:
            <br />
            <b>Choose a Message and Click 'Set Message'</b>
          </p>
          <p className="mart-5">
            Step 2:
            <br />
            <b>Sign the Data and Generate a Captcha</b>
          </p>
          <p className="mart-5">
            Step 3:
            <br />
            <b>Solve the Captcha and Call the Contract</b>
          </p>
        </ul>
      </div>
      {isConnected && <Message />}
      <div className="smol text-white no-deco">
        <a
          className="smol text-white no-deco"
          href="https://solve3.org"
          target="_blank"
        >
          <b>website</b>
        </a>{" "}
        -{" "}
        <a
          className="smol text-white no-deco"
          href="https://docs.solve3.org"
          target="_blank"
        >
          <b>docs</b>
        </a>{" "}
        -{" "}
        <a
          className="smol text-white no-deco"
          href="https://twitter.com/solve3_org"
          target="_blank"
        >
          <b>twitter</b>
        </a>
      </div>
    </div>
  );
};

export default Demo;
