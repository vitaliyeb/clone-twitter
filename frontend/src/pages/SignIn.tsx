import React, { useState } from 'react';
import {
    Button, DialogActions,
    DialogContent, FormControl, FormGroup,
    makeStyles, TextField,
    Typography
} from "@material-ui/core";
import { ButtonSemicircularEdge } from '../myUiComponent/buttons';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import DialogModalBox from "../components/modalBlock";


let useStyles = makeStyles((theme)=> ({
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
    circleButton: {
        borderRadius: "100px"
    },
    modalField: {
        marginBottom: theme.spacing(2)
    },
    registerFormControl: {
        marginBottom: theme.spacing(2)
    },
    openFormControl: {
        marginBottom: theme.spacing(2)
    }
}));


function SignIn () {
    let classes = useStyles();

    type visibleBoxType = 'signIn' | 'signUp';
    let [visibleBlockModal, setVisibleBlockModal] = useState<visibleBoxType>();

    function handleCloseBlockModal(): void{
        setVisibleBlockModal(undefined);
    }

    function handleSetVisibleBoxModal (blockName: visibleBoxType): void{
        setVisibleBlockModal(blockName);
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
                    onClick={()=>handleSetVisibleBoxModal('signUp')}
                    className={classes.buttonReg}
                    disableRipple={true}
                    variant="contained"
                    color="primary">Зарегистрироваться</ButtonSemicircularEdge>
                <ButtonSemicircularEdge
                    onClick={()=>handleSetVisibleBoxModal('signIn')}
                    variant="outlined"
                    color="primary">Войти</ButtonSemicircularEdge>
            </div>
        </div>

        <DialogModalBox
            onClose={handleCloseBlockModal}
            visible={visibleBlockModal === 'signUp'}
            title={'Создайте учётную запись'}
        >
            <FormControl variant="filled" fullWidth className={classes.registerFormControl} >
                <FormGroup>
                    <TextField
                        className={classes.modalField}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Имя"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        className={classes.modalField}
                        autoFocus
                        margin="dense"
                        id="mail"
                        label="E-Mail"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        className={classes.modalField}
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Пароль"
                        type="password"
                        fullWidth
                    />
                    <Button
                        onClick={handleCloseBlockModal}
                        disableRipple
                        fullWidth
                        className={classes.circleButton}
                        variant="contained"
                        color="primary">
                        Войти
                    </Button>
                </FormGroup>
            </FormControl>
        </DialogModalBox>

        <DialogModalBox onClose={handleCloseBlockModal} visible={visibleBlockModal === 'signIn'} title={'Войти в твиттер'}>
            <FormControl fullWidth className={classes.openFormControl}>
                <FormGroup>
                    <TextField
                        className={classes.modalField}
                        autoFocus
                        margin="dense"
                        id="mail"
                        label="E-Mail"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        className={classes.modalField}
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Пароль"
                        type="password"
                        fullWidth
                    />
                    <Button
                        onClick={handleCloseBlockModal}
                        disableRipple
                        fullWidth
                        className={classes.circleButton}
                        variant="contained"
                        color="primary">
                        Войти
                    </Button>
                </FormGroup>
            </FormControl>
        </DialogModalBox>
    </div>
};


export default SignIn;