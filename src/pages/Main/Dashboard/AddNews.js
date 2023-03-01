import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import addNewsData from "../../../redux/thunk/news/addNewsData";
import { useTitle } from "../../../hooks/useTitle";

const defaultValues = {
  title: "",
  tags: [],
  image: "",
  details: "",
  published: ""
};
const AddNews = () => {
  useTitle("Add A News")
  const [newsData, setNewsData] = React.useState(defaultValues);
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "tags") {
      const tags = value.split(",");
      setNewsData({...newsData, tags: tags})
    } else {
      setNewsData({ ...newsData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const d =  new Date()
    const todaysDate = d.toISOString()
    //console.log({...newsData, published: todaysDate});
    dispatch(addNewsData({...newsData, published: todaysDate}))
  };
  
  return (
    <Container>
      <Typography variant="h3">Add A News</Typography>

      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          width: "80%",
          maxWidth: "100%",
          "& .MuiTextField-root, .MuiButton-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onBlur={handleInputChange}
          type="text"
          fullWidth
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          helperText="An Unique and eye catching news title always grabs everyone's attention."
        />
        <TextField
          onBlur={handleInputChange}
          type="text"
          fullWidth
          id="tags"
          name="tags"
          label="Tags"
          variant="outlined"
          helperText="News Tags should be separated with commas without spaces between them. Use the most generic tags."
        />
        <TextField
          onBlur={handleInputChange}
          type="text"
          fullWidth
          id="image"
          name="image"
          label="Image URL"
          variant="outlined"
          helperText="Give an URL of the image for your news."
        />
        <TextField
          onBlur={handleInputChange}
          type="text"
          fullWidth
          id="details"
          name="details"
          label="Details"
          multiline
          rows={10}
          helperText="Give a brief but informative details of your news."
        />

        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Publish
        </Button>
      </Box>
    </Container>
  );
};

export default AddNews;
