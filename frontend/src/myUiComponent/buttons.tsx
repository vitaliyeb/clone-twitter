import React from 'react';
import { Button ,makeStyles, withStyles } from "@material-ui/core";



let ButtonSemicircularEdge = withStyles({
    root: {
        borderRadius: '20px',
        width: '100%',
        fontWeight: 'bold',
        boxShadow: "none",
        textTransform: 'capitalize',
        borderColor: '#1da1f2',
        '&:hover': {
            borderColor: '#1da1f2',
            boxShadow: 'none'
        }
    }
})(Button)

export {
    ButtonSemicircularEdge
};