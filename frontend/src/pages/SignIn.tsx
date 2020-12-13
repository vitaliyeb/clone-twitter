import React, { useState } from 'react';
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import { ButtonSemicircularEdge } from '../myUiComponent/buttons';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

let useStyles = makeStyles({
    wrapper: {
        height: '100vh',
        display: 'flex',
        width: '100%'
    },
    blueAside: {
        backgroundColor: '#74cafc',
        width: '50%',
        display: 'flex',
        position: "relative",
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: "border-box",
        padding: "15px"
    },
    blueAsideUl:{
        maxWidth: '380px',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        listStyle: 'none',
        '& li': {
            display: 'flex',
            marginBottom: '40px',
            alignItems: 'center',
            '& svg': {
                color: '#fff',
                fontSize: '29px'
            },
            '& p': {
                marginLeft: '15px',
                fontWeight: 'bold',
                fontSize: '19px',
                color: '#fff'
            }
        }
    },
    loginAside: {
        width: '50%',
        flexDirection: 'column',
        alignItems: "center",
        display: 'flex',
        justifyContent: 'center',
        boxSizing: "border-box",
        padding: "15px"
    },
    loginTwitterIcon: {
        alignSelf: "flex-start",
        fontSize: "50px",
    },
    loginAsideTittle: {
        "fontWeight": 'bold',
        marginBottom: "1em",
        marginTop: '1em'
    },
    loginAsideDescription: {
        fontWeight: 'bold',
        fontSize: '15px',
        marginBottom: '1em'
    },
    wrapperLogin: {
        maxWidth: '380px',
        width: '100%'
    },
    buttonReg: {
        marginBottom: "15px"
    },
    twitterIconBlueAside: {
        position: "absolute",
        left: 0,
        top: 0,
        width: '200%',
        transform: "translate(-13%, -25%)",
        height: '200%'
    }
});


function SignIn () {
    let classes = useStyles();
    let [isRegModal, setModalReg] = useState(false);
    let [isOpenModal, setModalOpen] = useState(false);

    let handleModalReg = (value: any)=> {
        setModalReg(false);
    };

    let handleModalOpen = () => {
        setModalOpen(false);
    }

    return <div className={classes.wrapper}>
        <div className={classes.blueAside}>
            <TwitterIcon color="primary" className={classes.twitterIconBlueAside} />
           <ul className={classes.blueAsideUl}>
               <li>
                   <SearchIcon />
                   <Typography>Читайте о том, что вам интересно.</Typography>
               </li>
               <li>
                   <PeopleOutlineIcon />
                   <Typography>Узнайте, о чем говорят в мире.</Typography>
               </li>
               <li>
                   <ModeCommentOutlinedIcon />
                   <Typography>Присоединяйтесь к общению.</Typography>
               </li>
           </ul>
        </div>
        <div className={classes.loginAside}>
            <div className={classes.wrapperLogin}>
                <TwitterIcon color="primary" className={classes.loginTwitterIcon} />
                <Typography className={classes.loginAsideTittle} variant="h5" component="h1">Узнайте, что происходит в мире прямо сейчас</Typography>
                <Typography className={classes.loginAsideDescription}>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                <ButtonSemicircularEdge
                    className={classes.buttonReg}
                    disableRipple={true}
                    variant="contained"
                    color="primary">Зарегистрироваться</ButtonSemicircularEdge>
                <ButtonSemicircularEdge variant="outlined" color="primary">Войти</ButtonSemicircularEdge>
            </div>
        </div>

        <Dialog open={isRegModal} onClose={handleModalOpen} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleModalOpen} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleModalOpen} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>

        <Dialog open={isRegModal} onClose={handleModalReg} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleModalReg} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleModalReg} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    </div>
};


export default SignIn;