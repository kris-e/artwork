import SectionTitle from "./SectionTitle";
import Image from 'next/image';
import { portfolioData } from "./ImageData";

import { useState } from 'react'
// import VideoComponent from './Video'
import ImgViews from "./popup/ImgViews";

const Portfolio = () => {
  const [popupContent, setPopupContent] = useState({ src: "", isVideo: false });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (src, isVideo) => {
    setPopupContent({ src, isVideo });
    setIsPopupOpen(true);
  };

  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Selected paintings"} subHeading={"Portfolio"} />
        <div className="row g-4 lightbox-gallery">
          {portfolioData.map((portfolio) => (
            <div className="col-sm-6 col-lg-4" key={portfolio.id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                {portfolio.videoId ? (
                    <div style={{ cursor: "pointer" }}>
                      <Image
                        src={`https://img.youtube.com/vi/${portfolio.videoId}/hqdefault.jpg`}
                        alt="video-thumbnail"
                        width={439}
                        height={276}
                        style={{ width: "100%", height: "auto" }}
                        onClick={() =>
                          openPopup(`https://www.youtube.com/embed/${portfolio.videoId}`, true)
                        }
                      />
                    </div>
                  ) : (
                    <div style={{ cursor: "pointer" }}>
                      <Image
                        src={portfolio.image}
                        alt="image"
                        blurDataURL="..."
                        placeholder="blur"
                        width={720}
                        height={675}
                        style={{ width: "100%", height: "auto" }}
                        onClick={() => openPopup(portfolio.image, false)}
                      />
                    </div>
                  )}
                </div>
                <div
                  className="portfolio-info"
                  onClick={() =>
                    portfolio.videoId
                      ? openPopup(`https://www.youtube.com/embed/${portfolio.videoId}`, true)
                      : openPopup(portfolio.image, false)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <h6>{portfolio.title}</h6>
                  <span>{portfolio.subtitle}</span>
                  <p>{portfolio.format}</p>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {isPopupOpen && (
          <ImgViews
            close={setIsPopupOpen}
            src={popupContent.src}
            isVideo={popupContent.isVideo}
          />
        )}
      </div>
    </section>
  );
};
export default Portfolio;
