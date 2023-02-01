import { Link } from 'react-router-dom';
import * as C from './App.styles';
import Page from './components/Page';
import { MainRouters } from './routers/MainRouters';

const App = ()=>{
  return (
    <C.Container>
      <Page/>
      <C.Header>
        <Link to="/albums" style={{textDecoration: "none"}}>
            <C.LogoWrapper>
              <h1>Galeria de Fotos</h1>
            </C.LogoWrapper>
        </Link>
      </C.Header>
        <C.Main>
          <MainRouters/>
        </C.Main>
      <C.Footer>
        Desenvolvido por Daniel Firme - Todos os direitos reservados.
      </C.Footer>
    </C.Container>
  );
}

export default App;
