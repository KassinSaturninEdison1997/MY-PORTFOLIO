import React from "react";
import HeaderBox from "./HeaderBox";
import SecondBox from "./SecondBox";

const About = () => {
  return (
    <section className="flex flex-col gap-2 h-full">
      <HeaderBox
        title={"Fullstack Developer"}
        image={{
          alt: "Edison KASSIN",
          image: "ma-photo-d-identite.jpg",
          hoverTitle: "Saturnin Edison Tchola KASSIN",
        }}
      />
      <SecondBox />
    </section>
  );
};

export default About;
