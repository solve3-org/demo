import { useAccount } from "wagmi";
import Message from "./Message";
import bgOverlay from "../media/hero-bg.png";

const bgOverlayStyle = {
  backgroundImage: `url(${bgOverlay}), linear-gradient(180deg, #ad33cc 0%, #ad33cc 100%)`,
  // position: "relative",
  // backgroundSize: "cover",
  backgroundPosition: "bottom right",
  opacity: 0.9, // Adjust the opacity as needed ad33cc
  // no repeat
  backgroundRepeat: "no-repeat",
};

const Demo = () => {
  const { isConnected } = useAccount();

  return (
    <div className="container pad-0 w-100 flex-centered" style={bgOverlayStyle}>
      <div>
        <h1 className="text-center text-white mart-20">Solve3 Demo</h1>
        <h3 className="text-center text-white">
          Set a Message using Solve3 Bot Protection
        </h3>
      </div>

      <div className="pad-20">
        <div className="full-width content-center smol light-bg-2 pad-0">
          <div className="text-left flex-row content-center padt-10 padb-10 padl-10 padr-10">
            <div className="emoji content-center padl-10 padr-20 font-mono">
              {/* &#128712; */}
              &#33;
            </div>
            <div className="padr-20 font-purple">
              <div className="mart-1">
                &bull; Connect your wallet and select a network
              </div>
              <div className="mart-1">
                &bull; Choose a new message and click 'Set Message'
              </div>
              <div className="mart-1">
                &bull; Sign the data to generate the captcha
              </div>
              <div className="mart-1">
                &bull; Solve the captcha and execute the contract
              </div>
            </div>
          </div>
        </div>
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
