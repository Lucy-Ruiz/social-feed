

const Post = (props) => {

    //inside return, display post's .author and .status using html
    return(
     
        <tr>
            <td>{props.entry.author}</td>
            <td>{props.entry.status}</td>
        </tr>
    );

}

export default Post;