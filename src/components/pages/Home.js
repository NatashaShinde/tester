import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {  //Hooks concept (creating state)
    const [users, setUser] = useState([]);

    //here useEffect is used for data fetching.
    useEffect(() => {   //jb component load lerae tb agr kuch run karana chahteye to uss k lie best hey useEffect().
        loadUsers();   //jb page load lega tb ye user ko load krega.
    }, []);

    const loadUsers = async () => {   
        const result = await axios.get("http://localhost:3003/users");
        //console.log("result");
        setUser(result.data.reverse()); //using reverse() new user data will display first 
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table boder shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {                                      //here looping of data
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;