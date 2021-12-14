import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

// will be using react portal
// for both backdrop and render the overlay itself. to use the component and render it in a specific place in the DOM tree.

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays"); // the id comes from the index.html within the public folder. It goes before the root div 

// main component
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
