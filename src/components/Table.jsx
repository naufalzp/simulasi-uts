import TableRow from './ui/TableRow';
import PropTypes from 'prop-types';

const Table = ({ data, onDelete }) => {
  return (
    <table className="min-w-full border border-gray-200 bg-white text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="border-b border-gray-200 px-4 py-2">No.</th>
          <th className="border-b border-gray-200 px-4 py-2">Nama Barang</th>
          <th className="border-b border-gray-200 px-4 py-2">Kategori</th>
          <th className="border-b border-gray-200 px-4 py-2">Stok</th>
          <th className="border-b border-gray-200 px-4 py-2">Harga</th>
          <th className="border-b border-gray-200 px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={item.id} item={item} index={index + 1} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Table;
