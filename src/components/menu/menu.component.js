import React from "react";

import { Link } from "react-router-dom";

import "./menu.component.css";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export function Menu() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="list-block"
    >
      <ListItemButton>
        <Link to="/club-data"> Club Data </Link>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <Link to=""> Teams </Link>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="">
              {" "}
              <ListItemText primary="U10" />{" "}
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="">
              {" "}
              <ListItemText primary="U11" />{" "}
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="">
              {" "}
              <ListItemText primary="U12" />{" "}
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="">
              {" "}
              <ListItemText primary="U13" />{" "}
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="">
              {" "}
              <ListItemText primary="U14" />{" "}
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="">
              {" "}
              <ListItemText primary="U15" />{" "}
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="">
              {" "}
              <ListItemText primary="U16" />{" "}
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="">
              {" "}
              <ListItemText primary="U17" />{" "}
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="">
              {" "}
              <ListItemText primary="U18" />{" "}
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to="">
              {" "}
              <ListItemText primary="U19" />{" "}
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <Link to="/club-leaders"> Club Leaders </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to=""> Player Developing Bank </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to=""> Profile </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to=""> Coaches </Link>
      </ListItemButton>
      <ListItemButton>
        <Link to=""> Documents </Link>
      </ListItemButton>
    </List>
  );
}
