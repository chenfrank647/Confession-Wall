import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import LessonCreate from './lessons/LessonCreate';
import LessonEdit from './lessons/LessonEdit';
import LessonDelete from './lessons/LessonDelete';
import LessonList from './lessons/LessonList';
import LessonShow from './lessons/LessonShow';

const App = () => {
    return (
        <div>
            <h1>Header</h1>
            <BrowserRouter>
                <div>
                    <Route path ="/" exact component={LessonList}/>
                    <Route path ="/lessons/new" exact component={LessonCreate}/>
                    <Route path ="/lessons/edit" exact component={LessonEdit}/>
                    <Route path ="/lessons/delete" exact component={LessonDelete}/>
                    <Route path ="/lessons/show" exact component={LessonShow}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;