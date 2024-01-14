import React, { useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import applyLeave from "../assets/applyLeave.svg";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const StaffApplyLeave = ({
  leaveForm,
  setLeaveForm,
  handleReset,
  handleNext,
}) => {
  const titleChip = {
    backgroundColor: "#1976d2",
    color: "white",
    margin: "10px",
    alignSelf: "center",
    width: "500px",
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Chip label="Apply Leave" sx={titleChip} />
      <br />

      <FormControl
        sx={{ m: 1, minWidth: 300, width: "500px", alignSelf: "center" }}
        size="small"
      >
        <InputLabel id="demo-select-small-label">Type of Leave</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={leaveForm.leaveType}
          label="Type of Leave"
          onChange={(event) =>
            setLeaveForm((prev) => {
              return {
                ...prev,
                leaveType: event.target.value,
              };
            })
          }
        >
          <MenuItem value={leaveForm.leaveType}>
            <em>None</em>
          </MenuItem>
          <MenuItem value="Casual Leave">Casual Leave</MenuItem>
          <MenuItem value="Duty Leave">Duty Leave</MenuItem>
          <MenuItem value="Leave without pay">Leave without pay</MenuItem>
        </Select>
        <br />
        <TextField
          size="small"
          id="outlined-basic"
          label="Number of Days"
          variant="outlined"
          type="number"
          value={leaveForm.numberOfDays}
          sx={{ height: "50px" }}
          onChange={(event) =>
            setLeaveForm((prev) => {
              return {
                ...prev,
                numberOfDays: event.target.value,
              };
            })
          }
        />
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            inputFormat="MM/dd/yyyy"
            label="From (Select Date)"
            selected={new Date()}
            value={leaveForm.fromDate}
            slotProps={{ textField: { size: "small" } }}
            onChange={(event, date) =>
              setLeaveForm((prev) => {
                return {
                  ...prev,
                  fromDate: new Date(date).toLocaleDateString("fr-FR"),
                };
              })
            }
          />
        </LocalizationProvider>
        <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            inputFormat="MM/dd/yyyy"
            selected={new Date()}
            value={leaveForm.toDate}
            label="To (Select Date)"
            slotProps={{ textField: { size: "small" } }}
            onChange={(event, date) =>
              setLeaveForm((prev) => {
                return {
                  ...prev,
                  toDate: new Date(date).toLocaleDateString("fr-FR"),
                };
              })
            }
          />
        </LocalizationProvider>
        <br />
        <TextField
          size="small"
          id="outlined-multiline-static"
          label="Reason for Leave"
          multiline
          value={leaveForm.reason}
          rows={2}
          onChange={(event) =>
            setLeaveForm((prev) => {
              return {
                ...prev,
                reason: event.target.value,
              };
            })
          }
        />
        <br />
        <TextField
          size="small"
          id="outlined-basic"
          label="Number of Classes/Labs/Work to be adjusted"
          variant="outlined"
          value={leaveForm.workAdjusted}
          type="number"
          onChange={(event) =>
            setLeaveForm((prev) => {
              return {
                ...prev,
                workAdjusted: event.target.value,
              };
            })
          }
        />
        <br />
        <Grid container display={"flex"}>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleReset}>
              Reset
            </Button>
          </Grid>
          <Grid item xs={8.5}></Grid>
          <Grid item xs={1.5}>
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Grid>
  );
};
export default StaffApplyLeave;
