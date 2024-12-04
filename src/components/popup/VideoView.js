import { Fragment, useEffect, useState } from "react";
import ImgViews from "./ImgViews";

const VideoView = ()=> {
  const [video, setVideo] = useState(false);
  const [vidUrl, setVidUrl] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //   const vid = document.querySelectorAll("iframe");
  //   vid.forEach((vid) => {
  //     if(vid.src.includes("https://youtube.com/")) {
  //       if (vid.getAttribute("download") === null) {
  //         vid.addEventListener("click", (e) => {
  //           e.preventDefault();
  //           setVidUrl(vid.src);
  //           setVideo(true);
  //         });
  //         }
  //       }
  //     })
  //   }, 1500);
  // }, []);
  useEffect(() => {
    const vid = document.querySelectorAll("iframe");
    vid.forEach((vid) => {
      if (vid.src.includes("https://youtube.com/") || vid.src.includes("https://www.youtube.com/")) {
        if (vid.getAttribute("download") === null) {
          vid.addEventListener("click", (e) => {
            e.preventDefault();
            setVidUrl(vid.src);
            setVideo(true);
          });
        }
      }
    });
  }, []);

  return (
    <Fragment>
      {video && <ImgViews close={() => setVideo(false)} src={vidUrl} isVideo />}
    </Fragment>
  );
};

export default VideoView;
