const BlogList = ({blogs,title,handleDelete,handleUpdate}) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <button style={{
                        backgroundColor: "#ff0000",
                        color: "#f2f2f2",
                        borderRadius: "0px",
                        marginRight: "50px"
                    }} onClick={() => handleDelete(blog.id)}>Delete blogs</button>
                    
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;