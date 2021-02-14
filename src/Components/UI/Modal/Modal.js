import React, { Component } from 'react';
import Auxilliary from '../../../hoc/Auxilliary';
import Classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    };

    componentDidUpdate () {
        // console.log('[Modal]: ComponentDidUpdate')
    };

    render() {

        return (
            <Auxilliary>
                <Backdrop 
                    show={this.props.show} 
                    clicked={this.props.modalClosed}
                />
                
                <div 
                    className={Classes.Modal}
                    style = {{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    >
                     {this.props.children}
    
            </div>
    
            </Auxilliary>
        );

    };


};

export default Modal;