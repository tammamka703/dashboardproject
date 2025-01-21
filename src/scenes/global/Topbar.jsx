import { Box,IconButton,InputBase,useTheme } from "@mui/material";
import { ColorModeContext, tokens} from "../../Theme";
import { useContext } from "react";
// import InputBase from "@mui/material";
// icons

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkMiodeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';




const Topbar = ()=>{
// it is like useContext hook in react but it is for the theme in matirial ui
// it allow us to use the theme 
// remember the theme object contain all what we need for toggleing the theme like the colors pallets we created before and the typography and the mode...

    const theme = useTheme();
    
    // there we pass the mode to get the colors from the token function we created before
    const colors = tokens(theme.palette.mode);
    // remember how to use use context .... the hook useContext we pass the name of the context inside of it
    const colorMode = useContext(ColorModeContext);

    return(
        // we can write css directy in the mui components...
        <Box
         display="flex"
         justifyContent="space-between"
         alignItems="center"
        //  this is a short cut for padding
         p={2}
         >
            {/* search bar */}
            <Box
             display="flex"
             alignItems="center"
             justifyContent="center"
             backgroundColor={colors.primary[400]}
             borderRadius="3px"
             gap="1rem"
             >
                <InputBase
                 // the mx is the object that hold the css with some of the mui components
                 sx={{ml: "2px" , flex: 1}}
                 placeholder="search"

                />
                <IconButton
                 type="button"
                 sx={{p : 1}}
                >
                  <SearchOutlinedIcon/>
                </IconButton>
            </Box>
                {/* Icon section */}
                <Box
                 display="flex"
                 alignItems="center"
                 >
                    <IconButton type="button">
                        <PersonOutlinedIcon/>
                    </IconButton>
                    <IconButton type="button">
                        <SettingsOutlinedIcon/>
                    </IconButton>
                    <IconButton type="button">
                        <NotificationsNoneOutlinedIcon/>
                    </IconButton>
                    <IconButton
                     type="button"
                     onClick={colorMode.toggleColorMode}
                     >
                        {theme.palette.mode === "dark" ?
                         <LightModeOutlinedIcon/> : <DarkMiodeOutlinedIcon/>
                         }
                    </IconButton>

                </Box>

        </Box>
    )
}

export default Topbar;