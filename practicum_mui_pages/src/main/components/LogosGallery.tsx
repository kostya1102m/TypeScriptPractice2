import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import structures from "../../data";
const logoData = [structures[6], structures[7], structures[8], structures[9]];

function LogosGallery() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 3 }}>
        <Grid container spacing={4}>
          {logoData.map((item) => (
            <Grid key={item.img} size={{ xs: 12, md: 3 }}>
              <Box sx={{ m: 2, textAlign: 'center' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '50%',
                    height: 'auto',
                    borderRadius: '50%',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '8px',
                  }}
                  loading="lazy"
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default LogosGallery;