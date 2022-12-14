import * as React from 'react';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";

export default function BasicMenu() {
    const [token, setToken] = useState('')
    const [images,setImages] = useState('')
    const [data,setData] = useState({});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)


    }, [token])
    useEffect( () => {

       getUserInfo().then(res => {
           setData(res.data)
           setImages(res.data.images[0].url)
       }).catch(err => {
           console.log(err.message)
       })
    },[token])

    const getUserInfo = async () => {
        return await axios
            .get(
                'https://api.spotify.com/v1/users/31k2umdmuuu55r37iqczqqllklly', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'application/json',
                    },
                });
    }


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        window.location = '/login'
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <h1 style={{color: 'white', }} className="userName">{data.display_name}</h1>
                &nbsp;
                {/*<Image src={data.image[0].url} alt="image" width={30} height={30}/>*/}
                <img aria-hidden="false" draggable="false" loading="eager"
                     src={images}
                     className={"avatar"}
                     alt="?????c Th??nh" />
                </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem href='/login' onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
