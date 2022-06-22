import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PostContextProvider from './contexts/PostContext';

function App() {

  return (
    <div className="App">
      <PostContextProvider>
        <Header/>
        {/* main */}
        <Main />
      </PostContextProvider>
    </div>
  );
}

export default App;
