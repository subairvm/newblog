import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const[posts, setPosts]=useState([]);
useEffect(()=>{
  const posts=blogPost.data;
  setPosts(posts);
},[posts]);

  return (
    <div className="sidebarContainer"style={{
      width:props.width
    }}>
      <Card style={{ marginBottom: '20px',padding:'20px',boxSizing:'border-box' }}>
        <div className="cardHeader">
          <span> about Us</span>
        </div>
        <div className="profileImageContainer">
          <img src={require('../../blogPostImages/1.jpeg').default} alt="About Us" />
        </div>
      </Card>
      <Card>
        <div className="cardBody">
          <p className="personalBio">MES Mampad Collage Remembreble Memories...</p>

        </div>
      </Card>
      <Card style={{ marginBottom: '20px',padding:'20px',boxSizing:'border-box' }}>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>
      <Card style={{ marginBottom: '20px',padding:'20px',boxSizing:'border-box' }}>
      <div className="cardHeader">
          <span>Recent Post</span>
        </div>
        <div className="recentPosts">

          {
            posts.map(post=>{
              return(
                <NavLink key={post.id} to={`/post/${post.id}`}>
                  <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                   </div>
                </NavLink>               
              );
            })
          }
        </div>
       </Card>
       </div>

  )

}
export default Sidebar;