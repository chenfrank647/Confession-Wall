import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut}  from '../actions';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '891881212315-ro0f3tgp3333pi479bl5mv914vq1tmsc.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    };


    toSignIn = () => {
        this.auth.signIn();
    };

    toSignOut = () => {
        this.auth.signOut();
    };

    renderButton(){
        if (this.props.isSignedIn === null){
            return;
        } else if (this.props.isSignedIn){
            return (
                <button onClick={this.toSignOut} className="ui violet google button">
                    <i className = "google icon"/>
                    Log Out
                </button>
            );
        } else {
            return (
                <button onClick={this.toSignIn} className="ui pink google button">
                    <i className = "google icon"/>
                    Log In
                </button>
            );
        }
    }

    render(){
        return (
        <div>{this.renderButton()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);