import React from "react";
import Logo from "../logo/Logo";

const CalltoActionSeven = () => {
  return (
    <div className="rn-callto-action style-7">
      <div className="container">
        <div className="row row--0 align-items-center justify-content-center content-wrapper">
          <div className="col-lg-8 col-md-8">
            <div className="inner">
              <div className="content text-center">
                <Logo
                  image={`${process.env.PUBLIC_URL}/images/ibots/ibots_logo.png`}
                  image2={`${process.env.PUBLIC_URL}/images/ibots/ibots_logo.png`}
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
