import Button from './ui/Button';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { itemData } from '../data.js';
import { Link, useNavigate } from 'react-router-dom';

const AddItem = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  const handelSubmit = async () => {
    if (
      items.name === '' ||
      items.category === '' ||
      items.price === '' ||
      items.stock === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Semua kolom harus diisi!',
      });
      return;
    }

    if (isNaN(items.price) || isNaN(items.stock)) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Harga dan stok harus berupa angka!',
      });
      return;
    }

    const stock = parseInt(items.stock);
    const price = parseInt(items.price);

    if (parseInt(items.price) < 0 || parseInt(items.stock) < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Harga dan stok harus bernilai positif!',
      });
      return;
    }

    try {
      const lastId = itemData[itemData.length - 1].id;
      const newItem = {
        id: lastId + 1,
        name: items.name,
        category: items.category,
        stock: stock,
        price: price,
      };

      itemData.push(newItem);
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Data berhasil ditambahkan.',
        showConfirmButton: false,
        timer: 1500,
      });

      setItems({
        name: '',
        category: '',
        price: '',
        stock: '',
      });

      setTimeout(() => {
        navigate('/inventory');
      }, 2000);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <div className="flex-grow bg-neutral-100 px-4">
      <div className="my-8 max-w-full rounded-lg bg-white p-4 shadow-md">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Tambah Barang</h1>
          <Link
            to={`/inventory`}
            className="rounded bg-gray-500 px-4 py-2 text-white transition duration-300 hover:bg-gray-600"
          >
            Kembali
          </Link>
        </div>
        <form action="" className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nama barang..."
              onChange={(e) => setItems({ ...items, name: e.target.value })}
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block">
              Kategori
            </label>
            <select
              name="category"
              id="category"
              onChange={(e) => setItems({ ...items, category: e.target.value })}
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-400 focus:outline-none"
            >
              <option value="">-- Pilih Kategori --</option>
              <option value="elektronik">Elektronik</option>
              <option value="pakaian">Pakaian</option>
              <option value="makanan">Makanan</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block">
              Harga
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Harga barang..."
              onChange={(e) => setItems({ ...items, price: e.target.value })}
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stock" className="block">
              Stok
            </label>
            <input
              type="text"
              id="stock"
              name="stock"
              placeholder="Stok barang..."
              onChange={(e) => setItems({ ...items, stock: e.target.value })}
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-400 focus:outline-none"
            />
          </div>

          <Button
            className={`bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400`}
            type="button"
            onClick={handelSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
