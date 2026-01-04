import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit}) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (submitted) {
            setId('');
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if(data?.id && data?.name) {
            setId(String(data.id));
            setName(String(data.name));
        } else if (!isEdit) {
            setId('');
            setName('');
        }
    }, [data, isEdit]);

    return (

        <Grid 
        container
        spacing={2}
        sx={
            {
                backgroundColor: '#f5f5f5',
                marginBottom: '20px',
                display: 'block'            
            }
        }>
            <Grid item xs={12}>
                
                <Typography component="h1" sx={{color: '#000000'}}> User Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>  
                <Typography
                component={'label'}
                htmlFor="id"
                sx={{
                    color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block',
                 }} >  ID  </Typography>
                <input 
                type="text" 
                id="id" 
                name="id" 
                placeholder="Enter ID"
                value={id}
                onChange={e => setId(e.target.value)}
               
                 />   
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>  
                <Typography
                component={'label'}
                htmlFor="name"
                sx={{
                    color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block',
                 }} >  Name  </Typography>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter Name"
                value={name}
                onChange={e => setName(e.target.value)}
               
                 />   
            </Grid>

            <button 
            sx={{
                margin: '20px',
                marginBottom: '20px',
                backgroundColor: '#00c6c6',
                color: '#000000',
                marginLeft: '15px', 
                marginTop: '20px',
                '&:hover': {
                    backgroundColor: '#00c6c6',
                    opacity:' 0.7',}

            }}
            
            onClick={() => isEdit ? updateUser({id, name}) : addUser({id, name})}
            >
                {isEdit ? 'Update User' : 'Add User'}
                

            
            </button>


        </Grid>
    );
}
export default UserForm;
