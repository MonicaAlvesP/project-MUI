import React, { ReactNode } from 'react';
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { Box } from '@mui/system';

import { useAppThemeContext, useDrawerContext } from '../../contexts';

interface IListItemLinkProps {
  to: string;
  label: string;
  icon: string;
  onClick?: () => void;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {

  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false })

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

interface MenuLateralProps {
  children: ReactNode;
}


export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
        <Box
          width={theme.spacing(28)}
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems='center'
            justifyContent="center">
            <Avatar sx={{
              width: theme.spacing(12),
              height: theme.spacing(12),
            }} alt="foto de perfil pessoal" src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_1280.jpg" />
          </Box>

          <Divider />

          <Box flex="1">
            <List component="nav">
              {drawerOptions?.map(drawerOptions => (
                <ListItemLink
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  label={drawerOptions.label}
                  to={drawerOptions.path}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Modo Dark" />
              </ListItemButton>
            </List>
          </Box>


        </Box>
      </Drawer >
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
