import React from 'react'
import { Component } from 'react';


class GoogleAuth extends Component{

state={
    isSignedIn:null  
}

componentDidMount(){
    window.gapi.load('client:auth2',()=>{
        window.gapi.client.init({
            clientId:'638775199803-h3fnj32d6ik0ke381r9a6rnsragrrju4.apps.googleusercontent.com',
            scope:'email'
        }).then(()=>{
            this.auth = window.gapi.auth2.getAuthInstance();
        //    this.onAuthChange()
        // refactor
            this.setState({isSignedIn:this.auth.isSignedIn.get()})
            this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
}


onAuthChange =()=>{
    this.setState({isSignedIn:this.auth.isSignedIn.get()})
}

onSignedIn =()=>{
    this.auth.signIn();
}
onSignOut =()=>{
    this.auth.signOut();
}

renderAuthButton(){
    if(this.state.isSignedIn === null){
        // return null;
        return(
            <button onClick={this.onSignedIn} className="ui red google button">
                <i className="google icon"/>
                sign in with google
            </button>
        )
    }else if(this.state.isSignedIn ){
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

export default GoogleAuth;