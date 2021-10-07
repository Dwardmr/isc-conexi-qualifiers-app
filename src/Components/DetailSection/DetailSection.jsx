import React from "react";
import { Typography } from "@mui/material";

import "./DetailSection.css";

const DetailSection = ({ displayBook }) => {
  return (
    <div>
      <Typography variant="h5">{displayBook.title}</Typography>
      <div className="DetailSectionMainContainer">
        <div className="DetailSectionHeaderContent">
          <div className="DetailBookImageContainer">
            <img src={displayBook.picture} alt="book cover" loading="lazy" className="DetailBookImage" />
          </div>
          <div className="DetailBookDescriptionContainer">
            <Typography>
              <b>Title: </b>{displayBook.title}
            </Typography>
            <br />
            <Typography>
              <b>Author: </b>{displayBook.author}
            </Typography>
            <br />
            <Typography>
              <b>Year: </b>{displayBook.year}
            </Typography>
            <br />
            <Typography>
              <b>Genre: </b>{displayBook.genre}
            </Typography>
            <br />
            <Typography>
              <b>Language: </b>{displayBook.language}
            </Typography>
          </div>
        </div>
        <div className="DetailSectionBodyContent">
          <Typography><b>Description: </b>{displayBook.description}</Typography>
        </div>
      </div>
    </div>
  );
};
export default DetailSection;
