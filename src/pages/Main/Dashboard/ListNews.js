import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import deleteNewsData from "../../../redux/thunk/news/deleteNewsData";
import { Link } from "react-router-dom";
import { useTitle } from "../../../hooks/useTitle";

const ListNews = () => {
  useTitle("List Of News")
  const news = useSelector((state) => state.news);

  const isoDate = (dateString) => {
    const d = new Date(dateString);
    const date = d.toDateString();
    return date;
  };

  const dispatch = useDispatch();

  return (
    <Container>
      <Typography variant="h3">List of News</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "900" }}>Title</TableCell>
              <TableCell sx={{ fontWeight: "900" }} align="right">
                Published
              </TableCell>
              <TableCell sx={{ fontWeight: "900" }} align="right">
                Update
              </TableCell>
              <TableCell sx={{ fontWeight: "900" }} align="right">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {news
              .sort(function (news1, news2) {
                return new Date(news2.published) - new Date(news1.published);
              })
              .map((n, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {n.title}
                  </TableCell>
                  <TableCell align="right">{isoDate(n.published)}</TableCell>
                  <TableCell align="right">
                    <Link to={`/dashboard/updateNews/${n._id}`} style={{all: "unset"}}>
                      <IconButton
                        color="primary"
                        aria-label="update"
                        component="label"
                      >
                        <LaunchOutlinedIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => dispatch(deleteNewsData(n._id))}
                      aria-label="delete"
                      color="error"
                    >
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListNews;
