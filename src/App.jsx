import InventoryLayout from './layouts/InventoryLayout';
import InventoryList from './components/InventoryList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddItem from './components/AddItem';
import ItemDetail from './components/ItemDetail';

const App = () => {
  return (
    <Router>
      <InventoryLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/inventory/add" element={<AddItem />} />
          <Route path="/inventory/:id" element={<ItemDetail />} />
        </Routes>
      </InventoryLayout>
    </Router>
  );
};

export default App;
