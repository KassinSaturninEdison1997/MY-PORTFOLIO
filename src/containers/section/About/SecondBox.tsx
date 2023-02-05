import React from "react";
import Quote from "../../../components/Custom/Components/CustomQuote/Quote";

const SecondBox = () => {
  const texte =
    "Développeur full stack passionné et dédié, avec plus d'une année d'expérience dans la conception et la mise en place de solutions informatiques innovantes. Mes outils de travail reposent sur les technologies front-end telles que React JS, et en technologies back-end, telles que PHP, Node JS bases de données. Possède une bonne compréhension des concepts de développement web, tels que l'architecture de l'application, les protocoles de communication, et les normes de sécurité. Aime travailler en équipe pour résoudre des défis complexes et atteindre des objectifs communs. Forte capacité à communiquer et à apprendre de nouvelles technologies rapidement.";

  return (
    <div
      className="grow bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 rounded-md shadow-md text-justify flex justify-center items-center"
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 200,
      }}
    >
      <div
        style={{ marginBottom: "50px", fontSize: "18px" }}
        className="mr-16 ml-16 mt-10"
      >
        <Quote text={texte} author={"Saturnin Edison Tchola KASSIN"} />
      </div>
    </div>
  );
};

export default SecondBox;
