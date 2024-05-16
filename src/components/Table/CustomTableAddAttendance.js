import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const CustomTableAddAttendance = ({ headRows,  attendanceList }) => {
  console.log('attendanceList', attendanceList);
  // const 

 

  return (
    <TableContainer className="custom_table" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headRows?.map((item) => (
              <TableCell align="center">{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceList?.map((row,index) => (
            <TableRow  key={row.id}>
              <TableCell align="center">{row?.student?.personal_info?.full_name}</TableCell>
              {row?.attendanceList?.map((item) => (
                <TableCell align="center">{item?.status}</TableCell>
              ))}
              {/* <TableCell align="center">{row?.status}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
};

export default CustomTableAddAttendance;
