import React from "react";
import RealisationCard from "./RealisationCard";
import { useAppSelector } from "../../../app/hooks";
import { allRealisations } from "../../../features/realisations/realisationSlice";
import _ from "lodash";
import BlockIcon from "@mui/icons-material/Block";

const RealisationBox = () => {
  const allRealisationsSelector = useAppSelector(allRealisations);

  return (
    <div className="w-full h-full grid grid-cols-3 gap-3 mt-5">
      {!_.isEmpty(allRealisationsSelector) ? (
        _.map(allRealisationsSelector, (realo) => (
          <RealisationCard
            key={realo.id}
            title={realo.title}
            description={realo.description}
            lien={realo.lien}
          />
        ))
      ) : (
        <div className="flex flex-col gap-3 p-5">
          <span>
            <BlockIcon
              style={{ fontSize: "70px", color: "grey", fontWeight: 300 }}
            />
          </span>
          <span>Aucune réalisation faites encore</span>
        </div>
      )}
    </div>
  );
};

export default RealisationBox;
