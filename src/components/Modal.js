import React from 'react';


const Modal = (props) => {
    return (
        <div className={props.modelStatus ? "show-modal modal-container": "hide-modal modal-container"}>
            <div className={props.modelStatus ? "show-modal modal": "hide-modal modal"}>
                <div className="modal-body">
                    <input type="text" className="text-input" placeholder={props.placeholder} onChange={props.onChange}/>
                    <input type="button" value="Save" className="btn btn-save" onClick={props.handleSave}/> 
                    <input type="button" value="Close" className="btn btn-close" onClick={props.handleClose}/>
                </div>
            </div>
        </div>
    );
}

export default Modal;