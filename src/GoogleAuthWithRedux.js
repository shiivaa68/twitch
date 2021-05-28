import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import {SingIn,SingOut} from './actions'

class GoogleAuthWithRedux extends Component{

state={isSignedIn:null}

componentDidMount(){
    window.gapi.load('client:auth2',()=>{
        window.gapi.client.init({
            clientId:'638775199803-h3fnj32d6ik0ke381r9a6rnsragrrju4.apps.googleusercontent.com',
            scope:'email'
        }).then(()=>{
            this.auth = window.gapi.auth2.getAuthInstance();
           this.onAuthChange(this.auth.isSignedIn.get())
        // refactor
            // this.setState({isSignedIn:this.auth.isSignedIn.get()})
            this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
}


onAuthChange =(isSignedIn)=>{

    if (isSignedIn) {
        this.props.SingIn(this.auth.currentUser.get().getId())
    } else {
        this.props.SingOut()
    }
}

onSignedIn =()=>{
    this.auth.SingIn();
}
onSignOut =()=>{
    this.auth.SingOut();
}

renderAuthButton(){
    if(this.props.isSignedIn === null){
        // return null;
        return(
            <button onClick={this.onSignedIn} className="ui red google button">
                <i className="google icon"/>
                sign in with google
            </button>
        )
    }else if(this.props.isSignedIn ){
        return(
            <button onClick={this.onSignOut} className="ui red google button">
                <i className="google icon"/>
                sign out
                 
            </button>
        )
    }else{
        return(
            <button className="ui red google button">
                <i className="google icon"/>
                sign in with google
            </button>
        )
    }
}
    render(){
        return(
            <div>
               {this.renderAuthButton()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{SingIn,SingOut})(GoogleAuthWithRedux) ;