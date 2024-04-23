import {useState} from "react";

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants.js";

import {Typography} from "@mui/material"

import SearchBar from "./SearchBar.js";

const Navbar = () => {

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      <Typography variant="h3" color="grey">
        SkkTubeLol
      </Typography>
      

      <SearchBar   />
    </Stack>
  );
};

export default Navbar;
