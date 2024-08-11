import React, { useMemo } from "react"
import { LayoutBaseDePagina } from "../../shared/layouts"
import { FerramentasDaListagem } from "../../shared/components"
import { useSearchParams } from "react-router-dom"


export const ListagemDeCidades: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  return (
    <LayoutBaseDePagina children={undefined}
      titulo={"Listagem de cidades"}
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputDeBusca
          textoDaBusca={busca}
          textoBotaoNovo='Nova Cidade'
          aoMudarTextoDaBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
        />
      }
    >

    </LayoutBaseDePagina>
  )
};