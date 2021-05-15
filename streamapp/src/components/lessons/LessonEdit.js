import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import LessonForm from './LessonForm'

class LessonEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    
    onSubmit = (formValues)=>{
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return (
            <div>
            <h3 style={{color: 'violet'}}>Edit your confession</h3>
            <LessonForm initialValues = {_.pick(this.props.stream, 'title', 'description', 'audience')} onSubmit={this.onSubmit}/>
        </div> 
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return(
        {stream: state.streams[ownProps.match.params.id]}
    )};

export default connect(mapStateToProps, {fetchStream, editStream})(LessonEdit);