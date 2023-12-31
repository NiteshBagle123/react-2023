import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}/>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const overlaysId = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, overlaysId)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlaysId)}
        </Fragment>
    );
}

export default Modal;