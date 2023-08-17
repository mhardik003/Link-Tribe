import React from "react";
import { useState, useEffect } from "react";
import { Button, Icon, IconButton, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

import TableRow from "@mui/material/TableRow";

function createData(name, upvotes, downvotes, upvoted, downvoted) {
  return {
    name,
    upvotes: upvotes,
    downvotes: downvotes,
    upvoted: upvoted,
    downvoted: downvoted,
  };
}

const scrapedData = [
  {
    name: "google.com",
    upvotes: 2,
    downvotes: 4,
  },
  {
    name: "youtube.com",
    upvotes: 2,
    downvotes: 4,
  },
  {
    name: "facebook.com",
    upvotes: 2,
    downvotes: 4,
  },
  {
    name: "amazon.com",
    upvotes: 2,
    downvotes: 4,
  },
  {
    name: "reddit.com",
    upvotes: 2,
    downvotes: 4,
  },
];

function MainBody() {
  const [rows, setRows] = React.useState(
    scrapedData.map((data) => {
      return createData(data.name, data.upvotes, data.downvotes, false, false);
    })
  );

  console.log(rows);
  function checkUpvoted(row) 
  {
    console.log("Checking upvoted", row.name);
    if (row.upvoted) {
      setRows((prevRows) => {
        const newRows = [...prevRows];
        const index = newRows.findIndex((temp) => temp.name === row.name);
        newRows[index].upvotes -= 1;
        newRows[index].upvoted = false;
        return newRows;
      });
    }
  }
  function downvote(downvotedRow) {
    console.log("Downvoting the row", downvotedRow.name);
    if (downvotedRow.downvoted) {
      setRows((prevRows) => {
        const newRows = [...prevRows];
        const index = newRows.findIndex(
          (row) => row.name === downvotedRow.name
          );
          newRows[index].downvotes -= 1;
          newRows[index].downvoted = false;
          return newRows;
        });
      } else {
        checkUpvoted(downvotedRow);
        setRows((prevRows) => {
        const newRows = [...prevRows];
        const index = newRows.findIndex(
          (row) => row.name === downvotedRow.name
        );
        newRows[index].downvotes += 1;
        newRows[index].downvoted = true;
        return newRows;
      });
    }
  }

  function checkDownvoted(row) {
    console.log("Checking downvoted", row.name);
    if (row.downvoted) {
      setRows((prevRows) => {
        const newRows = [...prevRows];

        const index = newRows.findIndex((temp) => temp.name === row.name);
        newRows[index].downvotes -= 1;
        newRows[index].downvoted = false;
        return newRows;
      });
    }
  }

  function upvote(upvotedRow) {
    console.log("Upvoting the row", upvotedRow.name);
    if (upvotedRow.upvoted) {
      setRows((prevRows) => {
        const newRows = [...prevRows];
        const index = newRows.findIndex((row) => row.name === upvotedRow.name);
        newRows[index].upvotes -= 1;
        newRows[index].upvoted = false;
        return newRows;
      });
    } else {
      checkDownvoted(upvotedRow);
      setRows((prevRows) => {
        const newRows = [...prevRows];

        const index = newRows.findIndex((row) => row.name === upvotedRow.name);
        newRows[index].upvotes += 1;
        newRows[index].upvoted = true;
        return newRows;
      });
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography variant="h4" textAlign="center">
                Websites
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h4" textAlign="center">
                Upvotes
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h4" textAlign="center">
                Downvotes
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>

              <TableCell align="center">
                {row.upvotes}
                <IconButton
                  onClick={() => {
                    console.log("Upvoted ", row.name);
                    upvote(row);
                  }}
                >
                  {/* use mui up arrow filled icon  if already upvoted else use outlined arrow mui iocon */}
                  {row.upvoted ? <ThumbUpIcon /> : <ThumbUpAltOutlinedIcon />}
                </IconButton>
              </TableCell>
              <TableCell align="center">
                {row.downvotes}
                <IconButton
                  onClick={() => {
                    console.log("Downvoted ", row.name);
                    downvote(row);
                  }}
                >
                  {/* use mui down arrow filled icon  if already downvoted else use outlined arrow mui iocon */}
                  {row.downvoted ? (
                    <ThumbDownIcon />
                  ) : (
                    <ThumbDownAltOutlinedIcon />
                  )}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MainBody;
