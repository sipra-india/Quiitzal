import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        Also check out the Writer's <a href="">Memoir</a> and{" "}
        Artist's <a href="">Muse</a>
      </p>
      <p>&copy; {new Date().getFullYear()} Quiitzal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
