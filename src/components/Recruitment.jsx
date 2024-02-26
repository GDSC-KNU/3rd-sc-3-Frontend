import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ReactComponent as CardLine } from '../assets/images/cardline.svg';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Recruitment = (props) => {
    const {institution, title, condition, address} = props;

    const navigate = useNavigate();

    const goPostsdetail = () => {
        navigate('/recseek');
    }


    return (
        <>
            <Card sx={{width: '240px', ':hover': {backgroundColor: '#F0F0F0'} }} onClick={goPostsdetail}>
                <CardContent>
                    <Typography sx={{ fontSize:14, fontFamily: 'Pretendard-Regular'  }} color='#F1AD00' gutterBottom>
                        {institution}
                    </Typography>
                    <Typography sx={{ mb:2, fontSize:16, fontWeight: 800, fontFamily: 'Pretendard-Regular'  }} component='div'>
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontFamily: 'Pretendard-Regular' }} color='#808080' gutterBottom>
                        {condition}
                        <br />
                        {address}
                    </Typography>
                    <CardLine />
                </CardContent>
            </Card>
        </>
    );
};

export default Recruitment;