import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import { Typography, Grid, Box, IconButton } from "@material-ui/core";
import Form from "./Form";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
  icon:{
    color: "tan", 
    float: "right",
    marginRight: "1em",
    "&:hover":{
      transform: "scale(1.15)",
      color: "tan", 
    }
  }
});

const Contact = () => {
  const classes = useStyles();
  return (
    <Box
      component="div"
      id="contact"
      style={{ background: "#000", height: "100vh" }}
    >
      <Grid container className="" spacing={0} alignItems="center" justify="flex-end" style={{height: '100%'}}>
        <Grid item xs={12} sm={6} md={4} >
          <Typography
            variant="h3"
            style={{
              color: "#ECCA79D6",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Get in touch
          </Typography>
          <br />
          <Typography variant="h5" style={{color: "white"}}>
            Feel free to contact me via the Contact Me form.
            You can also find me on my socials:
          </Typography>
          <IconButton edge="end" className={classes.icon} aria-label="linkedin" href="https://www.linkedin.com/in/rozalia-korycka-353633142/" target="_none">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          <IconButton edge="end" className={classes.icon}  aria-label="github" href="https://github.com/Roza001?tab=repositories" target="_none">
              <GitHubIcon fontSize="large" />
            </IconButton>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Form />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
