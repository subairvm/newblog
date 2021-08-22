import React from 'react';
import BlogPost from '../../components/BlogPost';
// import Card from '../../components/UI/Card';
import './style.css';
import Sidebar from '../../components/Sidebar'


/**
* @author
* @function Post
**/

 const Post = (props) => {
   console.log(props);
  return(
    <section className="container">
      <BlogPost {...props}/>
      <Sidebar {...props}/>
    </section>
   )

 }
 export default Post;