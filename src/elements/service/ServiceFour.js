import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    icon: "1",
    title: "5-25 kg </br> 4-6 axis </br> Robot kollar",
    description: "Kaynak makinesi </br> Robotik boyama",
  },
  {
    icon: "2",
    title: "Yapay zeka modülü ve sensörler",
    description: "Çevresini ve objeleri tanıyan kendi yolunu bulabilen",
  },
  {
    icon: "3",
    title: "Her sektör için tutucular (gripper)",
    description:
      "Endüstriyel bağlantı elemanları,</br> her boyutta ve özel üretim tutucular",
  },
  {
    icon: "4",
    title: "Yazılım",
    description:
      "Yeni nesil otomasyon sistemleri, </br> Mevcut sisteminize entegrasyon",
  },
];

const ServiceFour = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="icon">
                <div className="line"></div>
                {val.icon}
              </div>
              <div className="content">
                <h4 className="title">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: val.title }}
                  ></Link>
                </h4>
                <p
                  className="description b1 color-gray mb--0"
                  dangerouslySetInnerHTML={{ __html: val.description }}
                ></p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceFour;
