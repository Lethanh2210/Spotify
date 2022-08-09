import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {mainListItems, secondaryListItems} from "./listItem";
import Player from "../home/AudioPlayer";
// import 'bootstrap/dist/css/bootstrap.css';
import BasicMenu from "./userButton";
import Spotify from "../../public/Spotify.png"
import Image from 'next/image'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../styles/Dashboard.css'



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

// const Item = styled(Paper)(({theme}) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function DashboardContent(props) {
    const [open, setOpen] = React.useState(false);
    // const [song, setSong] = useState(DataSongs);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open1 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };

    // const handleSetSong = (idSong) => {
    //     const song = DataSongs.filter(song => song.id === idSong);
    //     if (song === []) {
    //         setSong(DataSongs[0]);
    //     } else {
    //         setSong(song)
    //     }
    // }

    return (
        // <Songs.Provider value={{DataSongs, song, handleSetSong}}>
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="absolute" open={open}>
                        <Toolbar
                            sx={{
                                pr: '24px',
                            }}
                            style={{ backgroundColor: "black"}}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: '36px',
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 100 }}
                            >
                                <div>
                                    {/*<i className="fa fa-spotify" style={{fontSize:'25px',color:'green'}}>Logo</i>*/}
                                    <Image src={Spotify} alt="1111" width={120} height={30}/>
                                    {/*<span style={{margin: "25px", fontSize: "25px",height: '40px', maxWidth: '131px',width: '100%'}}>Spotify</span>*/}
                                </div>
                            </Typography>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <div style={{color: '#b3b3b3', backgroundColor: "black"}}>
                        <Drawer variant="permanent" open={open} style={{zIndex:0}} className="toolbar"  >
                            <Toolbar
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    px: [1],
                                    backgroundColor: 'black',
                                }}
                            >
                                <BasicMenu/>
                                    <IconButton onClick={toggleDrawer} className="itemSet">
                                        <ChevronLeftIcon />
                                    </IconButton>
                            </Toolbar>

                            {/*<Divider />*/}
                            <List component="nav" style={{color: '#b3b3b3', backgroundColor: "black"}}>
                                {mainListItems}
                                {secondaryListItems}
                            </List>
                            {/*<Divider sx={{ my: 1 }} />*/}
                            {/*<Divider/>*/}
                            {/*<hr/>*/}
                        </Drawer>
                    </div>
                        <Box
                            component="main"
                            sx={{
                                backgroundColor: (theme) =>
                                    theme.palette.mode === '#123131'
                                        ? theme.palette.grey[900]
                                        : theme.palette.grey[900],
                                flexGrow: 1,
                                height: '100vh',
                                overflow: 'auto',
                            }}
                        >
                            <Toolbar />
                            <Container maxWidth="lg" sx={{ mt: 1, mb: 4 }}>

                                {/*<CustomizedTables />*/}
                                {props.children}

                            </Container>
                        </Box>
                    <Player />
                </Box>
            </ThemeProvider>
        // </Songs.Provider>
    );
}

export default  DashboardContent;
