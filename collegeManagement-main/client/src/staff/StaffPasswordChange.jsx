import React, { useState } from "react";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import changePassword from "../assets/changePassword.svg";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const StaffPasswordChange = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleReset = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleChangePassword = () => {
    console.log(oldPassword);
    console.log(newPassword);
    console.log(confirmPassword);
  };

  const titleChip = {
    backgroundColor: "#1976d2",
    color: "white",
    padding: "10px",
    margin: "10px",
  };
  return (
    <Grid container sx={{ justifyContent: "center", padding: "20px" }}>
      <Grid
        item
        xs={7}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Chip label="Password Change" sx={titleChip} />
        <br />
        <br />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Old Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showOldPassword ? "text" : "password"}
            onChange={(event) => setOldPassword(event.target.value)}
            value={oldPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowOldPassword}
                  edge="end"
                >
                  {showOldPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Old Password"
          />
        </FormControl>
        <br />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            New Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showNewPassword ? "text" : "password"}
            onChange={(event) => setNewPassword(event.target.value)}
            value={newPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowNewPassword}
                  edge="end"
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="New Password"
          />
        </FormControl>
        <br />

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showConfirmPassword ? "text" : "password"}
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        <br />
        <br />
        <Grid container display={"flex"}>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleReset}>
              Reset
            </Button>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handleChangePassword}>
              Change
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <img src={changePassword} alt="change password" />
      </Grid>
    </Grid>
  );
};

export default StaffPasswordChange;
