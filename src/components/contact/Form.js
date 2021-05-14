import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button,  Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import emailjs from "emailjs-com";
import "./Form.scss";

const useStyles = makeStyles({
  form: {
    padding: "2em",
    marginLeft: "5em"
  },
  button: {
    marginTop: "1rem",
    color: "tan",
    borderColor: "tan",
    width:"80%",
    "&:hover":{
      transform: "scale(1.005)",
      backgroundColor: "rgba(20,20,20,0.9)"
    }
  },  
});

function sendEmail(e) {
  console.log("sending");
  console.log(e.target);
  e.preventDefault();
  emailjs.sendForm('service_eemeyxn', 'template_portfolio', e.target, 'user_D7s7BN3PxuGJ1RoDO0gW0')
  .then((result) => {
  console.log(result.text);
  }, (error) => {
  console.log(error.text);
  });
  e.target.reset();
}

const Form = () => {
  const classes = useStyles();
  return (
  <Box component="div" alignItems="center" justifyContent="center" >
      <Typography
        variant="h4"
        style={{
          color: "#ECCA79D6",
          textAlign: "start",
          paddingLeft: "3em",
          fontSize: "3em", 
        }}
      >
        Contact Me
      </Typography>
      <form onSubmit={sendEmail} className={classes.form}>
        <div className="col-xs-10">
          <div className="styled-input wide">
            <input type="text" required name="name" id="name" />
            <label>Name</label>
          </div>          
        </div>

        <div className="col-xs-10" >
          <div className="styled-input wide">
            <input type="text" required name="email" id="email" />
            <label>Email</label>
          </div>
        </div>        
        <div className="col-xs-10">
          <div className="styled-input wide" >
            <input type="text" required name="subject" id="subject" />
            <label>Subject</label>
          </div>
        </div>
        <div className="col-xs-10">
          <div className="styled-input wide">
            <textarea required name="message" id="message"></textarea>
            <label>Message</label>
          </div>
        </div> 
       
        <Button
          className={classes.button}
          variant="outlined"
          fullWidth={true}
          endIcon={<SendIcon />}
          type="submit"
        >
          Send Email
        </Button>
      </form>
    </Box>
  );
};

export default Form;
