
import './App.css';
import Page from './searchPage/page'
import './style.css'
import data from './data.json'
import { ButtonProvider } from './component/contextButton';
import FormReact from './searchPage/formReact'
function App() {
  return (
    <ButtonProvider>
      {/* <Page data = {data}/> */}
      <FormReact/>
    </ButtonProvider>
  );
}

export default App;
