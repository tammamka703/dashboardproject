import { useState , useEffect} from "react";
import {ProSidebar , Menu , MenuItem} from "react-pro-sidebar";
import {Box , Typography , useTheme , IconButton} from "@mui/material"
import { Link } from "react-router-dom";
import { tokens} from "../../Theme";
import 'react-pro-sidebar/dist/css/styles.css';


// icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TimeLineOutlinedIcon from '@mui/icons-material/TimeLineOutlined';
import {PieChartOutline } from "@mui/icons-material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';



// menu item function 

const Item = ({title , selected , setSelected , to, icon})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <MenuItem
         active = {selected === to}
         onClick = {()=>setSelected(to)}
         styles = {{
            color : colors.gray[400]
         }}
         icon = {icon}
        >
            <Typography 
             >
                {title}
            </Typography>
            <Link to={to}/>

        </MenuItem>
    )
}



const Sidebar = ()=>{
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed , setIsCollapsed] = useState(false);
    const[isSelected , setIsSelected] = useState("/dashboard");
    
    useEffect(() => {
        setIsSelected( window.location.pathname);
    }, []);


    return(
        <Box
         sx={{
            backgroundColor : `${colors.primary[400]}`,
            "& .pro-sidebar-inner" : {
                background : `${colors.primary[400]} !important`,
            },
            "& .pro-sidebar-inner" : {
                backgroundColor : "transparent !important",
            },
            "& .pro-inner-item" : {
                padding : "5px 35px 5px 20px !important",
            },
            "& .pro-icon-wrapper" : {
                backgroundColor : "transparent !important",
            },
            "& .pro-inner-item:hover" : {
                color : "#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",
            },
            /* Style the scrollbar */
            "& .pro-sidebar-layout::-webkit-scrollbar" : {
                width: "10px",
            },

            /* Style the scrollbar track */
            "& .pro-sidebar-layout::-webkit-scrollbar-track" : {
                background: "#f1f1f1",
                borderRadius: "10px",
            },

            /* Style the scrollbar thumb */
            "& .pro-sidebar-layout::-webkit-scrollbar-thumb" : {
                background: "#888", 
                borderRadius: "10px",
            },

            /* On hover */
            "& .pro-sidebar-layout::-webkit-scrollbar-thumb:hover" : {
                background: "#555",
            }
         }}
        >
            <ProSidebar
             collapsed={isCollapsed}
             >
                <Menu iconShape = "square">
                    {/* {LOGO AND MENU ICONS} */}
                    <MenuItem
                        onClick={()=> setIsCollapsed(!isCollapsed)}
                        icon = {isCollapsed ? <MenuOutlinedIcon/> : undefined}
                        style={{
                            margin : "10px 0 20px 0",
                            color : colors.gray[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                              ml="15px"
                            >
                                <Typography variant="h3" color={colors.gray[100]}>
                                    ADMINS
                                </Typography>
                                <IconButton onClick={()=> setIsCollapsed(prev => !prev)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>   
                        )} 
                    </MenuItem>
                    {/* {USER} */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                             display="flex"
                             alignItems="center"
                             justifyContent="center"
                            >
                                <img
                                 width="100px"
                                 height="100px"
                                 src={'../../assets/images/profile.jpg'}
                                 alt="profile pics"
                                 style={{cursor : "pointer" , borderRadius : "50%" , objectFit : "cover"}}
                                 />
                            </Box>
                            <Box
                             display="flex"
                             alignItems='center'
                             justifyContent='center'
                             flexDirection='column'
                            >
                                <Typography
                                 variant="h2"
                                 color={colors.gray[100]}
                                 sx={{
                                    fontWeight : "bold",
                                    marginTop  : "10px"
                                 }}
                                >
                                    Jenna
                                </Typography>
                                <Typography
                                 variant="h5"
                                 color={colors.greenAccent[500]}
                                >
                                     The Only Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    {/* {Menu Item} */}
                    <Box
                     paddingLeft={isCollapsed ? undefined : "10%"}
                     
                    >
                        <Item
                            to = "/"
                            title = "Dashboard"
                            icon = {<HomeOutlinedIcon/>}
                            selected = {isSelected}
                            setSelected = {setIsSelected}
                        />
                        {!isCollapsed && 
                        <Typography variant="h4">
                            Data
                        </Typography>
                        }
                        <Item
                            to = "/team"
                            title = "Manage Team"
                            icon = {<PeopleOutlinedIcon/>}
                            selected = {isSelected}
                            setSelected = {setIsSelected}
                        />
                         <Item
                            to = "/contacts"
                            title = "Contact us"
                            icon = {<ContactsOutlinedIcon/>}
                            selected = {isSelected}
                            setSelected = {setIsSelected}
                        />
                        <Item
                            to = "/invoices"
                            title = "Invoices"
                            icon = {<ReceiptOutlinedIcon/>}
                            selected = {isSelected}
                            setSelected = {setIsSelected}
                        />
                        
                        {!isCollapsed && 
                        <Typography variant="h4">
                            Pages
                        </Typography>
                        }

                        <Item
                           to = "/adduser"
                           title = "Add User"
                           icon = {<PersonOutlinedIcon/>}
                           selected = {isSelected}
                           setSelected = {setIsSelected}
                        />
                        <Item
                            to = "/calendar"
                            title = "Calendar"
                            icon = {<CalendarTodayOutlinedIcon/>}
                            selected = {isSelected}
                            setSelected = {setIsSelected}
                        />
                        <Item
                            to = "/help"
                            title = "Help"
                            icon = {<HelpOutlinedIcon/>}
                            selected = {isSelected}
                            setSelected = {setIsSelected}
                        />
                        {!isCollapsed && 
                        <Typography variant="h4">
                            Charts
                        </Typography>
                        }
                        <Item
                            to = "/timeline"
                            title = "Time Line"
                            icon = {<TimeLineOutlinedIcon/>}
                            selected = {isSelected}
                            setSelected = {setIsSelected}
                        />
                        <Item
                            to = "/barchar"
                            title = "Bar Char"
                            icon = {<BarChartOutlinedIcon/>}
                            selected = {isSelected}
                            setSelected = {setIsSelected}
                        />
                        <Item
                            to = "/pieChar"
                            title = "Pie Char"
                            icon = {<PieChartOutline/>}
                            selected = {isSelected}
                            setSelected = {setIsSelected}
                        />
                        <Item
                            to = "/geography"
                            title = "Geography"
                            icon = {<MapOutlinedIcon/>}
                            selected = {isSelected}
                            setSelected = {setIsSelected}
                        />
                        
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar;