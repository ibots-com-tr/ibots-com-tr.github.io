import React from "react";
import Logo from "../logo/Logo";

const CalltoActionSeven = () => {
  return (
    <div className="rn-callto-action clltoaction-style-default style-7">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper">
          <div className="col-lg-8 col-md-8">
            <div className="inner">
              <div className="content text-start">
                <Logo
                  image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                  image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalltoActionSeven;
