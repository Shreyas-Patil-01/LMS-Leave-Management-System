import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const HodLoginModal = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [designation, setDesignation] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleDesignation = (event) => {
    console.log(event.target.value);
    setDesignation(event.target.value);
  };

  const designations = [
    "Computer Science",
    "Electrical and Electronics",
    "Electronics and Communication",
    "Civil",
    "Chemical",
    "Mechanical",
    "Bio Technology",
    "Artificial intelligence",
    "BCA",
    "MCA",
    "MBA",
    "Library",
    "Office",
    "Placement",
  ];

  const style = {
    position: "absolute",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: "-webkit-fill-available",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const textStyle = {
    fontSize: "25px",
    fontWeight: "bold",
    color: "#1976d2",
    alignSelf: "center",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={textStyle}>
          HOD / Office / Librarian / TPO Login
        </Typography>
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Designation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={designation}
            label="Designation"
          >
            {designations.map((item) => (
              <MenuItem key={item} value={designation}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
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

        <Button variant="contained">Login</Button>
        <br />
      </Box>
    </Modal>
  );
};

export default HodLoginModal;
