import BarraLateral from "../../conteiner/BarraLateral"
import ListaDeTarefas from "../../conteiner/listaDeTarafas"
import BotaoAdicionar from "../../componentes/BotaoAdicionar"

const Home = () => {
    return(
        <>
            <BarraLateral/>
            <ListaDeTarefas/>
            <BotaoAdicionar/>
        </>
    )
}

export default Home
