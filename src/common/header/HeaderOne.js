import { useState, useRef } from "react";
import Logo from "../../elements/logo/Logo";
import MobileMenu from "./MobileMenu";
import useStickyHeader from "./useStickyHeader";

const HeaderOne = ({ btnStyle, HeaderSTyle }) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const ref = useRef();
  let [check, setCheck] = useState(true);
  const sticky = useStickyHeader(50);
  const headerClasses = `header-default ${sticky && check ? "sticky" : ""}`;
  const { clientHeight } = ref;

  const checkChange = (value) => {
    setCheck(value);
  };
  return (
    <>
      <header
        ref={ref}
        className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}
      >
        <div className="container position-relative">
          <div className="d-flex align-items-center justify-content-center row--0">
            <Logo
              image={`${process.env.PUBLIC_URL}/images/ibots/ibots_logo.png`}
              image2={`${process.env.PUBLIC_URL}/images/ibots/ibots_logo.png`}
            />
          </div>
        </div>
      </header>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};
export default HeaderOne;
