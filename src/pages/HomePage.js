import Header from '../components/Header';
import Banner from '../components/Banner';
import Recruitment from '../components/Recruitment';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactComponent as PlusIcon } from '../assets/images/plus.svg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const goMore = () => {
        navigate('/findjob');
    }

    return (
        <>
            <Header/>
            <Box sx={{width: '105%', display: 'flex', justifyContent: 'center'}}>
                <Box>
                    <Banner />
                    <Typography sx={{mt: '100px', pl: '15px'}} variant='h6' gutterBottom>
                        What kind of job are you looking for?
                    </Typography>
                    <Searchbar />
                </Box>
            </Box>
            <Box sx={{width: '105%', height: '455px', mt: '100px', mb: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FFE8AE'}}>
                <Typography sx={{mt: '40px', ml: '15px'}} variant='h6' gutterBottom>
                    Referral recruitment
                </Typography>
                <Box sx={{mt:'40px', width: 994, display: 'flex', justifyContent:'space-evenly'}}>
                    <Recruitment institution='사랑방재활주간보호센터' title='주간보호센터(남구) 사무원 채용공고'
                    condition='경력무관/학력무관' address='대구 남구' />
                    <Recruitment institution='사랑방재활주간보호센터' title='주간보호센터(남구) 사무원 채용공고'
                    condition='경력무관/학력무관' address='대구 남구' />
                    <Recruitment institution='사랑방재활주간보호센터' title='주간보호센터(남구) 사무원 채용공고'
                    condition='경력무관/학력무관' address='대구 남구' />
                    <Recruitment institution='사랑방재활주간보호센터' title='주간보호센터(남구) 사무원 채용공고'
                    condition='경력무관/학력무관' address='대구 남구' />
                </Box>
                <Typography sx={{mt: '50px', mb: '15px', fontSize: '16px', fontWeight: 500, color:'#4f4f4f'}} >More recruitments</Typography>
                <PlusIcon onClick={goMore} style={{ ':hover': {boxShadow: '0px 7px 8px 0 rgba(0,0,0,1)'} }}/>
            </Box>
            <Box sx={{width: '105%', display: 'flex', justifyContent: 'center', backgroundColor: '#f0f0f0'}}>
                <Footer />
            </Box>
        </>
    );
};

export default HomePage;