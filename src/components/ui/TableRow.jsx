import { Link } from 'react-router-dom';
import Button from './Button';
import PropTypes from 'prop-types';

const TableRow = ({ item, index, onDelete }) => {
  return (
    <tr>
      <td className="border-b border-gray-200 px-4 py-2">{index}</td>
      <td className="border-b border-gray-200 px-4 py-2">{item.name}</td>
      <td className="border-b border-gray-200 px-4 py-2">{item.category}</td>
      <td className="border-b border-gray-200 px-4 py-2">{item.stock}</td>
      <td className="border-b border-gray-200 px-4 py-2">{item.price}</td>
      <td className="border-b border-gray-200 px-4 py-2 flex gap-x-2">
        <Link
          className="cursor-pointer rounded px-4 py-2 text-sm font-bold focus:outline-none focus:ring-4 bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400"
          to={`/inventory/${item.id}`}
        >
          Lihat
        </Link>
        <Button
          className="bg-red-500 text-white hover:bg-red-600 focus:ring-red-400"
          onClick={() => onDelete(item.id)}
        >
          Hapus
        </Button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TableRow;
