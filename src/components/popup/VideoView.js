import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";
import ImgViews from "./ImgViews";

const VideoView = ()=> {
  const [video, setVideo] = useState(false);
  const [vidUrl, setVidUrl] = useState(null);

  useEffect(() => {
    setTimeout(() => {
    const vid = document.querySelectorAll("iframe");
    vid.forEach((vid) => {
      if(vid.src.includes("https://youtube.com/")) {
        if (vid.getAttribute("download") === null) {
          vid.addEventListener("click", (e) => {
            e.preventDefault();
            setVidUrl(vid.src);
            setVideo(true);
          });
          }
        }
      })
    }, 1500);
  }, []);
  return (
    <Fragment>
      {video && <ImgViews close={() => setVideo(false)} src={vidUrl} />}
    </Fragment>
  );
};

export default VideoView;
