import Post from "../PostFolder/Post";

const PostList = (props) => {

    //inside return, display post's .author and .status using html
    return(
        <table className='table'>
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((currentEntry, index) => {
                return(
                    // Need entry and index props for Post
                    <Post entry={currentEntry} index={index} />
                    
                );
            })}
            </tbody>
        </table>
    );

}

export default PostList;