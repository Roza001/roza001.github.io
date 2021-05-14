import React, { useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import "./Form.scss";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "subject":
      return { ...state, subject: action.value };
    case "message":
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

const useStyles = makeStyles({
  form: {
    padding: "2em",
    marginLeft: "5em",
  },
  button: {
    marginTop: "1rem",
    color: "tan",
    borderColor: "tan",
    width: "80%",
    "&:hover": {
      transform: "scale(1.005)",
      backgroundColor: "rgba(20,20,20,0.9)",
    },
  },
});

const Form = () => {
  const classes = useStyles();
  const [showFormErr, setShowFormErr] = useState(false);
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [formSubmitted, setFormSubmitted] = useState({
    title: "",
    paragraph: "",
  });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { name, email, message } = formState;

  const submitFormAndShowCaptcha = (e) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendEmail = (captchaValue) => {
    if (name === "" || email === "" || message === "") {
      setShowFormErr(true);
      return;
    }

    const params = {
      ...formState,
      "g-recaptcha-response": captchaValue,
    };

    setFormSubmitted({ title: "Sending message...", paragraph: "" });
    emailjs
      .send(
        "service_eemeyxn",
        "template_portfolio",
        params,
        "user_D7s7BN3PxuGJ1RoDO0gW0"
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: "Message has been sent",
              paragraph: "I will be in contact with you soon.",
            });
          } else {
            setFormSubmitted({
              title: "Error sending message, try again later",
              paragraph: "",
            });
          }
        },
        (err) => {
          console.log(err);
          setFormSubmitted({
            title: "Error sending message, try again later",
            paragraph: "",
          });
        }
      );
  };

  return formSubmitted.title === "" ? (
    <Box component="div" alignItems="center" justifyContent="center">
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
      {!showCaptcha ? (
        <form onSubmit={submitFormAndShowCaptcha} className={classes.form}>
          <div className="col-xs-10">
            <div className="styled-input wide">
              <input type="text" required name="name" id="name" onChange={(e) => dispatch({ type: 'name', value: e.target.value })}/>
              <label>Name</label>
            </div>
          </div>

          <div className="col-xs-10">
            <div className="styled-input wide">
              <input type="text" required name="email" id="email"  onChange={(e) => dispatch({ type: 'email', value: e.target.value })}/>
              <label>Email</label>
            </div>
          </div>
          <div className="col-xs-10">
            <div className="styled-input wide">
              <input type="text" required name="subject" id="subject"  onChange={(e) => dispatch({ type: 'subject', value: e.target.value })}/>
              <label>Subject</label>
            </div>
          </div>
          <div className="col-xs-10">
            <div className="styled-input wide">
              <textarea required name="message" id="message" onChange={(e) => dispatch({ type: 'message', value: e.target.value })}></textarea>
              <label>Message</label>
            </div>
          </div>
          {showFormErr ? <p className="sm:mr-4 text-red-400">Please fill in all three input boxes to send a message</p> : null}
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
      ) : (
        <ReCAPTCHA style={{float: "right", paddingRight: "3em"}}
          sitekey="6LcicNUaAAAAAG8T5H0Z7E9uDbl3SfJtUwm79J91"
          onChange={sendEmail}
        />
      )}
    </Box>
  ) : (
    <div className="flex flex-col items-center">
      <h3 className="text-lato text-2xl font-light text-white">
        {formSubmitted.title}
      </h3>
      <p>{formSubmitted.paragraph}</p>
    </div>
  );
};

export default Form;
