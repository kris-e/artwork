import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";
import ImgViews from "./ImgViews";

const ImageView = () => {
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a");
      a.forEach((a) => {
        if (a.href.includes("assets/img/")) {
          if (a.getAttribute("download") === null) {
            a.addEventListener("click", (e) => {
              e.preventDefault();
              setImgValue(a.href);
              setImg(true);
            });
          }
        }
      });
    }, 1500);
  }, []);
  return (
    <Fragment>
      {img && <ImgViews close={() => setImg(false)} src={imgValue} />}
    </Fragment>
  );
};
export default ImageView;
