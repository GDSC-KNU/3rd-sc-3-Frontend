import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ReactComponent as Logo } from '../assets/images/logoBlack.svg';
import { useNavigate } from 'react-router-dom';

const footerContainerStyle = {
    width: 994, 
    pt: '30px', 
    pb:'50px', 
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'space-between',
};

const footerRightStyle = { 
    mt: '37px',
    fontSize: '16px', 
    color: '#4f4f4f', 
    fontFamily: 'pretendard-regular',
};

const footerLeftStyle = {
    mt: '12px',
    fontSize: '16px', 
    fontWeight: 500,
    color: '#4f4f4f', 
    fontFamily: 'pretendard-regular',
}

const Footer = () => {

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

    return (
        <>
            <Box sx={footerContainerStyle}>
                <Box sx={{pt: '12px'}}>
                    <Logo />
                    <Typography sx={footerRightStyle}>
                        GDSC KNU 3rd
                        <br />
                        Solution Challenge Team 3: deus ex machina
                    </Typography>
                    <Typography sx={footerRightStyle}>
                        FE: Chaewon Shin, Juyeon Lee
                        <br />
                        BE: Hyungdong Son, Donghyuk Shin
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Button sx={footerLeftStyle} onClick={goHome}>
                        HOME
                    </Button>
                    <Button sx={footerLeftStyle} onClick={goJobs}>
                        JOBS
                    </Button>
                    <Button sx={footerLeftStyle} onClick={goEdu}>
                        EDUCATIONS
                    </Button>
                    <Button sx={footerLeftStyle} onClick={goGuide}>
                        USAGE GUIDE
                    </Button>
                    <Button sx={footerLeftStyle} onClick={gotoLogin}>
                        LOGIN
                    </Button>
                </Box>
                
            </Box>
        </>
    );
};

export default Footer;