import Table from './Table';
import Swal from 'sweetalert2';
import { itemData } from '../data.js';
import { useState } from 'react';

const InventoryList = () => {
  const [data, setData] = useState(itemData);
  const [search, setSearch] = useState('');

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Data ini akan dihapus!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
    }).then((result) => {
      if (result.isConfirmed) {
        setData(data.filter((mhs) => mhs.id !== id));
        itemData.splice(
          itemData.findIndex((item) => item.id === id),
          1,
        );
        Swal.fire({
          title: 'Berhasil!',
          text: 'Data telah dihapus.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleSearch = () => {
    if (search === '') {
      setData(itemData);
    } else {
      setData(
        itemData.filter((item) => {
          return (
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase()) ||
            item.stock.toString().includes(search) ||
            item.price.toString().includes(search)
          );
        }),
      );
    }
  };

  return (
    <div className="flex-grow bg-neutral-100 px-4">
      <div className="my-8 max-w-full rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Daftar Barang</h1>
        </div>
        <input
          type="text"
          placeholder="Cari barang..."
          className="rounded-lg border border-gray-200 p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleSearch}
        />
        <Table data={data} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default InventoryList;
