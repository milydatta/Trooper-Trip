import React from 'react';
import header from '../../images/header.png';


const Contact = () => {
    return (
        
        <section className="contact" >
        <div  style={{ backgroundImage:`url(${header})`}}  className="header">
        <div className="container" style={{ textAlign: 'center',paddingTop:100 }}>
            <div className="section-header text-center text-white mb-5">
                 <h2 className="text-success">Contact</h2>
                 <h1>Always  connect with us</h1>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group mt-2">
                        <input type="text" className="form-control" placeholder="Subject *"/>
                    </div>
                    <div className="form-group mt-2">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="btn btn-success mt-2"> Submit </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </section>
   
    );
};

export default Contact;