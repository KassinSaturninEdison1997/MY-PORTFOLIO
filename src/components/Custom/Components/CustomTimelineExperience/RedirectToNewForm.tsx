import { Link } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const RedirectToNewForm = ({ path }: { path: string }) => {
  return (
    <Link to={path}>
      <span
        className="border-dashed items-center justify-center p-3  border-4 flex gap-3  bg-slate-50 rounded-xl pb-9 pt-9 mt-4"
        style={{
          borderTop: "10px solid #1f2937",
          width: "400px",
        }}
      >
        <AddOutlinedIcon
          style={{ fontSize: 70, color: "grey", fontWeight: 500 }}
        />
      </span>
    </Link>
  );
};
export default RedirectToNewForm;
