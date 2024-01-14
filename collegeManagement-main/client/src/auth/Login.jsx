import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import kleLogo from "../assets/kleLogo.jpeg";
import collegeImage from "../assets/collegeImage.jpg";
import "./styling.css";
import Card from "@mui/material/Card";
import principal from "../assets/principal.jpg";
import admin from "../assets/admin.png";
import staff from "../assets/staff.png";
import hod from "../assets/hod.png";
import Button from "@mui/material/Button";
import PrincipalLoginModal from "./PrincipalLoginModal";
import HodLoginModal from "./HodLoginModal";
import AdminLoginModal from "./AdminLoginModal";
import StaffLoginModal from "./StaffLoginModal";

const Login = () => {
  const [openPrincipalModal, setOpenPrincipalModal] = useState(false);
  const [openHodLoginModal, setOpenHodLoginModal] = useState(false);
  const [openAdminLoginModal, setOpenAdminLoginModal] = useState(false);
  const [openStaffLoginModal, setOpenStaffLoginModal] = useState(false);
  const handleOpenPrincipalModal = () => setOpenPrincipalModal(true);
  const handleClosePrincipalModal = () => setOpenPrincipalModal(false);
  const handleOpenHodLoginModal = () => setOpenHodLoginModal(true);
  const handleCloseHodLoginModal = () => setOpenHodLoginModal(false);
  const handleOpenAdminLoginModal = () => setOpenAdminLoginModal(true);
  const handleCloseAdminLoginModal = () => setOpenAdminLoginModal(false);
  const handleOpenStaffLoginModal = () => setOpenStaffLoginModal(true);
  const handleCloseStaffLoginModal = () => setOpenStaffLoginModal(false);

  const cardStyle = {
    border: "1px #E8E8E8 solid",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    margin: "30px",
    borderRadius: "10px",
    ":hover": {
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
      border: "3px solid #E8E8E8",
    },
  };

  const typographyStyle = {
    fontSize: "0.60rem",
  };

  return (
    <Box>
      <Grid
        container
        sx={{
          backgroundImage: `url(${collegeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "1490px 730px",
          height: "715px",
        }}
      >
        <Grid container sx={{ overflow: "hidden" }}>
          <Grid item xs={12} sx={{ textAlignLast: "center" }}>
            <img src={kleLogo} alt="logo" className="kleLogo" />
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={3}>
            <Card sx={cardStyle}>
              <img src={principal} alt="principal" className="cardImage" />
              <Button
                variant="contained"
                onClick={handleOpenPrincipalModal}
                sx={typographyStyle}
              >
                Principal Login
              </Button>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={cardStyle}>
              <img src={admin} alt="admin" className="cardImage" />
              <Button
                variant="contained"
                onClick={handleOpenAdminLoginModal}
                sx={typographyStyle}
              >
                Administrator Login
              </Button>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={cardStyle}>
              <img src={staff} alt="staff" className="cardImage" />
              <Button
                variant="contained"
                onClick={handleOpenStaffLoginModal}
                sx={typographyStyle}
              >
                Staff Login
              </Button>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={cardStyle}>
              <img src={hod} alt="hod" className="cardImage" />
              <Button
                variant="contained"
                onClick={handleOpenHodLoginModal}
                sx={typographyStyle}
              >
                HOD / Office / Librarian / TPO Login
              </Button>
            </Card>
          </Grid>
        </Grid>
        <PrincipalLoginModal
          open={openPrincipalModal}
          handleClose={handleClosePrincipalModal}
        />
        <AdminLoginModal
          open={openAdminLoginModal}
          handleClose={handleCloseAdminLoginModal}
        />
        <StaffLoginModal
          open={openStaffLoginModal}
          handleClose={handleCloseStaffLoginModal}
        />
        <HodLoginModal
          open={openHodLoginModal}
          handleClose={handleCloseHodLoginModal}
        />
      </Grid>
    </Box>
  );
};

export default Login;
