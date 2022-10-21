import React, { useState } from 'react';
import Post from './Components/PostFolder/Post';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import Header from './Components/NavBar/NavBar';
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
                <Header/>
                <div className='post-area'>
                    <div className='border-box'>
                        <CreatePostForm addNewPost={createPostForm} />
                    </div>
                    <div className='border-box'>
                        <PostList parentEntries={entries} />
                    </div>
                </div>
        </div>
    </div>
  );
}

export default App;

