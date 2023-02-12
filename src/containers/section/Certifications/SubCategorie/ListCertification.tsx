import React from "react";
import HeaderBox from "../../About/HeaderBox";
import { CertificationCard } from "../Certifications";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { fetchAllcertification } from "../../../../config/actions/CERTIFICATION/certification-action";
import { allCertifications } from "../../../../features/certification/certificationSlice";
import _ from "lodash";
import RedirectToNewForm from "../../../../components/Custom/Components/CustomTimelineExperience/RedirectToNewForm";
import { isOnline } from "../../../../features/auth/authSlice";

const ListCertification = () => {
  const dispatch = useAppDispatch();
  const isonline = useAppSelector(isOnline);

  React.useEffect(() => {
    dispatch(fetchAllcertification());
  }, [dispatch]);

  const allCertificationsSelector = useAppSelector(allCertifications);
  return (
    <section className="flex flex-col gap-2 h-full">
      <HeaderBox title={"Certifications"} addButton />
      <div className="grid grid-cols-3 gap-3">
        {_.map(allCertificationsSelector, (certif) => (
          <CertificationCard
            key_={certif.id!}
            key={certif.id!}
            title={certif.nom}
            description={`${certif.obtention} - ${certif.expire}`}
            institut={certif.organisme}
          />
        ))}
        {isonline && <RedirectToNewForm path={"/certifications/create"} />}
      </div>
    </section>
  );
};

export default ListCertification;
