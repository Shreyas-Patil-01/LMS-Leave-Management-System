import React from "react";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import CustomTable from "./CustomTable";

const StaffLeaveDetails = () => {
  const headers = [
    "LID",
    "Apply Date",
    "No of Days",
    "From",
    "To",
    "Reason",
    "HOD Approval",
    "Principal Approval",
  ];
  //this is dummy data, change it to actual data later
  const casualLeaveDummyData = [
    {
      lid: 426,
      applyDate: "25/10/2023",
      noOfDays: 1,
      From: "26/10/2023",
      To: "27/10/2023",
      Reason: "Not well",
      HODApproval: "Yes",
      PrincipalApproval: "Yes",
    },
  ];
  const titleChip = {
    backgroundColor: "#1976d2",
    color: "white",
    margin: "10px",
    alignSelf: "center",
    width: "500px",
  };
  const headStyle = {
    color: "#1565c0",
    fontWeight: "bold",
    fontSize: "18px",
  };
  const labelStyle = {
    color: "#808080",
    marginTop: "10px",
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
      <Chip label="Staff Leave details of current Year" sx={titleChip} />

      <Typography sx={headStyle}>Leave Details</Typography>
      <Typography sx={labelStyle}>Current Year 2023</Typography>
      <Typography sx={headStyle}>Casual Leave Details</Typography>
      <CustomTable
        headers={headers}
        values={casualLeaveDummyData}
        tableName={"Leave details"}
      />

      <Typography sx={labelStyle}>No. of CL: 8</Typography>
      <Typography sx={headStyle}>Academic Leave Details</Typography>

      <CustomTable
        headers={headers}
        values={casualLeaveDummyData}
        tableName={"Leave details"}
      />
      <Typography sx={labelStyle}>No. of AL: 0</Typography>
      <Typography sx={headStyle}>Duty Leave Details</Typography>
      <CustomTable
        headers={headers}
        values={casualLeaveDummyData}
        tableName={"Leave details"}
      />
      <Typography sx={labelStyle}>No. of DL: 0</Typography>
    </Grid>
  );
};

export default StaffLeaveDetails;
