import React from 'react';

const Sidebar = () => {
    return (
        <div>
            {/* <h1>this is sidebar</h1> */}
            <div className="input-group">
                <label for="">From</label>
                <input style={{width: '100%'}} className="inp-style mt-1" type="text" name="" placeholder="Mirpur,Dhaka"/>
            </div>
            <div className="input-group">
                <label for="">To</label>
                <input style={{width: '100%'}} className="inp-style mt-1" type="text" name="" placeholder="Azimpur,Dhaka"/>
            </div>
            <div className="inputs">
                <div className="input-group mt-3">
                    <label for="">Go</label>
                    <input style={{width: '100%'}} className="inp-style mt-1" type="date" name=""/>
                </div>
                <div className="input-group mt-3">
                    <label for="">Return</label>
                    <input style={{width: '100%'}} className="inp-style mt-1" type="date" name=""/>
                </div>
                <button style={{width: '100%'}} className="btn btn-success">Search</button>
            </div>
        </div>
    );
};

export default Sidebar;