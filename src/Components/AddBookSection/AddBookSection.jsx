import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

const AddBookSection = ({ dispatchAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlePicture = (e) => {
    setPicture(e.target.value);
  };

  const dispatchSave = () => {
    const data = {
      title,
      author,
      year,
      genre,
      language,
      description,
      picture,
    };
    dispatchAddBook(data);
  };

  return (
    <div style={{ marginTop: 64 }}>
      <Typography variant="h5">Agregar nuevo libro</Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={handleTitle} />
        <TextField id="outlined-basic" label="Author" variant="outlined" value={author} onChange={handleAuthor} />
        <TextField id="outlined-basic" label="Year" variant="outlined" value={year} onChange={handleYear} />
        <TextField id="outlined-basic" label="Genre" variant="outlined" value={genre} onChange={handleGenre} />
        <TextField id="outlined-basic" label="Language" variant="outlined" value={language} onChange={handleLanguage} />
        <TextField id="outlined-basic" label="Description" variant="outlined" value={description} onChange={handleDescription} />
        <TextField id="outlined-basic" label="Picture" variant="outlined" value={picture} onChange={handlePicture} />
      </Box>
      <Button variant="contained" onClick={dispatchSave}>
        Guardar
      </Button>
    </div>
  );
};
export default AddBookSection;
