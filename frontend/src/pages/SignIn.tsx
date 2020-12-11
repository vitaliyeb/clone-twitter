import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import { ButtonSemicircularEdge } from '../myUiComponent/buttons';
import TwitterIcon from '@material-ui/icons/Twitter';


let useStyles = makeStyles({
    wrapper: {
        height: '100vh',
        display: 'flex',
        width: '100%'
    },
    blueAside: {
        backgroundColor: '#74cafc',
        width: '50%'
    },
    loginAside: {
        width: '50%',
        flexDirection: 'column',
        alignItems: "center",
        display: 'flex',
        justifyContent: 'center'
    }
});


function SignIn () {
    let classes = useStyles();

    return <div className={classes.wrapper}>
        <div className={classes.blueAside}>
           <ul>
               <li>
                   <Typography>Читайте о том, что вам интересно.</Typography>
               </li>
               <li>
                   <Typography>Узнайте, о чем говорят в мире.</Typography>
               </li>
               <li>
                   <Typography>Присоединяйтесь к общению.</Typography>
               </li>
           </ul>
        </div>
        <div className={classes.loginAside}>
            <TwitterIcon />
            <Typography>Узнайте, что происходит в мире прямо сейчас</Typography>
            <Typography>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
            <ButtonSemicircularEdge
                disableRipple={true}
                variant="contained"
                color="primary">Зарегистрироваться</ButtonSemicircularEdge>
            <ButtonSemicircularEdge variant="outlined" color="primary">Войти</ButtonSemicircularEdge>
        </div>
    </div>
}


export default SignIn;