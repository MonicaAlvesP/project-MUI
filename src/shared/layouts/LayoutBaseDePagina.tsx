import React, { ReactNode } from "react"
import { Box } from '@mui/system';
import {
  IconButton,
  Icon,
  Typography,
  useTheme,
  useMediaQuery,
  Theme
} from "@mui/material";
import { useDrawerContext } from "../contexts";


interface ILayoutBaseDePaginaProps {
  children: ReactNode;
  titulo: string;
  barraDeFerramentas?: ReactNode;
  // interface é um tipo de dado que define a estrutura de um objeto.
  // ILayoutBaseDePaginaProps é uma interface que define a estrutura dos dados que podem ser passados para o componente LayoutBaseDePagina.
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {
  // useMediaQuery é um hook do Material-UI que permite verificar o tamanho da tela.
  // o smDown é um booleano que indica se a tela é menor ou igual a 600px.
  // o mdDown é um booleano que indica se a tela é menor ou igual a 960px.
  // o theme é um objeto que contém informações sobre o tema do Material-UI.
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  // useDrawerContext é um hook que permite acessar o contexto do Drawer.
  // o toggleDrawerOpen é uma função que permite abrir e fechar o Drawer.
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box display="flex" alignItems="center" padding={1} gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )
          // Aqui é verificado se a tela é menor ou igual a 600px.
          // Caso seja, é exibido um IconButton com o ícone de menu.
          // Quando o IconButton é clicado, a função toggleDrawerOpen é chamada.
        }

        <Typography
          // o whiteSpace e overflow são para que o texto não quebre e nem apareça a barra de rolagem caso o texto seja muito grande.
          // o whiteSpace: nowrap; faz com que o texto não quebre
          // o overflow: hidden; faz com que o texto que ultrapasse o tamanho do elemento seja cortado.
          // o textOverflow: ellipsis; faz com que o texto que ultrapasse o tamanho do elemento seja substituído por reticências.
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas && (
        // colocar a barra de ferramentas dentro de uma Box permite que ela tenha um espaçamento entre ela e o conteúdo principal.
        <Box>
          {barraDeFerramentas}
        </Box>
      )}

      <Box flex={1} overflow="auto"
      // overflow: auto; faz com que a barra de rolagem apareça somente quando necessário.
      // o flex: 1; faz com que o elemento ocupe todo o espaço disponível.
      >
        {/* ESTA PARTE PERMITE SCROLL SOMENTE NO ELEMENTO CHILDREN */}
        {children}
      </Box>
    </Box>
  )
}