import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import  Axios  from "axios";
import React, { useState, useEffect } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false); 
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    
    

    


    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get("http://localhost:3001/api/users").then((response) => {
            setUsers(response.data?.response || []);
        })
        .catch(error => {
            console.error("There was an error fetching the users!", error);
        });
    }

    const addUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name
        };

        Axios.post("http://localhost:3001/api/createuser", payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
            })
            .catch(error => {
                console.error("There was an error adding the user!", error);
            });
    }

    const updateUser = (data) => {
        console.log("Update User called with:", data);
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name
        };
        
        console.log("Sending update request with payload:", payload);
        
        Axios.put("http://localhost:3001/api/updateuser", payload)
            .then((response) => {
                console.log("Update response:", response.data);
                
                if (response.data.message === 'An error occurred!') {
                    console.error("Backend returned error:", response.data);
                    alert("Error: Backend could not update the user. Check backend logs.");
                } else {
                    console.log("Update successful, refreshing users...");
                }
                
                // Refresh users list regardless
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
                setSelectedUser({});
            })
            .catch(error => {
                console.error("There was an error updating the user!", error);
                alert("Error updating user: " + error.message);
                setSubmitted(false);
            });
    }
    const deleteUser = (id) => {
        console.log("Delete User called with id:", id);
        setSubmitted(true);     

        const payload = {
            id: id
        };

        console.log("Sending delete request with payload:", payload);

        Axios.delete("http://localhost:3001/api/deleteuser", { data: payload })
            .then((response) => {
                console.log("Delete successful:", response.data);
                getUsers();
                setSubmitted(false);
            })
            .catch(error => {
                console.error("There was an error deleting the user!", error);
            });
    }

    return (
        <Box
        
        sx={{
            width: 'calc(100% - 100px)',
            margin: 'auto',
            marginTop: '100px',
        }}
        >
            <UserForm 
               addUser={addUser}
               updateUser={updateUser}
               submitted={submitted}
               data={selectedUser}
               isEdit={isEdit}
            />
            {/* Users Table  */}

            <UsersTable 
                rows={users}
                selectUser={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser={deleteUser}
                />
        </Box>
    );
}

export default Users;