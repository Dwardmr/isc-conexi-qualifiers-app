import React from "react";
import List from "@mui/material/List";

import PreviewListItem from "./PreviewListItem";

const PreviewList = ({ apiBooks, selectedBook, setSelectedBook }) => {
  const items = apiBooks.map((el, i) => <PreviewListItem key={i} data={el} selectedBook={selectedBook} setSelectedBook={setSelectedBook} index={i} />);
  return (
    <List>
      {items}
    </List>
  );
};
export default PreviewList;
