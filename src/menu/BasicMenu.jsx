import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context";

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const {setIsAuth} = useContext(AuthContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
    };
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
    };

    function logout() {
        setIsAuth(false);
        localStorage.removeItem('auth');
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
                Menu
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

                <Link to={'/posts'} style={linkStyle}><MenuItem onClick={handleClose}>Posts</MenuItem>  </Link>
                <Link to={'/about'} style={linkStyle}><MenuItem onClick={handleClose}>About US</MenuItem></Link>
                <Link to={'/'} style={linkStyle}><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                <Link to={''} style={linkStyle}><MenuItem onClick={logout}>LogOut</MenuItem></Link>

            </Menu>
        </div>
    );
}