import React from "react";
import { ListItemButton, ListItemText, ListItemAvatar, Avatar, Typography } from "@mui/material";

const PreviewListItem = ({data, selectedBook, setSelectedBook, index}) => {
  const handleClick = () => {
    setSelectedBook(index);
  }
  return (
    <ListItemButton selected={selectedBook === index} alignItems="flex-start" onClick={handleClick}>
      <ListItemAvatar>
        <Avatar src={data.picture} />
      </ListItemAvatar>
      <ListItemText
        primary={data.title}
        secondary={
          <React.Fragment>
            <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
              {data.author}
            </Typography>
            {` - ${data.year}`}
          </React.Fragment>
        }
      />
    </ListItemButton>
  );
};
export default PreviewListItem;
