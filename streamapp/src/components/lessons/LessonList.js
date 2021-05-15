import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions';

class LessonList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin = (stream) => {
        if(stream.userId===this.props.currentUserId){
            return(
                <div className="right floated content">
                    <Link to={`/confessions/edit/${stream.id}`} className="ui button pink">Edit</Link>
                    <Link to={`/confessions/delete/${stream.id}`} className="ui button pink">Delete</Link>    
                </div>
            );
        }
    }

    renderCreate () {
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign:'right'}}>
                    <Link to="/confessions/new" className="ui button pink">
                        Confess!
                    </Link>
                </div>
            );
        }
    }

    renderList(){
        return this.props.streams.map(stream=>{
            return (
                <div className="item" key = {stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon heart pink"/>
                    <div className = "content">
                        <div>
                            <h5>{`To: ${stream.title}`}</h5>
                        </div>
                        <div className="description">
                            {stream.description}
                        </div>
                        <div className="audience">
                            {`${stream.audience ? `Contact me: ${stream.audience}`:''}`}
                        </div>
                    </div>  
                </div>
            )
        });
    }
    render(){
        return (
            <div>
                <h2 style={{color: 'violet'}}>Confessions</h2>
                <div style={{color: 'violet'}}>Log in to confess your love</div>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {fetchStreams})(LessonList);