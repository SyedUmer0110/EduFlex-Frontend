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

const CustomTable = ({ headRows,  attendances }) => {
  console.log(attendances);
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
          {attendances?.map((row,index) => (
            <TableRow  key={row.id}>
              <TableCell align="center">{index+1}</TableCell>
              <TableCell align="center">{row?.date}</TableCell>
              <TableCell align="center">{row?.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
};

export default CustomTable;
