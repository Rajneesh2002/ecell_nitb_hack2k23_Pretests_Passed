import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Sanyam", 18908424, "Microsoft", "Placed"),
  createData("Aniket ", 18908424, "Microsoft", "Placed"),
  createData("Arin", 18908424, "JPMC", "Placed"),
  createData("Rajneesh", 18908421, "Google", "Placed"),
  createData("Rajneesh", 18908421, "Google", "Placed"),
  createData("Rajneesh", 18908421, "Google", "Placed"),
  ];


const makeStyle=(status)=>{
  if(status === 'Placed')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
    
      <div className="Table">
      <h3></h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029",border:" 2px solid red", }}
        >
          <Table sx={{ minWidth: 650 }}
          style={{ color: "red" ,border:" 2px solid red",}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Student</TableCell>
                <TableCell align="left">Scholar ID</TableCell>
                <TableCell align="left">Company</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "red" ,border:" 2px solid red",}}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 2 } }}
                  style={{ color: "red" ,border:" 2px solid red",}}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                   </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}