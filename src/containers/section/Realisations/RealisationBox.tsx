import React from "react";
import RealisationCard from "./RealisationCard";

const RealisationBox = () => {
  return (
    <div className="w-full h-full grid grid-cols-4 gap-4 mt-7">
      <RealisationCard index="un" title="Titre 1" description="Description" />
      <RealisationCard index="deux" title="Titre 2" />
      <RealisationCard index="trois" title="Titre 3" />
      <RealisationCard index="quatre" title="Titre 4" />
      <RealisationCard index="cinq" title="Titre 5" />
      <RealisationCard index="six" title="Titre 6" />
      <RealisationCard index="sept" title="Titre 7" />
      <RealisationCard index="huit" title="Titre 8" />
    </div>
  );
};

export default RealisationBox;
