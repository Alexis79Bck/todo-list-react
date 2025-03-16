import React from "react";

interface FooterProps {
    devName: string,
    appVersion: string,
    year: string,
}

const Footer: React.FC<FooterProps> = ({ devName, appVersion, year }) => {
  return (
    <div id="footer">
      <p>{ devName } - Versión: { appVersion } - { year }</p>
    </div>
  );
};

export default Footer;