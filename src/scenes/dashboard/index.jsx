import { Box } from "@mui/material";

// component
import Header from "../../components/Header";

const Dashboard = ()=>{
    return(
        <Box 
         className="dashboard"
         paddingInline ="10px"
        >
            <Box
             display="flex"
             alignItems="center"
             justifyContent="space-between"
            >
                <Header
                    title = "Dashboard"
                    subtitle = "admin dashboard by tammam"
                />
            </Box>
        </Box>
    )
}

export default Dashboard;