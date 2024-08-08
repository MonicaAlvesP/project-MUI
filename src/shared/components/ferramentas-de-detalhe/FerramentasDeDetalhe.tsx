import { useTheme, Box, Paper, Button, Icon, Divider } from "@mui/material"
import React from "react"


export const FerramentasDeDetalhe: React.FC = () => {

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
      component={Paper}
    >
      Ferramentas de detalhe

      <Button
        variant="contained"
        color="primary"
        disableElevation
        startIcon={<Icon>save</Icon>}>
        Salvar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>save</Icon>}>
        Salvar e voltar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>delete</Icon>}>
        Apagar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>add</Icon>}>
        Novo
      </Button>

      <Divider variant="middle" orientation="vertical" />

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        startIcon={<Icon>arrow_back</Icon>}>
        Voltar
      </Button>
    </Box>
  )
}