import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../../components/NewsCard";
import { useTitle } from "../../../hooks/useTitle";
import { filterByTag, sortByUpload } from "../../../redux/actions/actions";
import fetchNewsData from "../../../redux/thunk/news/fetchNews";

const Home = () => {
  useTitle("Home")
  const { news, tags, sortBy } = useSelector((state) => state);
  const [sortby, setSortby] = React.useState(sortBy);
  const [newsTag, setNewsTag] = React.useState(tags);
  //console.log(newsTag);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSortby(event.target.value);
    dispatch(sortByUpload(event.target.value));
  };

  React.useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);

  const handleDelete = () => {
    setNewsTag("");
    dispatch(filterByTag(""));
    dispatch(fetchNewsData());
  };

  let content;

  if (news.length) {
    content = news.map((n, i) => (
      <Grid key={i} item>
        <NewsCard
          news={n}
          setNewsTag={setNewsTag}
          dispatch={dispatch}
        ></NewsCard>
      </Grid>
    ));
  }

  if (news.length && (tags || sortBy)) {
    if (sortBy === "First Upload") {
      content = news
        .filter((n) => {
          if (tags) {
            return n.tags.includes(tags);
          }
          return n;
        })
        .sort((n1, n2) => {
          return new Date(n1.published) - new Date(n2.published);
        })
        .map((n, i) => (
          <Grid key={i} item>
            <NewsCard
              news={n}
              setNewsTag={setNewsTag}
              dispatch={dispatch}
            ></NewsCard>
          </Grid>
        ));
    } else {
      content = news
        .filter((n) => {
          if (tags) {
            return n.tags.includes(tags);
          }
          return n;
        })
        .sort((n1, n2) => {
          return new Date(n2.published) - new Date(n1.published);
        })
        .map((n, i) => (
          <Grid key={i} item>
            <NewsCard
              news={n}
              setNewsTag={setNewsTag}
              dispatch={dispatch}
            ></NewsCard>
          </Grid>
        ));
    }
  }

  return (
    <div>
      <CssBaseline />
      <Container>
        <Box>
          <Typography variant="h2" sx={{ py: 2 }}>
            Trending News
          </Typography>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortby}
              label="Sort By"
              onChange={handleChange}
            >
              <MenuItem value={"Last Upload"}>Last Upload</MenuItem>
              <MenuItem value={"First Upload"}>First Upload</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ my: 2 }}>
            Tag:{" "}
            {newsTag && (
              <Chip label={newsTag} size="small" onDelete={handleDelete} />
            )}
          </Box>
        </Box>
        <Box>
          <Grid container spacing={3}>
            {content}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
