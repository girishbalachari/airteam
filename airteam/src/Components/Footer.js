import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  return (
    <div className="footers">
      <p>
        Copyright &copy; {currentYear} - {nextYear}
      </p>
    </div>
  );
};

export default Footer;
