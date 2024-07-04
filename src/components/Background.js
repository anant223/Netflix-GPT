import React from "react";

const Background = ({ children }) => (
  <section className="w-full bg-cover bg-center bg-[url('./assets/netflix-bg.jpg')]">
    <div
      className="w-full bg-black bg-opacity-50"
    >{children}</div>
  </section>
);

export default Background;
