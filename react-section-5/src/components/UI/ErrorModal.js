import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => <div className={classes.backdrop} onClick={props.onConfirm} />
const Overlay = (props) => (
  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>
);
const ErrorModal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
      {ReactDOM.createPortal(<Overlay onConfirm={props.onConfirm} title={props.title} message={props.message}/>, document.getElementById('modal-root'))}
    </div>
  );
};

export default ErrorModal;
