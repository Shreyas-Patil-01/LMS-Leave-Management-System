import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import kle from "../assets/kle.jpg";
import addStaff from "../assets/addStaff.svg";
import blockDate from "../assets/blockDate.svg";
import passwordResetHod from "../assets/passwordResetHOD.svg";
import passwordResetCoordinate from "../assets/passwordResetCoordinate.svg";
import "./styling.css";
import AdminAddStaff from "./AdminAddStaff";
import AdminHome from "./AdminHome";
import logout from "../assets/logout.svg";
import { useState } from "react";
import notification from "../assets/notification.svg";
import { useNavigate } from "react-router-dom";
import homeIcon from "../assets/home-icon.svg";
import AdminDashboard from "./AdminDashboard";
import AdminChangePasswordCoordinator from "./AdminChangePasswordCoordinator";
import leaveCount from "../assets/leaveCount.svg";
import AdminStaffLeaveCount from "./AdminStaffLeaveCount";

const Admin = () => {
  const navigate = useNavigate();
  const [activeState, setActiveState] = useState("Home");
  const [addForm, setAddForm] = useState({
    StaffID: "",
    password: "",
    name: "",
    dept: "",
    staffType: "",
    designation: "",
    email: "",
    mobileNo: "",
  });

  const handleReset = () => {
    setAddForm({
      StaffID: "",
      password: "",
      name: "",
      dept: "",
      staffType: "",
      designation: "",
      email: "",
      mobileNo: "",
    });
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  useEffect(() => {
    if (activeState === "Logout") {
      logoutUser();
    }
  });

  const dashboarditems = [
    { name: "Add Staff", icon: addStaff, selected: true },
    { name: "Leave Count Current Year", icon: leaveCount, selected: false },
    { name: "Block Date", icon: blockDate, selected: false },
    {
      name: "Reset Password (HOD / Staff)",
      icon: passwordResetHod,
      selected: false,
    },
    {
      name: "Change Password",
      icon: passwordResetCoordinate,
      selected: false,
    },
    { name: "Logout", icon: logout, selected: false },
  ];

  const handleActiveState = (value) => {
    setActiveState(value);
  };

  const handleNotification = () => {
    console.log("notification");
  };

  const handleHome = () => {
    setActiveState("Home");
    console.log("Home");
  };

  const logoutUser = () => {
    navigate("/");
  };

  let mainComponentContent = <AdminHome />;

  if (activeState === "Add Staff")
    mainComponentContent = (
      <AdminAddStaff
        addForm={addForm}
        setAddForm={setAddForm}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      />
    );
  else if (activeState === "Leave Count Current Year")
    mainComponentContent = <AdminStaffLeaveCount />;
  else if (activeState === "Change Password")
    mainComponentContent = <AdminChangePasswordCoordinator />;
  //   else if (activeState === "Leave Details of Current Year")
  //     mainComponentContent = <StaffLeaveDetails />;
  //   else if (activeState === "Change Password")
  //     mainComponentContent = <StaffPasswordChange />;

  const mainComponentStyle = {
    backgroundColor: "white",
    margin: "15px",
    borderRadius: "10px",
  };

  return (
    <Box>
      <Grid container>
        <Grid
          container
          item
          sx={{
            backgroundColor: "#1976d2",
            display: "flex",
            textAlign: "center",
          }}
        >
          <Grid item xs={1}>
            <img src={kle} alt="logo" className="kle" />
          </Grid>

          <Grid
            item
            xs={9.5}
            sx={{
              color: "white",
              fontSize: "xx-large",
              padding: "15px",
              fontFamily: "sans-serif",
            }}
          >
            Admin Portal
          </Grid>
          <Grid item xs={0.5}>
            <img
              onClick={handleNotification}
              src={notification}
              alt="logo"
              className="notification"
            />
          </Grid>
          <Grid item xs={1}>
            <img
              onClick={handleHome}
              src={homeIcon}
              alt="home"
              className="home"
            />
          </Grid>
        </Grid>

        <Grid container item xs={12}>
          <Grid
            item
            xs={2.5}
            sx={{
              backgroundColor: "white",
              borderRight: "3px solid #C3C3C3",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
              height: "640px",
            }}
          >
            <AdminDashboard
              dashboardItems={dashboarditems}
              activeState={activeState}
              handleActiveState={handleActiveState}
            />
          </Grid>
          <Grid container item xs={9.2} sx={mainComponentStyle}>
            {mainComponentContent}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Admin;
