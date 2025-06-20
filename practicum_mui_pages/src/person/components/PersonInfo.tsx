import structures from "../../data";

import Container from '@mui/material/Container';
import { Breadcrumbs, CardMedia, Card, Grid, Typography, Box, CardContent } from "@mui/material";
import { styled } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useParams, Link } from "react-router-dom";

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: "justify",
}));

function Person() {
    const { id }: any = useParams();
    const billioner = structures[id];
    return (
        <Container maxWidth="xl">
            <Breadcrumbs
                aria-label="breadcrumb"
                separator={<NavigateNextIcon fontSize="small" />}
                sx={{
                    mt: '28px', mb: '28px'
                }}
            >
                <Link
                    to="/"
                    style={{ textDecoration: 'none' }}
                >
                    <StyledTypography>
                        Главная
                    </StyledTypography>
                </Link>
                <StyledTypography
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    {billioner.title}
                </StyledTypography>
            </Breadcrumbs>
            <Grid container spacing={{ xs: 3, md: 6 }}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    borderRadius: 2,
                    marginTop: 2
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        p: 2
                    }}>

                    </Box>

                    <CardContent>
                        <StyledTypography gutterBottom variant="h5" sx={{ textAlign: "center" }}>
                            {billioner.title}
                        </StyledTypography>


                    </CardContent>
                    <CardMedia
                        component="img"
                        alt={billioner.title}
                        image={billioner.img}
                        sx={{
                            width: 'auto',
                            maxWidth: '100%',
                            maxHeight: '450px',
                            objectFit: 'contain',
                            borderRadius: '10px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                            marginBottom: '20px'
                        }}
                    />

                    <CardContent>
                        <Grid container spacing={2}>
                            {billioner.description.map((item, ind) => (
                                <Grid size={{ xs: 12, md: 12 }} key={ind}>
                                    <StyledTypography 
                                        variant="body2"
                                        sx={{
                                            margin: '0 auto',
                                            marginBottom: '10px',
                                            textAlign: "center"
                                        }}
                                        >
                                        {item}
                                    </StyledTypography>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>

                </Card>
            </Grid>
        </Container>
    );
}

export default Person;