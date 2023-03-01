import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../../components/NewsCard";
import { useTitle } from "../../../hooks/useTitle";

const History = () => {
  useTitle("Reading History")
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();
  return (
    <div>
      <CssBaseline />
      <Container>
        <Box>
          <Typography variant="h2" sx={{ py: 2 }}>
            Reading History
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={3}>
            {history.map((n, i) => (
              <Grid key={i} item>
                <NewsCard news={n} dispatch={dispatch}></NewsCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default History;
