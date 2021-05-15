import React from 'react';
import {Router, Route} from 'react-router-dom';
import LessonCreate from './lessons/LessonCreate';
import LessonEdit from './lessons/LessonEdit';
import LessonDelete from './lessons/LessonDelete';
import LessonList from './lessons/LessonList';
import LessonShow from './lessons/LessonShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header/>
                    <Route path ="/" exact component={LessonList}/>
                    <Route path ="/confessions/new" exact component={LessonCreate}/>
                    <Route path ="/confessions/edit/:id" exact component={LessonEdit}/>
                    <Route path ="/confessions/delete/:id" exact component={LessonDelete}/>
                    <Route path ="/confessions/show" exact component={LessonShow}/>
                </div>
            </Router>
        </div>
    );
};

export default App;