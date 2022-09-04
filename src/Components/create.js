import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('mario');
    const [body, setBody] = useState('');
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,body,author};
        console.log({blog});
        fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
        }).then(() => {
        console.log('new blog added');
        history.push('/');
        })
    }
    
    return (
        <div>
            <h1>Create a new blog</h1>
            <form onSubmit={handleSubmit}>

                <label> Blog Title </label>
                <input type="text" 
                required 
                value={title} 
                onChange= {(e) => (setTitle(e.target.value))}
                />

                <label> Blog Body </label>
                <textarea 
                required 
                value={body}
                onChange= {(e) => (setBody(e.target.value))}
                />

                <label> Blog Author </label>
                <select value={author} onChange= {(e) => (setAuthor(e.target.value))}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
                </select>
                
                
                
            </form>
            <button onClick={handleSubmit}> Add blog</button>
        </div>
    );
}

export default Create;
