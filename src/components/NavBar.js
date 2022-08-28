import React from "react";

function NavBar(key) {
  const links = ["home", "about", "projects"];

  const projects = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return <nav>{projects}</nav>;
}

export default NavBar;
