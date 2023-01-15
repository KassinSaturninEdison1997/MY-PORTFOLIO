import React from "react";
import RealisationCard from "./RealisationCard";

const RealisationBox = () => {
  return (
    <div className="w-full h-full flex  items-center justify-center gap-5 flex-wrap mt-5">
      <RealisationCard
        index="un"
        title="Titre 1"
        image_url="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
      />
      <RealisationCard
        index="deux"
        title="Titre 2"
        image_url="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      />
      <RealisationCard
        index="trois"
        title="Titre 3"
        image_url="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
      />
      <RealisationCard
        index="quatre"
        title="Titre 4"
        image_url="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
      />
      <RealisationCard
        index="cinq"
        title="Titre 5"
        image_url="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
      />
      <RealisationCard
        index="six"
        title="Titre 6"
        image_url="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
      />
      <RealisationCard
        index="sept"
        title="Titre 7"
        image_url="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
      />
      <RealisationCard
        index="huit"
        title="Titre 8"
        image_url="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
      />
      <RealisationCard
        index="neuf"
        title="Titre 9"
        image_url="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
      />
    </div>
  );
};

export default RealisationBox;
