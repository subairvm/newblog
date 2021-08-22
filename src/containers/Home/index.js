import React from "react";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/UI/Card";
import RecentPosts from "./RecentPosts";
import './style.css';

const Home = props=>{


    const gallaryHeight=450;
    const gallaryStyle={
        height:gallaryHeight+'px',
        overflow:'hidden'
    }

    const sideImageHeight = gallaryHeight/3;

    return(
        <div>
           <Card >
               <div className="gallaryPost" style={gallaryStyle}>
                   <section style={{width:'70%'}}> 
                       <div>
                       <img src={require('../../blogPostImages/02.jpg').default} alt=""/>
                       </div>
                   </section>
                   <section className={"sideImageWrapper"} style={{width:"30%"}}>
                   <div style={{height:`${sideImageHeight}px`}}>
                   <img src={require('../../blogPostImages/02.jpg').default} alt=""/>
                   </div>
                   <div style={{height:`${sideImageHeight}px`}}>
                   <img src={require('../../blogPostImages/1.jpeg').default} alt=""/>
                   </div>
                   <div style={{height:`${sideImageHeight}px`}}>
                   <img src={require('../../blogPostImages/02.jpg').default} alt=""/>
                   </div>
                  </section>    
               </div>         
           </Card>
           <section className="HomeCantainer">
           <RecentPosts/>
           
            </section>
        </div>
    )
}
export default Home;
