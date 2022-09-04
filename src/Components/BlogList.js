import React from 'react';
import { Link } from 'react-router-dom';
const BlogList = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <hr />
            {props.blogs.map(blog => (
                <div className="blog-preview my-4" key={blog.id} >
                    <Link to={`/blog/${blog.id}`}>
                    <h6>{blog.title}</h6>
                    <span>Written by {blog.author}</span>
                    <button className="btn btn-danger mx-3" onClick={() => props.deleteItem(blog.id)}> Delete this blog.</button>
                    </Link> 
                </div>
            ))}
        </div>
    );
}

export default BlogList;