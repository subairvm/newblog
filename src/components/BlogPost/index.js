import React from 'react'
import Card from '../UI/Card';
import './style.css';

/**
* @author
* @function BlogPost
**/

export const BlogPost = (props) => {
  return(
    <div className="blogPostContainer">
<Card>
   <div className="blogHeader">
     <span className="blogCategor">Featured</span><br/>
     <h className="postTitle">Gettogether 2021</h> <br/>
     <span className="postedBy">Posted on May 21, 2021</span>
     </div>

     <div className="postImageContainer">
       <img src={require('../../blogPostImages/02.jpg').default} alt="Post Image"/>
     </div>
</Card>
    </div>
   )

 }
 export default BlogPost;