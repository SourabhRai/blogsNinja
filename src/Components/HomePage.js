import React, {useState } from 'react';
import BlogList from './BlogList';
import Fetch from './useFetch';
const HomePage = () => {
  const {blogs_data,error,isPending} = Fetch('http://localhost:8000/blogs');
  const [name1, setName] = useState('unchanged');
  return (
    <div className="container">
      {error && <h1>{error}</h1>}
      {isPending && <h4> Loading ... </h4>}
      {blogs_data && <BlogList title="My blogs" blogs={blogs_data}/>}
      <button onClick={() => setName('changed')}>change name</button>
      <p>{name1}</p>
    </div>

  );
}

export default HomePage;
