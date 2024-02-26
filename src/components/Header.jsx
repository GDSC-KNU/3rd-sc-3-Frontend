import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 'auto',
    width: '80%',
    paddingLeft: '10%',
    paddingRight: '20%',
    boxShadow: "0px 7px 8px 0 rgba(0,0,0,0.07)",
};

const itemContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 0,
    flexShrink: 0,
    width: '50%',
    position: "relative",
}

const loginContainer = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: '40%',
    position: "relative",
}

const itemStyle = {
    flexGrow: 0,
    flexShrink: 0,
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    color: "#000",
};

const Header = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    const goJobs = () => {
        navigate('/findjob');
    }

    const goEdu = () => {
        navigate('/findedu');
    }

    const goGuide = () => {
        navigate('/application');
    }

    const gotoLogin = () => {
        navigate('/login');
    }

    const gotoSignUp = () => {
        navigate('/registeration');
    }

    return (
        <Box sx={headerStyle} >
            <Box sx={itemContainer} indicatorColor='none'>
                <Tab icon={<Logo />} sx={itemStyle} onClick={goHome} />
                <Tab label="Jobs" sx={itemStyle} onClick={goJobs}/>
                <Tab label="Educations" sx={itemStyle} onClick={goEdu}/>
                <Tab label="Usage Guide" sx={itemStyle} onClick={goGuide}/>
            </Box>
            <Box sx={loginContainer} indicatorColor='none'>
                <Tab label="Log-in" sx={itemStyle} onClick={gotoLogin}/>
                <Tab label="Sign-up" sx={itemStyle} onClick={gotoSignUp}/>
            </Box>
        </Box>
    
    );
};

export default Header;