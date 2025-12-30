import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";


const users = [

    { id:1 , name:'miyuru' },
    { id:2 , name:'nuwan' },
    { id:3 , name:'kasun' },
];

const Users = () => {
    return (
        <Box>
            <UserForm />
            <UsersTable rows={users} />
        </Box>
    );
}

export default Users;