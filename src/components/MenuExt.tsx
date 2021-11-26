import React, {FC} from 'react';
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from '@mui/material/Menu';

export interface IMenuProps {
    mobileMoreAnchorEl: HTMLElement | null;
    desktopAnchorEl: HTMLElement | null;
    mobileMenuId: string;
    desktopMenuId: string;
    isMobileMenuOpen: boolean;
    isDesktopMenuOpen: boolean;
    handleMobileMenuClose: () => void;
    handleDesktopMenuClose: () => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const MenuExt:FC<IMenuProps> = (
    {
        mobileMoreAnchorEl,
        mobileMenuId,
        isMobileMenuOpen,
        handleMobileMenuClose,
        desktopAnchorEl,
        desktopMenuId,
        isDesktopMenuOpen,
        handleDesktopMenuClose,
        handleProfileMenuOpen
    }) => {

    const mobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const desktopMenu = (
        <Menu
            anchorEl={desktopAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={desktopMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isDesktopMenuOpen}
            onClose={handleDesktopMenuClose}
        >
            <MenuItem onClick={handleDesktopMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleDesktopMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <>
            {mobileMenu}
            {desktopMenu}
        </>
    );
};