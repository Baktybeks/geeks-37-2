import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Counter from './pages/counter/Counter';
import TodoPage from './pages/todoPage/TodoPage';
import Form from './pages/form/Form';
import FormDz from './pages/formDz/FormDz';
import Fetch from './pages/fetch/Fetch';
import FormAxios from './pages/formAxios/FormAxios';
import PokemonPage from './pages/pokemonPage/PokemonPage';


function App() {
    const links = [
        'Home', 'Home', 'About us', 'Contacts'
    ];
    return (
        <div className="App">
            {/*<Header links={links}/>*/}
            {/*<Counter/>*/}
            {/*<Main/>*/}
            {/*<TodoPage/>*/}
            {/*<Form/>*/}
            {/*<FormDz/>*/}
            {/*<Fetch/>*/}
            {/*<FormAxios/>*/}
            <PokemonPage/>
            {/*<Header links={links}/>*/}
        </div>
    );
}


export default App;

