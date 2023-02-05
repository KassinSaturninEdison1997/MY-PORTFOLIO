import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import CustomTimelineFormation from "../../../components/Custom/Components/CustomTimelineExperience/CustomTimelineFormation";
import { fetchAllFormation } from "../../../config/actions/FORMATION/formation-actions";
import HeaderBox from "../About/HeaderBox";
import { allFormations } from "../../../features/formation/formationSlice";
import _ from "lodash";
import { Avatar } from "@mui/material";

const ListFormation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllFormation());
  }, [dispatch]);

  const allFormationsSelector = useAppSelector(allFormations);

  const formatDescription = (description: string | string[]) => {
    if (_.isString(description)) {
      return description;
    }

    const descrip = _.map(description, (desc: string) => {
      if (_.startsWith(_.trim(desc), "-")) {
        const split_ = _.slice(_.trim(desc), 1);
        return (
          <ul className="list-disc pl-7">
            <li>{split_}</li>
          </ul>
        );
      }
      return desc;
    });

    return descrip;
  };

  const formatData = () => {
    const formData = _.map(allFormationsSelector, (formation) => {
      return {
        id: formation.id!,
        period: `${formation.debut} - ${formation.fin}`,
        icon: (
          <Avatar
            src={
              formation.ecole_logo && _.isString(formation.ecole_logo)
                ? formation.ecole_logo
                : ""
            }
            alt={formation.ecole}
            sx={{ width: 50, height: 50 }}
            className="bg-transparent"
          />
        ),
        diplome: formation.diplome,
        domaine: formation.domaine,
        description: formatDescription(formation?.description ?? ""),
        ecole: formation.ecole,
      };
    });

    return _.orderBy(formData, (f) => f.period, ["desc"]);
  };

  return (
    <section className="flex flex-col gap-2 h-full">
      <HeaderBox title={"Formations"} addButton />
      <div className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 shadow-md rounded-md h-full">
        <CustomTimelineFormation items={formatData()} />
      </div>
    </section>
  );
};

export default ListFormation;
