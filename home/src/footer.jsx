import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        Also check out the <a href="">Writer's space</a> and{" "}
        <a href="">Artist's muse</a>
      </p>
      <p>&copy; {new Date().getFullYear()} Quiitzal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
