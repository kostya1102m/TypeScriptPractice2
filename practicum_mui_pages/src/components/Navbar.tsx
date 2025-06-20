import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer'
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';


const NewNavbarStyle = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.text.primary, // Черный текст
    '&.active': {
        fontWeight: 'bold', // Жирный шрифт для активного пункта
        backgroundColor: 'lightgrey',
        '&:hover': {
            backgroundColor: 'lightgrey',
        },
    },
    '&:hover': {
        backgroundColor: theme.palette.grey[200], // Исправлено: lightdark → grey[200]
    },
}));


interface ComponentProps {
    active: string;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
}));

function Navbar({ active }: ComponentProps) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Тень
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)', // Четкая граница
                bgcolor: 'transparent',
                mb: '10px',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h5" sx={{ color: 'text.primary' }}>
                        Самые богатые люди
                    </Typography>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            ml: 2,
                            marginLeft: '100px',
                        }}
                    >
                        <Link 
                            to="/"
                            style ={{ textDecoration: 'none' }}

                        >
                            <Button
                                variant="text"
                                color="info"
                                size="medium"
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: active === '1' ? 'bold' : 'normal',
                                    px: 2,
                                }}
                            >
                                Главная
                            </Button>
                        </Link>

                        <Link 
                            to="/list"
                            style ={{ textDecoration: 'none' }}
                        >
                            <Button
                                variant="text"
                                color="info"
                                size="medium"
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: active === '2' ? 'bold' : 'normal',
                                    px: 2,
                                }}
                            >
                                Список миллиардеров
                            </Button>
                        </Link>
                        <Link 
                            to="/chart"
                            style ={{ textDecoration: 'none' }}
                        >
                            <Button
                                variant="text"
                                color="info"
                                size="medium"
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: active === '3' ? 'bold' : 'normal',
                                    px: 2,
                                }}
                            >
                                Диаграммы
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}>
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon sx={{ color: 'text.primary' }} />
                                    </IconButton>
                                </Box>
                                <Link 
                                    to="/"
                                    style ={{ textDecoration: 'none' }}
                                >
                                    <NewNavbarStyle
                                        className={active == "1" ? "active" : ""}
                                    >
                                        Главная
                                    </NewNavbarStyle>
                                </Link>
                                <Link 
                                    to="/list"
                                    style ={{ textDecoration: 'none' }}
                                >
                                    <NewNavbarStyle
                                        className={active == "2" ? "active" : ""}
                                    >
                                        Список миллиардеров
                                    </NewNavbarStyle>
                                </Link>
                                <Link 
                                    to="/chart"
                                    style ={{ textDecoration: 'none' }}
                                >
                                    <NewNavbarStyle
                                        className={active == "3" ? "active" : ""}
                                    >
                                        Диаграммы
                                    </NewNavbarStyle>
                                </Link>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;