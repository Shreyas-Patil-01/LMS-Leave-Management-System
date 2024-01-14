import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import LeaveDetails from "./LeaveDetails";
import CustomTable from "./CustomTable.jsx";
import SelectStaffModal from "./SelectStaffModal.jsx";
//All values in the table are Hardcoded, do change accordingly

const StaffClassAdjustment = ({ leaveForm }) => {
  const [datetime, setDatetime] = useState(undefined);
  const [semClass, setSemClass] = useState("");
  const [staff, setStaff] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const headers = ["Date and Time", "Sem Class / Lab", "Adjust to Staff"];

  const handleAdd = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const adjustDetails = [
    {
      lid: 1,
      date: "12/01/2023",
      time: "9.00AM",
      class: "5th-sem B-div",
      staff: "Anusha killekar",
    },
  ];
  const titleChip = {
    backgroundColor: "#1976d2",
    color: "white",
    margin: "10px",
  };

  const headStyle = {
    color: "#1565c0",
    fontWeight: "bold",
    fontSize: "20px",
  };

  const labelStyle = {
    color: "#808080",
  };

  const valueStyle = {
    fontWeight: "bold",
    color: "#1565c0",
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ textAlign: "center", height: "0px" }}>
        <Chip label="Class Adjustment" sx={titleChip} />
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          padding: "10px",
          borderRight: "1px solid black",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={valueStyle}>
          Leave Details
        </Typography>
        <LeaveDetails details={leaveForm} />
        <br />
        <Typography variant="h6" sx={valueStyle}>
          Adjust Work
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker
              onChange={(e) => setDatetime(e.target.value)}
              sx={{ width: "100px", alignSelf: "center" }}
              label="Date and Time"
            />
          </DemoContainer>
        </LocalizationProvider>
        <br />
        <TextField
          onChange={(e) => setSemClass(e.target.value)}
          id="outlined-basic"
          label="Sem and class / Lab"
          variant="outlined"
          sx={{ width: "270px" }}
        />
        <br />
        <br />
        <Grid>
          <TextField
            disabled
            id="outlined-basic"
            label="Select Staff"
            variant="outlined"
            sx={{ width: "200px" }}
          />
          <Button
            variant="contained"
            sx={{ height: "55px", padding: "13px" }}
            onClick={handleAdd}
          >
            Staff
          </Button>
          <SelectStaffModal open={openModal} handleClose={handleClose} />
        </Grid>
        <Button variant="contained" sx={{ margin: "10px" }}>
          Add
        </Button>
      </Grid>
      <Grid item xs={8} sx={{ padding: "10px", textAlign: "center" }}>
        <CustomTable
          headers={headers}
          values={adjustDetails}
          tableName={"class adjust"}
        />
        <Button variant="contained" sx={{ margin: "10px" }}>
          Send Request
        </Button>
      </Grid>
    </Grid>
  );
};

export default StaffClassAdjustment;
