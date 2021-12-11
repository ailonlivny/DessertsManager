import { Provider } from 'react-redux';
import DessertForm from './Components/DessertForm/DessertForm';
import DessertsTable from './Components/DessertsTable/DessertsTable';
import PieChart from './Components/PieChart/PieChart';
import Header from './Components/Header/Header';
import {store} from './store/store';

export default function App() {
  return (  
    <Provider store={store}>
      <div className='App'>
        <Header/>
        <DessertForm />
        <DessertsTable />
        <PieChart/>
      </div>
  </Provider>
  );
}