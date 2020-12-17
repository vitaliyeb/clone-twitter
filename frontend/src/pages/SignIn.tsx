import React, { useState } from 'react';
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles,
    Select,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Typography
} from "@material-ui/core";
import { ButtonSemicircularEdge } from '../myUiComponent/buttons';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import {log} from "util";

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
    },
    dialogHeader: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    dialogHeaderLogo: {
        fontSize: '24px',
        margin: '0 auto'
    },
    dialogNext: {
        width: 'auto',
        fontSize: '15px',
        lineHeight: '1.2em'
    },
    dialogSubheading: {
        fontSize: '23px',
        paddingTop: '0px'
    }
});


function SignIn () {
    let classes = useStyles();
    let [isRegModal, setModalReg] = useState(false);
    let [isOpenModal, setModalOpen] = useState(false);

    let [month, setMonth] = useState('');

    let handleModalReg = (value: any)=> {
        setModalReg(false);
    };

    let handleModalOpen = () => {
        setModalOpen(false);
    }

    let handleSelectMonth = (event: any)=>{
        setMonth(event.target.value)
    }

    console.log('s')
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
                    onClick={()=>setModalReg(true)}
                    className={classes.buttonReg}
                    disableRipple={true}
                    variant="contained"
                    color="primary">Зарегистрироваться</ButtonSemicircularEdge>
                <ButtonSemicircularEdge
                    onClick={()=>setModalOpen(true)}
                    variant="outlined"
                    color="primary">Войти</ButtonSemicircularEdge>
            </div>
        </div>

        <Dialog fullWidth open={isOpenModal} onClose={handleModalOpen} aria-labelledby="form-dialog-title">
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

        <Dialog fullWidth open={ true } onClose={handleModalReg} aria-labelledby="form-dialog-title">
            <DialogContent className={classes.dialogHeader}>
                <TwitterIcon color="primary" className={classes.dialogHeaderLogo} />
                <ButtonSemicircularEdge
                    onClick={()=>setModalReg(true)}
                    className={classes.dialogNext}
                    disableRipple={true}
                    variant="contained"
                    color="primary">Далее</ButtonSemicircularEdge>
            </DialogContent>
            <DialogTitle disableTypography={true} className={classes.dialogSubheading}>Создайте учетную запись</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Имя"
                    type="text"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="phone"
                    label="Телефон"
                    type="text"
                    fullWidth
                />
                <Typography>Дата рождения</Typography>
                <Typography>
                    Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись
                    предназначена для компании, домашнего животного и т. д.
                </Typography>
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