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

function Building() {
    const { id }: any = useParams();
    const building = structures[id];
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
                    {building.title}
                </StyledTypography>
            </Breadcrumbs>
            <Grid container spacing={{ xs: 3, md: 6 }}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    borderRadius: 0,
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
                            {building.title}
                        </StyledTypography>


                    </CardContent>
                    <CardMedia
                        component="img"
                        alt={building.title}
                        image={building.img}
                        sx={{
                            width: 'auto',
                            maxWidth: '100%',
                            maxHeight: '450px',
                            objectFit: 'contain',
                        }}
                    />

                    <CardContent>
                        <Grid container spacing={2}>
                            {building.description.map((item, ind) => (
                                <Grid size={{ xs: 12, md: 6 }} key={ind}>
                                    <StyledTypography variant="body2">
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

export default Building;