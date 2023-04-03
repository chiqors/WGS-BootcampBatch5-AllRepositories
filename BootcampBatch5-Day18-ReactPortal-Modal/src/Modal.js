import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    overflow: 'auto',
    height: '300px',
    // shadow effect
    boxShadow: '0 5px 16px rgba(0,0,0,0.2)',
    // border for modal
    border: '1px solid #000',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}