import { useState } from "react";

import Branding from "./Branding";
import Connect from "./Connect";

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className="header fullwidth">
        <table className="header-table">
          <tbody>
            <tr>
              <td className="header-left">
                <div
                  onClick={() => {
                    // open www.google.com in a new window
                    window.open("https://solve3.org", "_blank");
                  }}
                  style={{
                    cursor: "pointer",
                    opacity: isHover ? 0.9 : 1,
                  }}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  <Branding />
                </div>
              </td>
              <td className="header-right">
                <Connect />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex-centered mart-8 marr-8">
          <div className="white-line"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
