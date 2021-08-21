import React from 'react';
import Card from '../UI/Card';
import './style.css';
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return (
    <div className="sidebarContainer">
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
          <p className="personalBio">MES Mampad Collage Remembreble</p>

        </div>
      </Card>
      <Card>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>
      <Card>
      <div className="cardHeader">
          <span>Recent Post</span>
        </div>
      </Card>
    </div>

  )

}
export default Sidebar;