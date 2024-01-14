import React from "react";
import { Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import CustomTable from "./CustomTable";

const StaffClassAdjustmentStatus = () => {
  const classAdjustedHeaders = [
    "Staff Adjusted by",
    "Satff Adjusted ID",
    "Staff Leave ID",
    "Class Adjusted Date",
    "Class / Lab Adjusted",
    "adjustment Confirmation",
  ];

  let dummyClassAdjustedData = [
    { StaffAdjustedBy: "rakhi" },
    { SatffAdjustedID: 34 },
    { StaffLeaveID: 45 },
    { ClassAdjustedDate: "12/01/2023" },
    { ClassOrLabAdjusted: "1st sem ADE" },
    { adjustmentConfirmation: "Yes" },
  ];

  const pendingConfirmationHeaders = [
    "Staff Name",
    "Staff Id",
    "Leave ID",
    "Class Date",
    "Class / Lab",
    "Your ID",
  ];

  let dummyPendingAdjustmentData = [
    { StaffName: "Yogita" },
    { StaffId: 56 },
    { LeaveID: 78 },
    { ClassDate: "12/10/2023" },
    { ClassOrLab: "DSA Lab" },
    { YourID: 76 },
  ];

  const titleChip = {
    backgroundColor: "#1976d2",
    color: "white",
    margin: "10px",
    alignSelf: "center",
    width: "500px",
  };
  const headStyle = {
    marginTop: "20px",
    color: "#1565c0",
    fontWeight: "bold",
    fontSize: "20px",
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "5px",
        paddingLeft: "5px",
        textAlign: "center",
      }}
    >
      <Chip label="Class Adjustment Status" sx={titleChip} />
      <Typography sx={headStyle}>Class Adjusted Confirmation:</Typography>
      <CustomTable
        headers={classAdjustedHeaders}
        values={dummyClassAdjustedData}
        tableName={"class adjusted"}
      />
      <Typography sx={headStyle}>
        Pending Class adjustment Confirmation Sent By:
      </Typography>
      <CustomTable
        headers={pendingConfirmationHeaders}
        values={dummyPendingAdjustmentData}
        tableName={"pending class adjustment"}
      />
    </Grid>
  );
};

export default StaffClassAdjustmentStatus;
