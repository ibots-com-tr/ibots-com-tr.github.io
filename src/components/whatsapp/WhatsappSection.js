import React from "react";

const callToActionData = {
  title: "Ready to start creating a standard website?",
  subtitle: "Finest choice for your home & office",
  btnText: "Purchase Doob",
};
const WhatsappSection = () => {
  return (
    <div className="rn-callto-action clltoaction-style-default style-6">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper">
          <div className="col-lg-8 col-12">
            <div className="inner">
              <div className="content text-center">
                <h2 className="title">
                  Daha fazlası için whatsapp'dan bize yazabilirsiniz
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 content text-center">
            <a href="https://wa.me/5389642111" target="_blank">
              <img
                src={`${process.env.PUBLIC_URL}/images/ibots/whatsapp.svg`}
                alt="whatsapp"
                width={150}
                height={150}
                className="m-4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatsappSection;
