import React, { ReactNode } from "react";
import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Icon,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../contexts/DrawerContext";

interface MenuLateralProps {
  children: ReactNode;
}

export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

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
            <List component={"nav"}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                  <ListItemText primary="Pagina Inicial" />
                </ListItemIcon>
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
