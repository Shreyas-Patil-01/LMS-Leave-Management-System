import { Grid } from "@mui/material";
import React, { useState } from "react";
import tech from "../data/tech.json";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import StaffProfile from "./StaffProfile";

//All values in the table are Hardcoded, do change accordingly

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "5px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AdminHome = () => {
  const [searchBy, setSearchBy] = useState("none");
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState(tech[0]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const openModal = (row) => {
    setProfile(row);
    setOpen(true);
  };
  return (
    <Grid container>
      <Grid item xs={12} sx={{ display: "flex", margin: "10px" }}>
        <Grid item xs={2}>
          <FormControl variant="outlined" size="small" sx={{ width: "170px" }}>
            <InputLabel id="demo-select-small-label">Search By</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={searchBy}
              label="Search By"
              onChange={(event) => setSearchBy(event.target.value)}
            >
              <MenuItem value="ID">ID</MenuItem>
              <MenuItem value="Department">Department</MenuItem>
              <MenuItem value="Designation">Designation</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <TextField
            size="small"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Grid>
        <Grid item xs={2} sx={{ marginLeft: "10px" }}>
          <Button variant="contained">Search</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ padding: "3px" }}>
        <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
          <Table
            sx={{ minWidth: 400 }}
            aria-label="customized table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">ID</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Designation</StyledTableCell>
                <StyledTableCell align="left">Department</StyledTableCell>
                <StyledTableCell align="left">Email Address</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tech.map((row) => (
                <StyledTableRow key={row["Sl NO "]} sx={{ overflow: "auto" }}>
                  <StyledTableCell align="center">
                    {row["Sl NO "]}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Link onClick={() => openModal(row)}>{row.Name}</Link>
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.Design}</StyledTableCell>
                  <StyledTableCell align="center">{row.Dept}</StyledTableCell>
                  <StyledTableCell align="left" sx={{ color: "#0047AB	s" }}>
                    {row["EMAIL ID "]}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <StaffProfile profile={profile} handleClose={handleClose} open={open} />
      </Grid>
    </Grid>
  );
};

export default AdminHome;
