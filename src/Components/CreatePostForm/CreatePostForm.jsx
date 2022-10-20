import React, { useState } from 'react';
import './CreatePostForm'

const CreatePostForm = (props) => {
    const[author, setAuthor] = useState(' ');
    const[status, setStatus] = useState(' ');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            author: author,
            status: status
        };
        console.log(newPost);
        props.addNewPost(newPost);
    }

    return(
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Author</label>
                <input type='text' className='form-control' value={author} onChange={(event) => setAuthor(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Status</label>
                <input type='text' className='form-control' value={status} onChange={(event) => setStatus(event.target.value)}/>
            </div>
            <button type='submit' class='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
        </form>
    );

}

export default CreatePostForm;