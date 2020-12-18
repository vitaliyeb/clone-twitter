import React from 'react';
import {DialogContent, DialogTitle, Dialog} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

interface modalBlockProps {
    title: string,
    children: React.ReactNode,
    visible: boolean,
    onClose: ()=> void
}

const DialogModalBox: React.FC<modalBlockProps> = (
    {
        title,
        children,
        visible,
        onClose
    }: modalBlockProps): React.ReactElement | null => {
    return !visible ? null : (
        <Dialog onClose={onClose} fullWidth open={visible} aria-labelledby="form-dialog-title">
            <DialogTitle disableTypography style={{display: 'flex', alignItems: 'center', paddingBottom: 0}}>
                <CloseIcon onClick={onClose} color="primary"/>
                <DialogTitle style={{padding: 0, marginLeft: '20px'}}  id="form-dialog-title">{ title }</DialogTitle>
            </DialogTitle>
            <DialogContent>
                { children }
            </DialogContent>
        </Dialog>
    )
};

export default DialogModalBox;
