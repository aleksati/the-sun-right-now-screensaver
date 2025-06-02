import { useEffect, useState } from "react";
import useWindowSize from "./hooks/useWindowSize";

// Show slideshow of real-time NASA images of the sun. 
// The images are fetched from the NASA SDO database (../api.mjs)
// and updated every 5 minutes.
const TheSunRightNow = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const [imgFileNames, setImgFileNames] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const windowSize = useWindowSize();

  const getImgFileNames = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:8001/api/thesunrightnow");
      const data = await res.json();
      // console.log(data);
      setImgFileNames(data);
      setIsLoading(false);
      setIsReady(true);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setIsReady(false);
      console.log(error);
    }
  };

  useEffect(() => {
    // on mount
    getImgFileNames();

    //get new filenames from API every 5 minutes
    const interval = setInterval(() => {
      getImgFileNames();
    }, 300000);

    // cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Rotate sunimage every 10 seconds
    const interval = setInterval(() => {
      setCurrIdx((prevIndex) => (prevIndex + 1) % imgFileNames.length);
    }, 10000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [imgFileNames.length]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
        {isError ? (
          <p>Shit. Something went wrong</p>
        ) : !isReady ? (
          <></>
        ) : (
          <img
            src={imgFileNames[currIdx]}
            alt="Sun Image"
            style={{
              width: windowSize.height || 720,
              height: windowSize.height || 720,
            }}
          />
        )}
    </div>
  );
};

export default TheSunRightNow;
