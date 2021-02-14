import React, {Component } from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import Auxilliary from '../Auxilliary'
// import axios from 'axios';

const withErrorHandler = ( WrappedComponent, axios) => {
    // console.log('here', axios)
    return class extends Component {
        state = {
            error: null
        }
        
        constructor () {
            super ()
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })
            this.responseInterceptor = axios.interceptors.response.use(r => r, error => {
                this.setState({error: error})
            })
        }
        componentWillUnmount () {
            console.log('[Will Unmount]', this.requestInterceptor, this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        
        render () {
            return (
                <Auxilliary>
                <Modal show ={this.state.error}
                       modalClosed={this.errorConfirmedHandler}   >
                    <h2>Something Didn't Work!  </h2>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
                </Auxilliary>
            )
        }
    } 
}

export default withErrorHandler;