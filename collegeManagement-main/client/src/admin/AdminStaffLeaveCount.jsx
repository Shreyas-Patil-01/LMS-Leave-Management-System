import { Grid, Typography } from "@mui/material";
import React from "react";
// import tech from "../data/tech.json";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
// import TextField from "@mui/material/TextField";

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

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

const headStyle = {
  color: "#1565c0",
  fontWeight: "bold",
  fontSize: "18px",
  margin: "5px",
};

// cl - 12
// dl - unlimited
// pl - ?

const AdminStaffLeaveCount = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ padding: "3px" }}>
        <Typography sx={headStyle}>
          Count of Leave details of All Employees
        </Typography>
        <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
          <Table
            sx={{ minWidth: 400 }}
            aria-label="customized table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Staff Name</StyledTableCell>
                <StyledTableCell align="left">Department</StyledTableCell>
                <StyledTableCell align="left">Staff ID</StyledTableCell>
                <StyledTableCell align="left">
                  Casual Leave Count
                </StyledTableCell>
                <StyledTableCell align="left">Duty Leave Count</StyledTableCell>
                <StyledTableCell align="left">
                  Academic Leave Count
                </StyledTableCell>
              </TableRow>
            </TableHead>

            {/* <TableBody>
              {tech.map((row) => (
                <StyledTableRow key={row["Sl NO "]} sx={{ overflow: "auto" }}>
                  <StyledTableCell align="center">
                    {row["Sl NO "]}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.Name}</StyledTableCell>
                  <StyledTableCell align="left">{row.Design}</StyledTableCell>
                  <StyledTableCell align="center">{row.Dept}</StyledTableCell>
                  <StyledTableCell align="left" sx={{ color: "#0047AB	s" }}>
                    {row["EMAIL ID "]}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button variant="contained" sx={activeButton}>
                      Active
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button variant="contained" sx={deleteButton}>
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody> */}
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default AdminStaffLeaveCount;
