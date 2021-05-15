import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import LessonForm from './LessonForm'

class LessonCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

   render(){
    return (
        <div>
            <h3 style={{color:'violet'}}>Log your confession</h3>
            <LessonForm onSubmit={this.onSubmit}/>
        </div> 
    );
   }
};

export default connect(null, {createStream})(LessonCreate);