import { Solve3 } from "../../Solve3Module";
import { HandshakeResult } from "../../Solve3Module/types";

const NftMint = () => {
  const solve3 = new Solve3();

  // dummy data
  const handshake: HandshakeResult = solve3.init({
    account: "0xa70783A4EA4fEE1C121864146049736D11105755",
    destination: "0xa70783A4EA4fEE1C121864146049736D11105755",
    network: "mumbai",
  });

  solve3.open(handshake);

  return (
    <div className="container padt-10" style={{backgroundColor: "#333"}}>
      <div>
        <h1 className="text-center">Solve3 Demo</h1>
      </div>
      <div className="">
        <h2 className="text-center">NFT Minting</h2>
      </div>
      <div className="">
        <h2 className="text-center">{"``jo``"}</h2>
      </div>
    </div>
  );
};

export default NftMint;
