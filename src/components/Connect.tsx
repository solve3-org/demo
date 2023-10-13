import { ConnectButton } from "@rainbow-me/rainbowkit";

const Connect = () => {
  return (
    <div className="w-100 flex align-right">
      <div className="padr-40">
        <ConnectButton
          label="Connect"
          accountStatus="address"
          chainStatus="icon"
          showBalance={false}

          // style={{ maxWidth: "500px" }}
        />
      </div>
    </div>
  );
};

export default Connect;
