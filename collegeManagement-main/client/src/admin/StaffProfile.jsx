import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import ProfileImage from "../assets/profileImage.svg";
import name from "../assets/name.svg";
import contact from "../assets/contact.svg";
import department from "../assets/department.svg";
import designation from "../assets/designation.svg";
import email from "../assets/email.svg";
import qualification from "../assets/qualification.svg";
import address from "../assets/address.svg";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const profileHeader = {
  backgroundColor: "#1976d2",
  padding: "20px",
};

const imageStyle = {
  height: "40px",
  width: "40px",
};

const infoStyle = {
  margin: "10px",
  display: "flex",
};

const textStyle = {
  paddingLeft: "40px",
  paddingTop: "10px",
};

const activeStyle = {
  backgroundColor: "#4CBB17",
  height: "40px",
  margin: "10%",
  ":hover": {
    backgroundColor: "#7CFC00",
  },
};

const deleteStyle = {
  backgroundColor: "#EE4B2B",
  margin: "10px",
  ":hover": {
    backgroundColor: "#FF0000",
  },
};

const StaffProfile = ({ profile, open, handleClose }) => {
  console.log(profile);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container>
          <Grid item xs={12} sx={profileHeader} display={"flex"}>
            <img
              src={ProfileImage}
              alt="profileImage"
              style={{ Height: "80px", width: "80px", marginRight: "50px" }}
            />
            <Typography variant="h5" sx={{ color: "white" }}>
              {profile.Name}
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={5.5} sx={infoStyle}>
              <img src={name} alt="name" style={imageStyle} />
              <Typography sx={textStyle}>{profile.Name}</Typography>
            </Grid>
            <Grid item xs={5.5} sx={infoStyle}>
              <img src={contact} alt="contact" style={imageStyle} />
              <Typography sx={textStyle}>{profile["CONTACT NO "]}</Typography>
            </Grid>
            <Grid item xs={5.5} sx={infoStyle}>
              <img src={department} alt="department" style={imageStyle} />
              <Typography sx={textStyle}>{profile.Dept}</Typography>
            </Grid>
            <Grid item xs={5.5} sx={infoStyle}>
              <img src={email} alt="email" style={imageStyle} />
              <Typography sx={textStyle}>{profile["EMAIL ID "]}</Typography>
            </Grid>
            <Grid item xs={5.5} sx={infoStyle}>
              <img src={designation} alt="designation" style={imageStyle} />
              <Typography sx={textStyle}>{profile.Design}</Typography>
            </Grid>
            <Grid item xs={5.5} sx={infoStyle}>
              <img src={qualification} alt="qualification" style={imageStyle} />
              <Typography sx={textStyle}>{profile.Qualification}</Typography>
            </Grid>
            <Grid item xs={5.5} sx={infoStyle}>
              <img src={address} alt="address" style={imageStyle} />
              <Typography sx={textStyle}>
                {profile["Permanent Address"]}
              </Typography>
            </Grid>
            <Grid item xs={5.5} sx={infoStyle}>
              <Button variant="contained" sx={activeStyle}>
                active
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" sx={deleteStyle}>
                delete Employee
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default StaffProfile;
