import './App.css';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import { DataContextProvider } from './DataContext/DataContext';
import { ServiceContextProvider } from './DataContext/Services';
function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Header/>
        <ServiceContextProvider>
        <MainContent/>
        </ServiceContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
