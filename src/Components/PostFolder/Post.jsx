

const Post = (props) => {

    //inside return, display post's .author and .status using html
    return(
        <table className='table'>
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry, index) => {
                return(
                    <tr key={index}>
                        <td>{entry.author}</td>
                        <td>{entry.status}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );

}

export default Post;