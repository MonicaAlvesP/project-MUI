import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


export const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo="Página Inicial"
      barraDeFerramentas={(
        <FerramentasDeDetalhe />
      )}
    // Aqui é passado o título da página e a barra de ferramentas.
    // O título é exibido no topo da página.
    // A barra de ferramentas é exibida abaixo do título
    // e é um espaço reservado para botões, filtros, etc.
    >
      Testando
    </LayoutBaseDePagina>
  )
}