import { useEffect, useRef, useState } from "react";

export default function SpeakerImageToggleOnScroll({
  imageUrl,
  alt,
  thumbNail,
}) {

  const [inView, setInView] = useState(false);
  const [isLoading, setisLoading] = useState(true);


  const imgRef = useRef();
  function scrollHandler(){
    setInView(isInview());
  }

  useEffect(()=>{
    
    setInView(isInview());
    setisLoading(false);
    window.addEventListener('scroll', scrollHandler)
    return ()=>{window.removeEventListener('scroll', scrollHandler)}
  }, [])

  function isInview(){
    const rect = imgRef.current.getBoundingClientRect();
    return rect.top>=0 && rect.bottom <= window.innerHeight;
  }

  const grayScale = inView ? "grayscale(0%)" : "grayscale(100%)";
  const gif1x1Transparent = 'data:image/gif;base64,R0LGODlhAQABAIAAAP///wAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
  return (
    <img
      src={isLoading ? gif1x1Transparent: imageUrl}
      alt={alt}
      width={thumbNail ? 50 : 200}
      height={thumbNail ? 50 : 200}
      className={
        thumbNail
          ? "img-fluid rounded-start "
          : "img-fluid rounded-start speaker-image"
      }
      style={{ filter: `${grayScale}` }}
      ref={imgRef}
    />
  );
}
