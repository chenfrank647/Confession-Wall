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
            <Field name = "title" component = {this.renderInput}  label = "Enter Course Name"/>
            <Field name = "description" component = {this.renderInput} label = "Provide a description"/>
            <Field name = "audience" component = {this.renderInput} label = "Target grades"/>
            <button className = "ui button primary">Submit</button>
        </form>
    );
   }
};



const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'Your lesson needs a title';
    }else if(!formValues.description){
        errors.description = 'Please add a short description for your lesson'
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'lessonForm',
    validate: validate
}) (LessonForm);

export default formWrapped;