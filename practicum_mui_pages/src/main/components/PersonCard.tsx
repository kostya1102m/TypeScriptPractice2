import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

import { Link } from 'react-router-dom';


const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginTop: theme.spacing(3),
}));


interface ComponentProps {
    billioner: {
        img: string,
        title: string,
        description: string[],
    };
    index: number;
}
function PersonCard({ billioner, index }: ComponentProps) {

    const isEvenCard = (index: number) => index % 2 === 0;

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: {
                xs: "column",
                sm: isEvenCard(index) ? 'row' : 'row-reverse'
            }

        }}>
            <Link key={index} to={"/person/" + index}>
                <CardMedia
                    sx={{
                        height: '300px',
                        width: '300px',

                        [`@media (max-width: 600px)`]: {
                            height: '300px',
                            width: '100%',
                        }
                    }}

                    component="img"
                    alt={billioner.title}
                    image={billioner.img}
                />

            </Link>
            <Box>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        textAlign="center" // Выравнивание заголовка по центру  
                    >
                        {billioner.title}

                    </Typography>
                    {billioner.description.map((item, ind) => (
                        <StyledTypography key={ind} 
                            variant="body2"
                            fontSize="16px"
                            >
                            {item}
                        </StyledTypography>
                    ))
                    }
                </CardContent>
                <CardActions sx={{
                    justifyContent: isEvenCard(index) ? 'flex-end' : 'flex-start',
                }} >
                    <Link to={"/person/" + index}>
                        <Button size="small">Подробнее</Button>
                    </Link>

                </CardActions>
            </Box>
        </Card>
    )
}
export default PersonCard; 
