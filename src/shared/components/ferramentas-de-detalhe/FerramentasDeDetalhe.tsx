import { useTheme, Box, Paper, Button, Icon, Divider, Skeleton, Typography, useMediaQuery, Theme } from "@mui/material"
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

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

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
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}>
            Salvar
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoSalvarEFechar &&
        !mostrarBotaoSalvarEFecharCarregando &&
        !smDown && !mdDown) && (
          <Button
            variant="outlined"
            color="primary"
            disableElevation
            onClick={aoClicarEmSalvarEFechar}
            startIcon={<Icon>save</Icon>}>
            <Typography
              variant="button"
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}>
              Salvar e fechar
            </Typography>
          </Button>
        )}

      {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
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
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}>
            Apagar
          </Typography>
        </Button>
      )}

      {mostrarBotaoApagarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoNovo &&
        !mostrarBotaoNovoCarregando &&
        !smDown) && (
          // O botão Novo é exibido apenas em telas maiores que smDown e mdDown
          // Isso é feito para economizar espaço em telas menores
          <Button
            variant="outlined"
            color="primary"
            disableElevation
            onClick={aoClicarEmNovo}
            startIcon={<Icon>add</Icon>}>
            <Typography
              variant="button"
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}>
              {textoBotaoNovo}
            </Typography>
          </Button>
        )}

      {(mostrarBotaoNovoCarregando && !smDown) && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoVoltar &&
        (mostrarBotaoNovo || mostrarBotaoApagar
          || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)) && (
          <Divider variant="middle" orientation="vertical" />
        )}

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}>
          <Typography
            variant="button"
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            overflow={"hidden"}>
            Voltar
          </Typography>
        </Button>
      )}

      {mostrarBotaoVoltarCarregando && (
        <Skeleton width={110} height={60} />
      )}
    </Box>
  )
}