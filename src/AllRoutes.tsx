import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import { useAppSelector } from "./app/hooks";
import NotFound from "./containers/noPageAvailable";
import About from "./containers/section/About/About";
import Certifications from "./containers/section/Certifications/Certifications";
import Contacts from "./containers/section/Contacts/Contacts";
import Experiences from "./containers/section/Experiences/Experiences";
import Formations from "./containers/section/Formations/Formations";
import Freelancer from "./containers/section/Freelancers/Freelancer";
import Realisations from "./containers/section/Realisations/Realisations";
import { currentPath } from "./features/categorie/categorieSlice";

const AllRoutes = () => {
  const path: string = useAppSelector(currentPath);
  return (
    <Routes>
      <Route path="*" element={<App Container={<NotFound />} />} />
      <Route path="/" element={<Navigate to={path} />} />
      <Route path="/a-propos" element={<App Container={<About />} />} />
      <Route
        path="/experiences-professionnelles"
        element={<App Container={<Experiences />} />}
      />
      <Route path="/formations" element={<App Container={<Formations />} />} />
      <Route
        path="/certifications"
        element={<App Container={<Certifications />} />}
      />
      <Route
        path="/realisations"
        element={<App Container={<Realisations />} />}
      />
      <Route
        path="/besoins-freelancer"
        element={<App Container={<Freelancer />} />}
      />
      <Route
        path="/nous-contacter"
        element={<App Container={<Contacts />} />}
      />
    </Routes>
  );
};

export default AllRoutes;
