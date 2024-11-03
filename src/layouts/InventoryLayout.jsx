import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PropTypes from 'prop-types';

const InventoryLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-row">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
};

InventoryLayout.propTypes = {
  children: PropTypes.node,
};

export default InventoryLayout;
