import React from 'react'
import Card from '../../../components/UI/Card';
import './style.css'
/**
* @author
* @function RecentPosts
**/

 const RecentPosts = (props) => {
  return(
        <div style={{width:'70%'}}>  
           <Card style={{marginBottom:'20px'}}>
               <div className="postimageWrapper">
                   <img src={require('../../../blogPostImages/02.jpeg').default}/>
               </div>
               <div style ={{textAlign:'center'}}>
                   <span>Features</span>
                   <h2>features my collage Life</h2>
                   <p>nstead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.</p>
                   <button>Read More</button>
               </div>
           </Card>
    </div>
   )

 }
 export default RecentPosts;