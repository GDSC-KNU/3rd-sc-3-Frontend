import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactComponent as SearchIcon } from '../assets/images/SearchIcon.svg';

const homeSearchbar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: '954px',
    height: '48px',
    position: "relative",
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: 50,
    background: "#f0f0f0",
};

const homeSearchPlaceholder = {
    flexGrow: 0, 
    flexShrink: 0, 
    fontSize: 14, 
    textAlign: "left", 
    color: "#808080"
};


const Searchbar = () => {
   
    return (
        <>
            <Box sx={homeSearchbar}>
                <Typography sx={homeSearchPlaceholder}>
                    Search with keywords! (e.g. Kitchen assistants, Cleaners ...)
                </Typography>
                <SearchIcon/>
            </Box>
        </>
    );
};


export default Searchbar;