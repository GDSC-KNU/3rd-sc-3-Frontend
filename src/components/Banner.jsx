import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { ReactComponent as Line } from '../assets/images/line.svg';
import { ReactComponent as Illust } from '../assets/images/illust.svg';
import '@fontsource/roboto/700.css';
import "../assets/fonts/font.css";

const mainBannerBox = {
    width: 994,
    height: 368,
    position: "relative",
    overflow: "hidden",
    borderRadius: 6,
    background: "#ffe8ae",
    marginTop: "80px",
};

const mainBannerTitle = {
    width: 496,
    height: 76,
    position: "absolute",
    left: 55,
    top: 82,
    fontFamily: "TAEBAEKfont",
    fontSize: 28,
    textAlign: "left",
    color: "#4f4f4f",
};

const mainBannerContent = {
    display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: "55px",
      top: "227px",
      gap: "19px",
};

const mainBannerText = {
    flexGrow: 0,
    flexShrink: 0,
    width: 429,
    fontSize: 16,
    textAlign: "left",
    color: "#565656",
};

const illustStyle = {
    height: 467,
    position: "absolute",
    left: "515.7px",
    top: "-32.5px",
    objectFit: "none",
}

const Banner = () => {
    return (
        <>
            <Grid sx={mainBannerBox} container direction="column" justifyContent="center" alignItems="center">
                <Typography style={mainBannerTitle}>
                    Find great places to work or study with Knock, knock.
                </Typography>
                <Box sx={mainBannerContent}>
                    <Line/>
                    <Typography style={mainBannerText}>
                        Knock, knock will provide easy ways to browse companies and institutions that will help you find your second life.
                    </Typography>
                </Box>
                <Box style={{ width: "482px", height: "467px"}}>
                    <Illust style={illustStyle} />
                </Box>
            </Grid>
        </>
    );
};


export default Banner;