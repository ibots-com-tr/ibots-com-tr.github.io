import React from "react";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import Separator from "../elements/separator/Separator";
import ServiceFour from "../elements/service/ServiceFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import FooterTwo from "../common/footer/FooterTwo";
import WhatsappSection from "../components/whatsapp/WhatsappSection";

const LandingPage = () => {
  return (
    <>
      <SEO title="Home" />
      <main className="page-wrapper">
        <HeaderOne
          btnStyle="btn-small btn-icon round"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}

        <div
          className="slider-area slider-style-1 variation-default height-950 bg_image"
          data-black-overlay="7"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/ibots/hero2.jpg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <h1 className="title display-one">
                    Yeni nesil yapay zeka destekli endüstriyel robotlar
                  </h1>
                  <p className="description">
                    Programlanabilir yapay zeka arayüzü <br />
                    Değişken ortamlara adapte olabilme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Slider Area  */}

        <Separator />
        <div className="rwt-timeline-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Çalışma Süreci"
                  title="Çalışma Sürecimiz."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 mt--50">
                <TimelineTwo classVar="no-gradient" />
              </div>
            </div>
          </div>
        </div>

        <Separator />
        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Sizin İçin Ne Yapabiliriz?"
                  title="Hizmetler"
                  description=""
                />
              </div>
            </div>
            <ServiceFour
              serviceStyle="service__style--1 icon-circle-style with-working-process"
              textAlign="text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}

        <Separator />
        <WhatsappSection />

        <FooterTwo />
      </main>
    </>
  );
};

export default LandingPage;
