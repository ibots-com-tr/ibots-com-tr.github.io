import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
  {
    id: "1",
    title: "Tedarik",
    description: "Tedarik zinciri, know how.",
  },
  {
    id: "2",
    title: "AR-GE",
    description: "AR-GE laboratuvarı, teknik AR-GE.",
  },
  {
    id: "3",
    title: "Üretim",
    description: "Üretim hattının modellenmesi, otomasyon.",
  },
  {
    id: "4",
    title: "İlk Kullanıcılar",
    description: "İlk test kullanıcıları için başvuruların açılması, kurulum.",
  },
];

const TimelineTwo = ({ classVar }) => {
  return (
    <div className="timeline-style-two bg-color-blackest">
      <div className="row row--0">
        {/* Start Single Progress */}
        {TimelineData.map((data, index) => (
          <div
            className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`}
            key={index}
          >
            <div className="rn-timeline">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h6 className="title">{data.title}</h6>
              </ScrollAnimation>
              <div className="progress-line">
                <div className="line-inner"></div>
              </div>
              <div className="progress-dot">
                <div className="dot-level">
                  <div className="dot-inner"></div>
                </div>
              </div>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p className="description">{data.description}</p>
              </ScrollAnimation>
            </div>
          </div>
        ))}
        {/* End Single Progress */}
      </div>
    </div>
  );
};
export default TimelineTwo;
