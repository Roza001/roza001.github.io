import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    title: {
        color: "tomato",
        fontWeight: 'bold',
        transition: "transform .25s",
        "&:hover":{
            transform: "scale(1.10)",
            color: "tomato"
        }
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%, -50%)",
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        zIndex: 1,
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}  display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Typography className={classes.title} variant="h2">
                ROZALIA KORYCKA
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h3">
                Web Developer​
            </Typography>
        </Box>
    )
}

export default Header
