import React from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  List,
  Container,
  Hidden,
} from "@material-ui/core";
import { Home} from "@material-ui/icons";
import { HashLink as Link } from 'react-router-hash-link';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `tan`,
    "&:hover":{
      transform: "scale(1.05)",
      color: "tan"
    }
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
});

const navLinks = [
  { title: `Projects`, path: `#projects` },
  // { title: `Resume`, path: `#resume` },
  { title: `Contact`, path: `#contact` },
];

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Box component="nav"> */}
      <AppBar position="fixed" style={{ background: "rgba(0, 0, 0,0)", boxShadow: "none" }}>
        <Toolbar> 
          <Container className={classes.navbarDisplayFlex}>
            <IconButton edge="start" className={classes.linkText} aria-label="home" href="#home">
              <Home fontSize="large" />
            </IconButton>
            <Hidden xsDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
              >
                {navLinks.map(({ title, path }) => (
                  <Link to={path} key={title} className={classes.linkText}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Hidden>
          </Container>
         </Toolbar>
      </AppBar>
      {/* </Box> */}
    </>
  );
};

export default Navbar;
