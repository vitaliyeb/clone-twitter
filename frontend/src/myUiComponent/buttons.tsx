import React from 'react';
import { Button ,makeStyles, withStyles } from "@material-ui/core";



let ButtonSemicircularEdge = withStyles({root: {
        borderRadius: '20px',
        width: 'max(280px, 50%)'
    }})(Button)

export {
    ButtonSemicircularEdge
};