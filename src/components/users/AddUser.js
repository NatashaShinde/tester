import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {    //Hooks concept (creating state)
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user; //destruction in ES6

    const onInputChange = e => {
        //console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
    };

    const onSubmit = async e => {  //async qki hmlog request bhejne waleye. (post req bhejenge qki data ko add krnae)
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user); //uppr distruction ES6 me jo user likhae wo yaha use krreye.
        //await nai dia to data jae ya na jae usse pehle hi yeh redirect ho jaega, qki javascript line by line execute krtae code ko.
        //To eslie hmlog kya krteye ki yeh jb tk complete na ho tb tk page redirect na ho eslie await use keteye.
        //or await dereye to function se pele async dena hoga nai to await kaam nai krega. 
        history.push("/"); //To redirect on Home page
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}> 
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)} /> 
                </div>
                <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Email Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)} />
                </div>
                <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)} />
                </div>
                <button className="btn btn-primary btn-block">Add User</button>
                
            </form>
        </div>
             </div>           
        );
};

export default AddUser;