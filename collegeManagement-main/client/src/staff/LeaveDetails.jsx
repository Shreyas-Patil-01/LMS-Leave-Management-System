import { Grid, Typography } from "@mui/material";
import React from "react";

const LeaveDetails = ({ details }) => {
  const leaveDetailsBox = {
    padding: "10px",
    color: "black",
    fontWeight: "bold",
    marginLeft: "1px",
  };

  return (
    <Grid sx={leaveDetailsBox}>
      <Typography>Leave Type: {details.leaveType}</Typography>
      <Typography>Number of Days: {details.numberOfDays}</Typography>
      <Typography>From Date: {details.fromDate}</Typography>
      <Typography>To Date: {details.toDate}</Typography>
      <Typography>
        Number of Classes to Adjust: {details.workAdjusted}
      </Typography>
    </Grid>
  );
};
export default LeaveDetails;
