import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import Divider from "@mui/material/Divider/Divider";
import ShareIcon from "@mui/icons-material/Share";
import UnfoldMoreDoubleIcon from "@mui/icons-material/UnfoldMoreDouble";
import { Tooltip } from "@mui/material";

interface ICustomCardProps {
  index: string;
  title: string;
  description?: string;
}

const RealisationCard: React.FunctionComponent<ICustomCardProps> = ({
  index,
  title,
  description,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          <div
            className="flex justify-between items-center"
            style={{
              fontSize: "14px",
              fontFamily: "Inter sans-serif",
              fontWeight: 500,
            }}
          >
            <span className="font-bold">{title}</span>
            <div className="flex gap-3 items-center">
              <span>
                <Tooltip title="Partager">
                  <ShareIcon style={{ fontSize: "14px" }} />
                </Tooltip>
              </span>
              <span>
                <Tooltip title="Pus d'information">
                  <UnfoldMoreDoubleIcon style={{ fontSize: "14px" }} />
                </Tooltip>
              </span>
            </div>
          </div>
        }
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description ?? ""}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RealisationCard;
