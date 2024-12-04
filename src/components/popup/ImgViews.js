import { Fragment } from "react";
import useClickOutside from "../../useClickOutside";

const ImgViews = ({ close, src, isVideo }) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div
          className={` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}
        >
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              {isVideo ? (
                <iframe
                  className="mfp-iframe"
                  src={src}
                  allowFullScreen
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              ) : (
                <img className="mfp-img" src={src} alt="popup-content" />
              )}
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImgViews;
