import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";
import React from "react";
import classNames from "classnames";
import Fab from "@mui/material/Fab";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import { Outlet } from "react-router-dom";
import CustomAlert from "../../components/Custom/Components/CustomAlert/CustomAlert";
import { useAppSelector } from "../../app/hooks";
import { allNotifications } from "../../features/notifications/notificationSlices";
import _ from "lodash";

const useStyles = makeStyles({
  common: {
    background: "#f3f4f6",
    color: "#000",
    padding: "10px",
    width: "80%",
  },
});

const Common = () => {
  const classes = useStyles();
  const notifications = useAppSelector(allNotifications);

  return (
    <Box className={classNames(classes.common, "grow")}>
      <div className="w-full h-full overflow-auto">
        <Outlet />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          padding: "30px",
          paddingRight: "30px",
          display: "flex",
          rowGap: "20px",
          flexDirection: "column",
        }}
      >
        <Tooltip title="LinkedIn" placement="left">
          <Link
            href={"https://www.linkedin.com/in/edison-kassin"}
            target={"_blank"}
          >
            <Fab color="inherit" aria-label="add">
              <LinkedInIcon style={{ color: "#0077b5" }} />
            </Fab>
          </Link>
        </Tooltip>

        <Tooltip title="GitHub" placement="left">
          <Link
            href="https://github.com/KassinSaturninEdison1997"
            target={"_blank"}
          >
            <Fab color="inherit" aria-label="add">
              <GitHubIcon style={{ color: "#171515" }} />
            </Fab>
          </Link>
        </Tooltip>
      </div>

      {!_.isEmpty(notifications) && (
        <CustomAlert notifications={notifications} />
      )}
    </Box>
  );
};

export default Common;
