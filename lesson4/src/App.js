import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Counter from './pages/counter/Counter';


function App() {
    const links = [
        'Home','Home', 'About us', 'Contacts'
    ]
    return (
        <div className="App">
            <Header links={links}/>
            <Counter/>
            {/*<Main/>*/}
            <Header links={links}/>
        </div>
    );
}


export default App;

