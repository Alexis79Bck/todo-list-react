import React from "react";
import '../assets/css/Top.css'

interface TopProps {
    title: string
}

const Top: React.FC<TopProps> = ({ title }) => {
  return (
    <>
    <h1 className="title">
         <span className="actual-text"> { title } </span>
         <span className="front-text">{ title }</span>
      
    </h1>
    </>
  );
};

export default Top;