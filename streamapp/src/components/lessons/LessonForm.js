import React from 'react';
import {Field, reduxForm} from 'redux-form';

class LessonForm extends React.Component {

    renderError({touched, error}){
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = (formProps) => {
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input onChange={formProps.input.onChange} value = {formProps.input.value}/>
                {this.renderError(formProps.meta)}
            </div>    
        );
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

   render(){
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            <Field name = "title" component = {this.renderInput}  label = "Confession addressed to: "/>
            <Field name = "description" component = {this.renderInput} label = "Contents:"/>
            <Field name = "audience" component = {this.renderInput} label = "Contact:"/>
            <button className = "ui button pink">Submit</button>
        </form>
    );
   }
};



const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'Your confession needs an addressee';
    }else if(!formValues.description){
        errors.description = 'Please add some contents!'
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'lessonForm',
    validate: validate
}) (LessonForm);

export default formWrapped;