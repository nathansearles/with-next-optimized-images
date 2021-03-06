import React, { useState, useRef, useEffect } from "react";
import styles from "./image.module.css";

const Image = ({ src, alt, maxWidth, className, ...props }) => {
  const fallbackSource = require(`../../public/images/${src}`);
  const webpSource = require(`../../public/images/${src}?format=webp`);
  const aspectRatio = fallbackSource.height / fallbackSource.width;

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef();

  function handleImageLoaded() {
    const image = imageRef.current.querySelector("img");
    if (!image.complete) {
      setLoading(true);
    } else {
      setLoading(false);
      setLoaded(true);
    }
  }

  useEffect(() => {
    const image = imageRef.current.querySelector("img");
    if (image.complete) {
      setLoaded(true);
    } else {
      setLoaded(false);
      setLoading(true);
    }
  }, []);

  const mediaMap = [
    "(max-width: 512px)",
    "(min-width: 513px) and (max-width: 720px)",
    "(min-width: 721px) and (max-width: 1024px)",
    "(min-width: 1025px) and (max-width: 1280px)",
    "(min-width: 1281px) and (max-width: 1440px)",
    "(min-width: 1441px) and (max-width: 1680px)",
    "(min-width: 1681px)",
  ];

  return (
    <div
      ref={imageRef}
      className={styles.container}
      style={{
        width: "100%",
        maxWidth: maxWidth ? `${maxWidth}px` : "100%",
      }}
    >
      <div
        className={styles.aspectRatio}
        style={{
          paddingBottom: `${aspectRatio * 100}%`,
        }}
      >
        <picture className={styles.picture}>
          {mediaMap.map((media, index) => {
            // Get total images generated by responsive-loader
            const totalImages = fallbackSource.images.length - 1;
            // Set imageIndex to current index
            let imageIndex = index;
            // If index is greater or equal to totalImages generated,
            // use the largest to fulfill all media requirements
            if (index >= totalImages) {
              imageIndex = totalImages;
            }
            // Get fallback image path and WebP paths
            const fallbackPath = fallbackSource.images[imageIndex].path;
            const webpPath = webpSource.images[imageIndex].path;
            // Get mime type
            const findExtension = fallbackPath.match(/[^.]+$/);
            const fallbackMimeType =
              findExtension[0] === "jpg" ? "jpeg" : findExtension[0];
            return (
              <React.Fragment key={`image_${index}`}>
                <source srcSet={webpPath} media={media} type="image/webp" />
                <source
                  srcSet={fallbackPath}
                  media={media}
                  type={`image/${fallbackMimeType}`}
                />
              </React.Fragment>
            );
          })}
          <img
            src={fallbackSource.images[0].path}
            className={[
              styles.image,
              loaded ? styles.loaded : "",
              loading ? styles.loading : "",
              className,
            ].join(" ")}
            {...props}
            onLoad={handleImageLoaded}
            loading="lazy"
            alt={alt}
            width={fallbackSource.width}
            height={fallbackSource.height}
          />
        </picture>
      </div>
    </div>
  );
};

export default Image;
