import React, {FC} from 'react';
import AppBarExt from "../appBar/AppBarExt";
import {ToolbarExt} from "../toolbar/ToolbarExt";
import {ToolbarMenu} from "../toolbarMenu/ToolbarMenu";

export interface IHeaderProps {
    open: boolean;
    handleDrawerOpen: () => void;
}

export const Header:FC<IHeaderProps> = ({handleDrawerOpen, open}) => {

    const [desktopAnchorEl, setDesktopAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const desktopMenuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isDesktopMenuOpen = Boolean(desktopAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setDesktopAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleDesktopMenuClose = () => {
        setDesktopAnchorEl(null);
        handleMobileMenuClose();
    };

    return (
        <>
            <AppBarExt handleDrawerOpen={handleDrawerOpen} open={open}>
                <ToolbarExt
                    handleDrawerOpen={handleDrawerOpen}
                    open={open}
                    desktopMenuId={desktopMenuId}
                    handleMobileMenuOpen={handleMobileMenuOpen}
                    handleProfileMenuOpen={handleProfileMenuOpen}
                    mobileMenuId={mobileMenuId}/>
            </AppBarExt>
            <ToolbarMenu
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                desktopAnchorEl={desktopAnchorEl}
                mobileMenuId={mobileMenuId}
                desktopMenuId={desktopMenuId}
                isMobileMenuOpen={isMobileMenuOpen}
                isDesktopMenuOpen={isDesktopMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
                handleDesktopMenuClose={handleDesktopMenuClose}
                handleProfileMenuOpen={handleProfileMenuOpen}
            />
        </>
    );
};
