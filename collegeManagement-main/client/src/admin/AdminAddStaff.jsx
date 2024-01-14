import React, { useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const AdminAddStaff = ({ addForm, setAddForm, handleReset, handleSubmit }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
      <Chip label="Add Staff Information" sx={titleChip} />

      <FormControl
        sx={{ m: 1, minWidth: 300, width: "500px", alignSelf: "center" }}
        size="small"
      >
        <TextField
          size="small"
          id="outlined-basic"
          label="Staff ID"
          variant="outlined"
          type="number"
          value={addForm.StaffID}
          sx={{ height: "50px" }}
          onChange={(event) =>
            setAddForm((prev) => {
              return {
                ...prev,
                StaffID: event.target.value,
              };
            })
          }
        />
        <br />
        <FormControl variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={addForm.password}
            onChange={(event) =>
              setAddForm((prev) => {
                return {
                  ...prev,
                  password: event.target.value,
                };
              })
            }
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <br />
        <TextField
          size="small"
          id="outlined-multiline-static"
          label="Name"
          value={addForm.name}
          onChange={(event) =>
            setAddForm((prev) => {
              return {
                ...prev,
                name: event.target.value,
              };
            })
          }
        />
        <br />
        <FormControl variant="outlined" size="small">
          <InputLabel id="demo-select-small-label">Department</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={addForm.dept}
            label="department"
            onChange={(event) =>
              setAddForm((prev) => {
                return {
                  ...prev,
                  dept: event.target.value,
                };
              })
            }
          >
            <MenuItem value={addForm.dept}>
              <em>None</em>
            </MenuItem>
            <MenuItem value="CS">CS</MenuItem>
            <MenuItem value="EC">EC</MenuItem>
            <MenuItem value="CV">CV</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl variant="outlined" size="small">
          <InputLabel id="demo-select-small-label">Staff Type</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={addForm.staffType}
            label="Staff Type"
            onChange={(event) =>
              setAddForm((prev) => {
                return {
                  ...prev,
                  staffType: event.target.value,
                };
              })
            }
          >
            <MenuItem value={addForm.staffType}>
              <em>None</em>
            </MenuItem>
            <MenuItem value="Teaching">Teaching</MenuItem>
            <MenuItem value="Non-teaching">Non-teaching</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl variant="outlined" size="small">
          <InputLabel id="demo-select-small-label">Designation</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={addForm.designation}
            label="Designation"
            onChange={(event) =>
              setAddForm((prev) => {
                return {
                  ...prev,
                  designation: event.target.value,
                };
              })
            }
          >
            <MenuItem value={addForm.designation}>
              <em>None</em>
            </MenuItem>
            <MenuItem value="Assistent Professor">Assistent Professor</MenuItem>
            <MenuItem value="Senior assistent Professor">
              Senior assistent Professor
            </MenuItem>
            <MenuItem value="HOD">HOD</MenuItem>
          </Select>
        </FormControl>
        <br />
        <TextField
          size="small"
          id="outlined-basic"
          label="Email ID"
          variant="outlined"
          value={addForm.email}
          type="email   "
          onChange={(event) =>
            setAddForm((prev) => {
              return {
                ...prev,
                email: event.target.value,
              };
            })
          }
        />
        <br />
        <TextField
          size="small"
          id="outlined-basic"
          label="Mobile No."
          variant="outlined"
          value={addForm.mobileNo}
          type="text"
          onChange={(event) =>
            setAddForm((prev) => {
              return {
                ...prev,
                mobileNo: event.target.value,
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
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Grid>
  );
};
export default AdminAddStaff;
