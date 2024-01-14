import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import kle from "../assets/kle.jpg";
import "./styling.css";
import StaffDashboard from "./StaffDashboard";
import leave from "../assets/leave.svg";
import classAdjustment from "../assets/classAdjustment.svg";
import leaveAdjustment from "../assets/checkStatus.svg";
import calendar from "../assets/calendar.svg";
import Change_password from "../assets/Change_password.svg";
import logout from "../assets/logout.svg";
import { useState } from "react";
import StaffApplyLeave from "./StaffApplyLeave";
import StaffClassAdjustment from "./StaffClassAdjustment";
import StaffPasswordChange from "./StaffPasswordChange";
import notification from "../assets/notification.svg";
import { useNavigate } from "react-router-dom";
import homeIcon from "../assets/home-icon.svg";
import StaffHome from "./StaffHome";
import StaffClassAdjustmentStatus from "./StaffClassAdjustmentStatus";
import StaffLeaveDetails from "./StaffLeaveDetails";

const Staff = () => {
  const navigate = useNavigate();
  const [activeState, setActiveState] = useState("Home");
  const [leaveForm, setLeaveForm] = useState({
    leaveType: "",
    numberOfDays: "",
    fromDate: "",
    toDate: "",
    reason: "",
    workAdjusted: "",
  });

  const handleReset = () => {
    setLeaveForm({
      leaveType: "",
      numberOfDays: "",
      fromDate: "",
      toDate: "",
      reason: "",
      workAdjusted: "",
    });
  };

  useEffect(() => {
    if (activeState === "Logout") {
      logoutUser();
    }
  });

  const dashboarditems = [
    { name: "Apply Leave", icon: leave, selected: true },
    {
      name: "Class Adjustment",
      icon: classAdjustment,
      selected: false,
    },
    { name: "Leave Adjustment Status", icon: leaveAdjustment, selected: false },
    { name: "Leave Details of Current Year", icon: calendar, selected: false },
    { name: "Change Password", icon: Change_password, selected: false },
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

  const handleClassAdjust = () => {
    setActiveState("Class Adjustment");
  };
  const logoutUser = () => {
    navigate("/");
  };

  let mainComponentContent = <StaffHome />;

  if (activeState === "Apply Leave")
    mainComponentContent = (
      <StaffApplyLeave
        handleNext={handleClassAdjust}
        handleReset={handleReset}
        leaveForm={leaveForm}
        setLeaveForm={setLeaveForm}
      />
    );
  else if (activeState === "Class Adjustment")
    mainComponentContent = <StaffClassAdjustment leaveForm={leaveForm} />;
  else if (activeState === "Leave Adjustment Status")
    mainComponentContent = <StaffClassAdjustmentStatus />;
  else if (activeState === "Leave Details of Current Year")
    mainComponentContent = <StaffLeaveDetails />;
  else if (activeState === "Change Password")
    mainComponentContent = <StaffPasswordChange />;

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
            Staff Management
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
            <StaffDashboard
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
export default Staff;
