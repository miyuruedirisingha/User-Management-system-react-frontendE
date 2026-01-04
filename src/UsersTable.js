
import { Table, TableContainer, TableRow, TableHead, TableBody, TableCell, Paper } from "@mui/material";

const UsersTable = ({rows, selectUser, deleteUser}) => {

    return (
    <TableContainer component={Paper}>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell> ID </TableCell>
                    <TableCell> Name </TableCell>
                    <TableCell> Action </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                 {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{row.id}</TableCell> 
                        <TableCell component="th" scope="row">{row.name}</TableCell> 
                        <TableCell>
                            <button 
                            sx={{margin: '0px 10px'}}
                            onClick={() => {
                                console.log("Update button clicked for:", row);
                                selectUser({id: row.id, name: row.name});
                            }}>
                                Update
                            </button>

                            <button 
                            sx={{margin: '0px 10px'}}
                            onClick={() => {
                                console.log("Delete button clicked for id:", row.id);
                                deleteUser(row.id);
                            }}>
                                Delete  
                            </button>

                        </TableCell>
                        </TableRow>
                    )) : 
                    <TableRow sx={{ '&:last-child td, &:last-child th' : {border: 0}}}>
                        <TableCell component="th" scope="row"> 
                            No Data Found
                        </TableCell> 
                    </TableRow>
                 }
            </TableBody>
        </Table>

    </TableContainer>
    );

}

export default UsersTable;