import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Chip } from "@mui/material";
import { addToHistory, filterByTag } from "../redux/actions/actions";

const NewsCard = ({ news, setNewsTag, dispatch }) => {
  const { title, image, details, tags, published } = news;

  const isoDate = (dateString) => {
    const d = new Date(dateString);
    const date = d.toDateString();
    return date;
  };

  const handleOnClick = (tag) => () => {
    setNewsTag(tag);
    dispatch(filterByTag(tag));
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="220" image={image} alt={title} />
        <CardContent sx={{ height: "570px" }}>
          <Typography gutterBottom variant="h6" component="div">
            {isoDate(published)}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {tags.map((tag, i) => (
            <Chip
              key={i}
              sx={{ m: "2px" }}
              label={tag}
              variant="outlined"
              size="small"
              onClick={handleOnClick(tag)}
            ></Chip>
          ))}

          <Typography variant="body2" color="text.secondary" sx={{ py: 2 }}>
            {details.slice(0, 300)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>dispatch(addToHistory(news))} size="small">Read More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewsCard;
