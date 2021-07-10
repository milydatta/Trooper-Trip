import React from 'react';
import header from '../../images/header.png';

const Blog = () => {
    return (
        <div>
             <div  style={{ backgroundImage:`url(${header})`}}  className="header">
                <h1 style={{textAlign: 'center',paddingTop:150,color: 'white'}}>Blog</h1>
             </div>
        </div>
    );
};

export default Blog;