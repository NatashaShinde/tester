    import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

    const EditUser = () => {
        let history = useHistory();
        const { id } = useParams();   //distruction in ES6 (jiss user ko edit krnae uska id App.js se pass hokr yaha aaega)
        // alert(id);
        const [user, setUser] = useState({
            name: "",
            username: "",
            email: "",
            phone: "",
            website: ""
        });

        const { name, username, email, phone, website } = user; //destruction in ES6 (mtlb uss object ke andr aatae sb given data)

        const onInputChange = e => {
            //console.log(e.target.value);
            setUser({ ...user, [e.target.name]: e.target.value });
        };

        useEffect(() => {
            loadUser();
        }, []);

        const onSubmit = async e => {  //async qki hmlog request bhejne waleye. (post req bhejenge qki data ko add krnae)
            e.preventDefault();
            await axios.put(`http://localhost:3003/users/${id}`, user); //uppr distruction ES6 me jo user likhae wo yaha use krreye.
            //await nai dia to data jae ya na jae usse pehle hi yeh redirect ho jaega, qki javascript line by line execute krtae code ko.
            //To eslie hmlog kya krteye ki yeh jb tk complete na ho tb tk page redirect na ho eslie await use keteye.
            //or await dereye to function se pele async dena hoga nai to await kaam nai krega. 
            history.push("/"); //To redirect on Home page
        };

        const loadUser = async () => {// loadUser qki hum 1 user ko load krreye edit krne ke lie. or async qki hmlog yaha par request bhejne waleye
            const result = await axios.get(`http://localhost:3003/users/${id}`); //get qki hme data chahie user ko edit krne ke lie
            //pr yaha pata chalna chie na API ko ki, konse user ka data edit krnae to uske lie dynamic routing use krenge.
            //console.log("result");
            setUser(result.data);
        };

        return (
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit A User</h2>
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
                        <button className="btn btn-warning btn-block">Update User</button>

                    </form>
                </div>
            </div>
        );
    };

export default EditUser;