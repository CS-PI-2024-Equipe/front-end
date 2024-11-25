import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import PrivateRouter from './components/PrivateRouter';
import RecuperarSenha from './pages/login/recuperar-senha/RecuperarSenha';
import AlterarSenha from './pages/login/alterar-senha/AlterarSenha';
import CadastroUsuario from './pages/cadastro-usuario/CadastroUsuario';
import Category from './pages/category/Category';


function App() {
  return (
    <>
      {/*  <Header/> */}
      <BrowserRouter>
        <Routes>

          <Route element={<PrivateRouter />}>
            <Route path='/'
              element={<DefaultLayout><Home /></DefaultLayout>} />
               <Route path='/category' element={<DefaultLayout><Category /></DefaultLayout>} />
            {/* Outras rotas de acesso restrito */}
          </Route>

          <Route path='/login'
            element={<SimpleLayout><Login /></SimpleLayout>} />
          <Route path='/password-recovery' element={<SimpleLayout><RecuperarSenha /></SimpleLayout>} />
          <Route path='/password-change' element={<SimpleLayout><AlterarSenha /></SimpleLayout>} />
          <Route path='/new-user' element={<SimpleLayout><CadastroUsuario /></SimpleLayout>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
