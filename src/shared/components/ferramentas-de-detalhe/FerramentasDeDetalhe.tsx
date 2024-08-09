import { useTheme, Box, Paper, Button, Icon, Divider, Skeleton } from "@mui/material"
import React from "react";

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoVoltar?: boolean;

  mostrarBotaoSalvarCarregando?: boolean,
  mostrarBotaoSalvarEFecharCarregando?: boolean,
  mostrarBotaoApagarCarregando?: boolean,
  mostrarBotaoNovoCarregando?: boolean,
  mostrarBotaoVoltarCarregando?: boolean,

  aoClicarEmNovo?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmVoltar?: () => void;
}


export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = "Novo",
  mostrarBotaoNovo = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,
  mostrarBotaoApagar = true,
  mostrarBotaoVoltar = true,

  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,


  aoClicarEmNovo,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
  aoClicarEmApagar,
  aoClicarEmVoltar

}) => {

  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}>

      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}>
          Salvar
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando) && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>}>
          Salvar e voltar
        </Button>
      )}

      {mostrarBotaoSalvarEFecharCarregando && (
        <Skeleton width={180} height={60} />
      )}
      {/* 
         o Skeleton é um componente do Material-UI que exibe um esqueleto 
         de um componente enquanto ele está carregando.
      */}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}>
          Apagar
        </Button>
      )}

      {mostrarBotaoApagarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoNovo && !mostrarBotaoNovo) && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}>
          {textoBotaoNovo}
        </Button>
      )}

      {mostrarBotaoNovoCarregando && (
        <Skeleton width={110} height={60} />
      )}

      <Divider variant="middle" orientation="vertical" />

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}>
          Voltar
        </Button>
      )}

      {mostrarBotaoVoltarCarregando && (
        <Skeleton width={110} height={60} />
      )}
    </Box>
  )
}