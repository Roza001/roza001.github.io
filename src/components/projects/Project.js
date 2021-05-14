import React from "react";
import {Grid, Button,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    marginTop: "1rem",
    color: "tan",
    borderColor: "tan",
    width:"80%",
    "&:hover":{
      transform: "scale(1.005)",
      backgroundColor: "rgba(20,20,20,0.9)",
      color: "tan"
    }
  },  
});

export default function Project({ project }) {
  const classes = useStyles();
  if (project) {
    return ( <>
     <Grid container className="project-item-internal" spacing={0} alignItems="center" justifyContent="center" style={{height: '100%'}}>
        <Grid item xs={12} sm={8} md={6}> 
          <img style={{width: '80%'}} src={project.src} alt={project.title}/>
        </Grid>
          <Grid item xs={12} sm={8} md={5}>
            <h2 style={{color: 'white'}}> {project.title}</h2>
            {project.technologies.map((item) => ( 
                <img
                    src={item}
                    alt="icon"
                    className="alignnone size-full"
                    width="35em"
                />
            ))}
            <br />
            <br />
            <p style={{color: 'white'}}>
              {project.description}
            </p>
            <Button  variant="outlined" className={classes.button}  href={project.code} target="_none">
            Code
        </Button>
        <Button
          className={classes.button} 
          variant="outlined"
          href={project.demo} target="_none">
            Demo
          </Button>
         </Grid>
        </Grid>
        </>
    );
  }
  else{
      return(
        <div></div>
      );
  }
}
