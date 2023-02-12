import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import Divider from "@mui/material/Divider/Divider";
import UnfoldMoreDoubleIcon from "@mui/icons-material/UnfoldMoreDouble";
import { Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@mui/lab";

interface ICustomCardProps {
  title: string;
  description?: string;
  lien?: string;
}

const RealisationCard: React.FunctionComponent<ICustomCardProps> = ({
  title,
  description,
  lien,
}) => {
  const [openSnackbar, setOpenSnackbar] = React.useState({
    open: false,
    error: false,
    message: "",
  });

  async function handleCopyClick(txte: string) {
    try {
      await navigator.clipboard.writeText(txte);
      setOpenSnackbar({
        open: true,
        error: false,
        message: "Lien copy avec succes",
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setOpenSnackbar({
        open: true,
        error: true,
        message: "Echec de copie",
      });
    }
  }

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
              {lien && (
                <span onClick={() => handleCopyClick(lien)}>
                  <Tooltip title="Partager">
                    <ContentCopyIcon style={{ fontSize: "14px" }} />
                  </Tooltip>
                </span>
              )}
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

      <Snackbar
        open={openSnackbar.open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={() =>
          setOpenSnackbar({
            open: false,
            message: "",
            error: false,
          })
        }
      >
        <Alert
          onClose={() =>
            setOpenSnackbar({
              open: false,
              message: "",
              error: false,
            })
          }
          severity={openSnackbar.error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {openSnackbar.message}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default RealisationCard;
