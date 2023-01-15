import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  change,
  currentCategorie,
} from "../../../../features/categorie/categorieSlice";
import { getPrevNextRoute } from "../../../../utils/getPrevNextRoute";

const CustomNavigation = () => {
  const categorie = useAppSelector(currentCategorie);
  const dispatch = useAppDispatch();
  const { prev, next } = getPrevNextRoute(categorie);
  return (
    <div
      className="flex gap-3 items-center justify-end"
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 100,
        fontSize: "16px",
      }}
    >
      {prev && (
        <Link to={prev.path}>
          <span
            onClick={() =>
              dispatch(
                change({
                  newCategorie: prev.key,
                })
              )
            }
          >
            Prev <ArrowBackIosNewIcon style={{ width: 20, height: 20 }} />
          </span>
        </Link>
      )}
      {next && (
        <Link to={next.path}>
          <span
            onClick={() =>
              dispatch(
                change({
                  newCategorie: next.key,
                })
              )
            }
          >
            <ArrowForwardIosIcon style={{ width: 20, height: 20 }} /> Next
          </span>
        </Link>
      )}
    </div>
  );
};

export default CustomNavigation;
