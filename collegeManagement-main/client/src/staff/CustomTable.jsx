import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//All values in the table are Hardcoded, do change accordingly

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const CustomTable = ({ headers, values, tableName }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((heading) => (
              <StyledTableCell key={heading} align="center">
                {heading}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableName === "class adjust" &&
            values?.map((row) => (
              <StyledTableRow key={row.lid}>
                <StyledTableCell align="center">
                  {row.date} & {row.time}
                </StyledTableCell>
                <StyledTableCell align="center">{row.class}</StyledTableCell>
                <StyledTableCell align="center">{row.staff}</StyledTableCell>
              </StyledTableRow>
            ))}

          {/* {tableName === "class adjusted" &&
            values?.map((row) => (
              <StyledTableRow key={row.StaffLeaveID}>
                <StyledTableCell align="center">
                  {row.StaffAdjustedBy}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.SatffAdjustedID}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.StaffLeaveID}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.ClassAdjustedDate}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.ClassOrLabAdjusted}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.adjustmentConfirmation}
                </StyledTableCell>
              </StyledTableRow>
            ))} */}
          {/* {tableName === "pending class adjustment" &&
            values?.map((row) => (
              <StyledTableRow key={row.StaffId}>
                <StyledTableCell align="center">
                  {row.StaffName}
                </StyledTableCell>
                <StyledTableCell align="center">{row.StaffId}</StyledTableCell>
                <StyledTableCell align="center">{row.LeaveID}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.ClassDate}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.ClassOrLab}
                </StyledTableCell>
                <StyledTableCell align="center">{row.YourID}</StyledTableCell>
              </StyledTableRow>
            ))} */}
          {tableName === "Leave details" &&
            values?.map((row) => (
              <StyledTableRow key={row.lid}>
                <StyledTableCell align="center">{row.lid}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.applyDate}
                </StyledTableCell>
                <StyledTableCell align="center">{row.noOfDays}</StyledTableCell>
                <StyledTableCell align="center">{row.From}</StyledTableCell>
                <StyledTableCell align="center">{row.To}</StyledTableCell>
                <StyledTableCell align="center">{row.Reason}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.HODApproval}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.PrincipalApproval}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
