import React from "react";
import { Grid, Typography } from "@mui/material";
import "./styling.css";
const StaffDashboard = ({ dashboardItems, handleActiveState, activeState }) => {
  const dashboardStyle = {
    padding: "10px",
    ":hover": {
      color: "#1976d2",
      fontWeight: "800",
      background: "#e8e8e8",
      borderLeft: "5px solid #1976d2",
      marginLeft: "1px",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
    },
  };
  const dashboardStyleSelected = {
    padding: "10px",
    color: "#1976d2",
    fontWeight: "800",
    background: "#e8e8e8",
    borderLeft: "5px solid #1976d2",
    marginLeft: "1px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
  };
  return (
    <>
      {dashboardItems.map((item) => (
        <Grid
          key={item.name}
          container
          sx={
            item.name === activeState ? dashboardStyleSelected : dashboardStyle
          }
          onClick={() => handleActiveState(item.name)}
        >
          <Grid item xs={2}>
            <img src={item.icon} alt={item.icon} className="dashboard-icon" />
          </Grid>
          <Grid item xs={10}>
            <Typography sx={{ paddingTop: "7px" }}>{item.name}</Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default StaffDashboard;
