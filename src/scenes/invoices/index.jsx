import { Box , useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import {mockDataInvoices} from "../../data/mockdata";

// conponent

import Header from "../../components/Header";
import {DataGrid , GridToolbar} from "@mui/x-data-grid";

const Invoices = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const columns = [
        {
            field : "id", 
            headerName : "ID",
            flex : 0.5
        },
        {
            field : "name" ,
            headerName : "Name",
            flex : 1,
            cellClassName : "name-cell"
        },
        {
            field : "email" ,
            headerName : "Email",
            flex : 1,
        },
        {
            field : "phone" ,
            headerName : "Phone Number",
            flex : 1,
        },
        {
            field : "cost" ,
            headerName : "Cost",
            flex : 1,
        },
        {
            field : "date" ,
            headerName : "Date",
            flex : 1,
        }
    ]

    return(
        <Box>
            <Header
             title = "Contacts"
             subtitle = "List of contacts for future Reference"
            />
            <Box
             paddingLeft="10px"
             height="70vh"
             width="100%"
             sx={{
                "& .MuiDataGrid-cell":{
                    display : "flex",
                    alignItems: "center",
                    border : "none"
                },
                "& .name-cell" :{
                    backgroundColor : colors.greenAccent[700]
                },
                "& .MuiDataGrid-columnHeader" : {
                    backgroundColor : colors.blueAccent[700],
                    borderBottom : "none",
                },
                "& .MuiDataGrid-virtualScroller" : {
                    backgroundColor : colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer" : {
                    borderTop : "none",
                    backgroundColor : colors.blueAccent[700]
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text" : {
                    color : colors.gray[100],
                }
             }}
            >
                <DataGrid
                 checkboxSelection
                 rows={mockDataInvoices}
                 columns={columns}
                 components = {{Toolbar :  GridToolbar}}
                 />
            </Box>
        </Box>
    )
}

export default Invoices;