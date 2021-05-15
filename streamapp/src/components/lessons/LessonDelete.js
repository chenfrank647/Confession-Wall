import React from 'react';
import Modal from '../Modal';
import {Link} from 'react-router-dom';
import history from '../../history'
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';

class LessonDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions(){
        return (
            <div>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button black">Delete</button>
                <Link to='/' className="ui button pink">Keep my love alive!</Link>
            </div>
        );
    }
    

    render(){
        return (
            <Modal
                title="Delete Confession"
                content="You are about to delete your courageous confession. Doing so will eliminate your possibility of love."
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />       
        );  
    }
}

const mapStateToProps = (state, ownProps)=>{
    return(
        {stream: state.streams[ownProps.match.params.id]}
    )
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(LessonDelete);