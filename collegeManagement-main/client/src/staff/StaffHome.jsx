import React from "react";
import { Grid, Typography } from "@mui/material";
import profileImage from "../assets/profileImage.svg";
import CustomTable from "./CustomTable";

const StaffHome = () => {
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
  const headStyle = {
    color: "#1565c0",
    fontWeight: "bold",
    fontSize: "18px",
  };

  const profileStyle = {
    textAlign: "center",
    borderRight: "1px solid #DCDCDC	",
    margin: "5px",
  };
  const leaveDetailStyle = {
    textAlign: "center",
    margin: "5px",
  };
  const labelStyle = {
    color: "#808080",
    marginTop: "10px",
  };
  const valueStyle = {
    fontWeight: "bold",
    color: "#1565c0",
  };

  return (
    <Grid container>
      <Grid item xs={2.5} sx={profileStyle}>
        <Typography sx={headStyle}>Employee Details</Typography>
        <img src={profileImage} alt="profile" className="profileImage" />
        <Typography sx={labelStyle}>Staff Id</Typography>
        <Typography sx={valueStyle}>CS09</Typography>
        <Typography sx={labelStyle}>Staff Name</Typography>
        <Typography sx={valueStyle}>Savita Bakare</Typography>
        <Typography sx={labelStyle}>Designation</Typography>
        <Typography sx={valueStyle}>Assistent Professor</Typography>
        <Typography sx={labelStyle}>Department</Typography>
        <Typography sx={valueStyle}>CS</Typography>
        <Typography sx={labelStyle}>Email Id</Typography>
        <Typography sx={valueStyle}>savitaBakare@gmail</Typography>
      </Grid>
      <Grid item xs={9.2} sx={leaveDetailStyle}>
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
    </Grid>
  );
};

export default StaffHome;
