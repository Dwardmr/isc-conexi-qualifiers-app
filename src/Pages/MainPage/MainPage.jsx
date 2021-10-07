import React, { useEffect, useState } from "react";
import { Paper, Typography, Divider, CircularProgress, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import PreviewList from "../../Components/PreviewList";
import DetailSection from "../../Components/DetailSection/DetailSection";
import AddBookSection from "../../Components/AddBookSection/AddBookSection";

import { get, post } from "../../Util/api";

import "./MainPage.css";

const MainPage = () => {
  const [apiBooks, setApiBooks] = useState(null);
  const [selectedBook, setSelectedBook] = useState(0);
  // displayBook object from array apiBooks from selectedBook index
  const [displayBook, setDisplayBook] = useState(null);
  const [openAddBook, setOpenAddBook] = useState(false);
  const [postedBook, setPostedBook] = useState(null);

  useEffect(() => {
    if (!apiBooks) {
      get("/books", setApiBooks);
      if(postedBook !== null){
        setPostedBook(null);
        setOpenAddBook(false);
      }
    } else {
      if (apiBooks) {
        setDisplayBook(apiBooks[selectedBook]);
      }
    }
  }, [apiBooks, selectedBook, postedBook, setDisplayBook]);

  useEffect(() => {
    if(postedBook !== null){
      if(postedBook.status === 201){
        setApiBooks(null);
      }
    }
  }, [postedBook])

  const handleChangeSelectedBook = (index) => {
    setSelectedBook(index);
  };

  const dispatchAddBook = (payload) => {
    post("/books", payload, setPostedBook);
  };

  return (
    <Paper elevation={3} style={{ padding: 24 }}>
      <div className="MainPageHeaderContainer">
        <div className="MainPageHeaderTitle">
          <Typography variant="h2">Búk</Typography>
          <Typography variant="subtitle1">Tu compañero de lecturas</Typography>
        </div>
        <div className="MainPageHeaderCTA">
          <div>
            <Button variant="outlined" startIcon={<AddIcon />} onClick={() => setOpenAddBook(!openAddBook)}>
            Agregar Libro</Button>
          </div>
        </div>
      </div>
      {openAddBook && (
        <div>
          <AddBookSection dispatchAddBook={dispatchAddBook} />
        </div>
      )}
      <Typography variant="body1" className="BookListTitle">
        Mi lista
      </Typography>
      {!apiBooks ? (
        <CircularProgress size={100} />
      ) : (
        <div className="ListContainer">
          <div style={{ width: "40%" }}>
            <PreviewList apiBooks={apiBooks} selectedBook={selectedBook} setSelectedBook={handleChangeSelectedBook} />
          </div>
          <div style={{ width: "1%", paddingLeft: 8, paddingRight: 24 }}>
            <Divider orientation="vertical" />
          </div>
          <div style={{ width: "59%" }}>{displayBook ? <DetailSection displayBook={displayBook} /> : null}</div>
        </div>
      )}
    </Paper>
  );
};
export default MainPage;
