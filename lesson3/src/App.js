import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';


function App() {
    const links = [
        'Home','Home', 'About us', 'Contacts'
    ]
    return (
        <div className="App">
            <Header links={links}/>
            <Main/>
            <Header links={links}/>
        </div>
    );
}


export default App;

