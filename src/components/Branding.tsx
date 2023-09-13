import logo from "../media/logo-small-boxed.png";

const Branding = () => {
  return (
    <>
      <div className="w-100 flex padl-30">
        <img className="logo" src={logo} height="30px" alt="logo" />
        <div className="mart-2 content-center">
          <span className="marl-10">SOLVE</span>
          <span className="text-white marl-2 fat">3</span>
          <span className="">.org</span>
        </div>
      </div>
    </>
  );
};

export default Branding;
