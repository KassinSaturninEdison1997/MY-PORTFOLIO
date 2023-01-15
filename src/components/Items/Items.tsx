import React from "react";
import _ from "lodash";
import { getSideItems, ISideOption } from "../../utils/Options";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  change,
  changePath,
  currentCategorie,
} from "../../features/categorie/categorieSlice";

const Items = () => {
  const Elements = getSideItems();
  const dispatch = useAppDispatch();

  const changecategorie = (key: string, path: string) => {
    dispatch(
      change({
        newCategorie: key,
      })
    );

    dispatch(
      changePath({
        newPath: path,
      })
    );
  };

  return (
    <div
      style={{
        marginTop: "30px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 100,
        fontSize: "16px",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
      }}
    >
      {_.map(Elements, (element: ISideOption) => (
        <Link to={element.path} key={element.key}>
          <IconLabel
            Icon={element.icon}
            Label={element.label}
            Key={element.key}
            onClick={() => changecategorie(element.key, element.path)}
          />
        </Link>
      ))}
    </div>
  );
};

const IconLabel = ({
  Icon,
  Label,
  Key,
  onClick,
}: {
  Icon: any;
  Label: string;
  Key: string;
  onClick: () => void;
}) => {
  const categorie = useAppSelector(currentCategorie);

  return (
    <div
      className="flex gap-3 items-center"
      onClick={onClick}
      style={{
        background: categorie === Key ? "#111827" : undefined,
        marginLeft: categorie === Key ? "-10px" : undefined,
        marginRight: categorie === Key ? "10px" : undefined,
        paddingLeft: categorie === Key ? "10px" : undefined,
        paddingTop: categorie === Key ? "10px" : undefined,
        paddingBottom: categorie === Key ? "10px" : undefined,
      }}
    >
      {<Icon style={{ color: "#fff" }} />}
      <span>{Label}</span>
    </div>
  );
};

export default Items;
