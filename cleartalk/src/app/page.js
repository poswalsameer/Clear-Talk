'use client'

import { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { useStyleRegistry } from "styled-jsx";

export default function Home() {


  const [userVideo, setUserVideo] = useState(false);


  const allowUserVideo = () => {
    setUserVideo(!userVideo);
  }

  // const [localStream, setLocalStream] = useState(null);
  

  // const getUserVideo = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: false,
  //     });
  //     setLocalStream(stream);
  //   } 
  //   catch (error) {
  //     console.error("Error accessing user media:", error);
  //   }
  // };

  // useEffect( () => {

  //   getUserVideo();

  // }, [])


  return (
    <>

      <div className="h-screen w-full flex justify-center items-center">

      <div className="flex flex-col justify-center items-center h-[90%] w-[48%] mx-2 border-2 border-white" >

        <Webcam audio={false} videoConstraints={userVideo} />

        <button className="bg-blue-400 text-black rounded-md my-5 h-10 w-32 font-bold" onClick={allowUserVideo}>Change Video</button>

      </div>

        <div className="h-[90%] w-[48%] mx-2 border-2 border-white" ></div>


      </div>
    
    </>
  );
}
