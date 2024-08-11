import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import React from "react";

import { Environment } from "../../environment";

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostrarInputDeBusca?: boolean;
  aoMudarTextoDaBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;

}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  mostrarInputDeBusca = false,
  aoMudarTextoDaBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,

}) => {

  const theme = useTheme();

  return (
    <Box
      // ao passar o Paper como componente, o box se torna um paer e assim ele ganha a sombra
      // e cria um efeito de elevação, no caso, a elevação 3
      // em nossas configurações de tema o paper já tem um cor e um espaçamento
      // podemos passar qualquer componente do material ui aqui
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}>


      {mostrarInputDeBusca && (
        <TextField
          size="small"
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
          placeholder={Environment.INPUT_DE_BUSCA}
          InputProps={{
            endAdornment: <Icon>search</Icon>
          }}
        />
      )}

      <Box
        flex={1}
        display="flex"
        justifyContent="end"
      >
        {mostrarBotaoNovo && (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}>
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};