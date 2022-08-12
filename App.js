
import './App.css';
import Page from './searchPage/page'
import './style.css'
import data from './data.json'
import { ButtonProvider } from './component/contextButton';
function App() {
  return (
    <ButtonProvider>
      <Page data = {data}/>
    </ButtonProvider>
  );
}

export default App;
