import React, { Component } from 'react';
import {Field,formValues,reduxForm} from 'redux-form'

class StreamCreate extends Component{

    handleError =({error,touched})=>{
       if(touched&&error){
           return(
               <div className="ui error message">
                   <div className="header">
                       {error}
                   </div>
               </div>
           )
       }
    }


renderInput = ({input,label,meta}) =>{

    const className = `field ${meta.error &&meta.touched ?'error':''}`
    return (
        <div className={className}>
            {/* <div className="field"> */}
            <label>{label}</label>
            <input {...input}/>
           {this.handleError(meta)}
        </div>
    )
}

onSubmit(formValues){
    console.log(formValues)
}


    render(){
        return(
<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
    <Field name="title" component={this.renderInput} label="enter title"/>
    <Field name="description" component={this.renderInput} label="enter description"/>
    <button className="ui button primary">Submit</button>
</form>
        );
    }
}

const validate =(formValues) =>{
const errors={};

    if(!formValues.title){
       errors.title ='you might enter valid name'
    }
    if(!formValues.description){
        errors.description ='you might enter description'
    }
    return errors;
}

export default reduxForm({

    form:'streamCreate',
    validate
})(StreamCreate) ; 