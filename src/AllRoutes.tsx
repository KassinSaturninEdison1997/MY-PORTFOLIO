import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./containers/noPageAvailable";
import About from "./containers/section/About/About";
import Certifications from "./containers/section/Certifications/Certifications";
import Contacts from "./containers/section/Contacts/Contacts";
import Experiences from "./containers/section/Experiences/Experiences";
import Formations from "./containers/section/Formations/Formations";
import Freelancer from "./containers/section/Freelancers/Freelancer";
import Realisations from "./containers/section/Realisations/Realisations";
import CreateEditFormationForm from "./containers/section/Formations/SubCategorie/CreateEditFormationForm";
import ListFormation from "./containers/section/Formations/ListFormation";
import { useAppSelector } from "./app/hooks";
import { currentPath } from "./features/categorie/categorieSlice";

const AllRoutes = () => {
  const path: string = useAppSelector(currentPath);
  return (
    <Routes>
      <Route path="/" element={<Navigate to={path} />} />
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="a-propos" element={<About />} />
        <Route path="experiences-professionnelles" element={<Experiences />} />
        <Route path="formations" element={<Formations />}>
          <Route path="" element={<ListFormation />} />
          <Route path="create" element={<CreateEditFormationForm />} />
        </Route>
        <Route path="certifications" element={<Certifications />} />
        <Route path="realisations" element={<Realisations />} />
        <Route path="besoins-freelancer" element={<Freelancer />} />
        <Route path="nous-contacter" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
