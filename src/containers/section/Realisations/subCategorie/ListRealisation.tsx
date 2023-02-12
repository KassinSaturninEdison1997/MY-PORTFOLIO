import React from "react";
import CustomLabel from "../../../../components/Custom/Components/CustomLabel/CustomLabel";
import CustomButton from "../../../../components/Custom/Components/CustomButton/CustomButton";
import AddIcon from "../../../../components/Custom/Icons/AddIcon";
import CustomTextField from "../../../../components/Custom/Components/CustomTextField/CustomTextField";
import RealisationBox from "../RealisationBox";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { isOnline } from "../../../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { fetchAllrealisation } from "../../../../config/actions/REALISATIONS/realisation-action";

const ListRealisation = () => {
  const isonline = useAppSelector(isOnline);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchAllrealisation());
  }, [dispatch]);

  return (
    <div>
      <section>
        <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 shadow-md rounded-md">
          <div className="flex items-center justify-between">
            <CustomLabel label="NOS PROJETS" />
            {isonline && (
              <Link to={"/realisations/create"}>
                <CustomButton label="New" Icon={<AddIcon />} withIcon />
              </Link>
            )}
          </div>
          <CustomTextField
            label=""
            placeholder="Filtrer par..."
            name="rechecher"
            withSearchIcon
          />
        </header>
      </section>

      <RealisationBox />
    </div>
  );
};

export default ListRealisation;
