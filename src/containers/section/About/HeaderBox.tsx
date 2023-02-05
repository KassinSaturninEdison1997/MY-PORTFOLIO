import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import CustomButton from "../../../components/Custom/Components/CustomButton/CustomButton";
import AddIcon from "../../../components/Custom/Icons/AddIcon";
import { useAppSelector } from "../../../app/hooks";
import { isOnline } from "../../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { currentPath } from "../../../features/categorie/categorieSlice";
interface IHeaderBoxProps {
  title: string;
  addButton?: boolean;
  image?: {
    alt: string;
    hoverTitle: string;
    image: string;
  };
  onAction?: () => void;
}
const HeaderBox: React.FunctionComponent<IHeaderBoxProps> = ({
  image,
  title,
  addButton,
  onAction,
}) => {
  const isonline = useAppSelector(isOnline);
  const path = useAppSelector(currentPath);

  return (
    <header
      className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 rounded-md shadow-md"
      style={{ height: "100px", background: "#1f2937" }}
    >
      <span
        style={{
          fontSize: "40px",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
          fontWeight: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{title}</span>
        {addButton && isonline && (
          <Link to={`${path}/create`}>
            <CustomButton
              label="New"
              Icon={<AddIcon />}
              withIcon
              onAction={onAction}
            />
          </Link>
        )}
      </span>
      {image && (
        <div className="w-full flex justify-center cursor-pointer">
          <Tooltip title={image.hoverTitle}>
            <Avatar
              alt={image.alt}
              src={image.image}
              sx={{
                width: 150,
                height: 150,
                marginTop: "-50px",
                border: "10px solid #fff",
              }}
            />
          </Tooltip>
        </div>
      )}
    </header>
  );
};

export default HeaderBox;
