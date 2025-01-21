import { Typography,Box,useTheme } from "@mui/material";
import { tokens } from "../Theme";

const Header = ({title , subtitle})=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
         padding="20px 10px"
         >
            <Box>
                <Typography
                 variant="h2"
                 color={colors.gray[100]}
                 fontWeight="bold"
                >
                    {title}
                </Typography>
                <Typography
                 variant="h5"
                 color={colors.greenAccent[400]}
                 >
                    {subtitle}
                 </Typography>
            </Box>
        </Box>
    )
}

export default Header;