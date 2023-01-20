import './App.css';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import { DataContextProvider } from './DataContext/DataContext';
function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Header/>
        <MainContent/>
      </DataContextProvider>
    </div>
  );
}

export default App;
