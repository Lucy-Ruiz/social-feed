import React, { useState } from 'react';
import Post from './Components/PostFolder/Post';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import './App.css';

function App() {

    const [entries, setEntries] = useState([{author: 'Lucy', status: 'first post'}, {author: 'Bob', status: 'Hello!'}])
    function createPostForm(entry){
        let tempEntries=[entry, ...entries];
        setEntries(tempEntries);
    }

  return (
    <div className='container-fluid'>
        <div className='row'>
        <h3 style={{margin:'1em'}}>Social
            <div className='text-muted'/>Feed</h3>
            <div className='col-md-6'>
                <div className='border-box'>
                    <CreatePostForm CreatePostForm={createPostForm} />
                </div>
                <div className='border-box'>
                    <Post parentEntries={entries} />
                </div>
            </div>  
        </div>
    </div>
  );
}

export default App;
