import Modal from '../src/Modal';
import { render } from 'react-dom';
import React from 'react';

class ModalRunner extends React.Component{
    constructor(){
        super();
        this.state = { open: false }
    }
    render(){
        return (
            <div>
                <button onClick={() => this.setState({ open: true })}>Open Real Modal</button>
                <Modal show={ this.state.open } onHide={() => this.setState({ open: false })}>
                    <Modal.Body>
                        <p>Single line</p>
                        <p>Single line</p>
                        <p>Single line</p>
                        <p>Single line</p>
                        <p>Single line</p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}


render(<ModalRunner />, document.getElementById('home'));


//bound in dom 0 handler in default.htm - to test unMount events
window.clearNavBar = function(){
    render(<div>Gone</div>, document.getElementById('home'));
};

export default null;