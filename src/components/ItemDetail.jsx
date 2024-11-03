import { Link, useParams } from 'react-router-dom';
import { itemData } from '../data.js';

const ItemDetail = () => {
  const { id } = useParams();
  const item = itemData.find((item) => item.id === parseInt(id, 10));

  if (!item) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
          <p className="mb-4 text-2xl font-bold text-red-500">
            Item Tidak Ditemukan
          </p>
          <p className="mb-4 text-gray-600">
            Item dengan ID {id} tidak ditemukan.
          </p>
          <Link
            to={`/inventory`}
            className="mt-6 rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
          >
            Kembali
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow bg-neutral-100 px-4">
      <div className="my-8 max-w-full rounded-lg bg-white p-4 shadow-md">
        <div className="mb-4 flex justify-between">
          <h1 className="text-2xl font-bold">Detail Barang</h1>
          <Link
            to={`/inventory`}
            className="rounded bg-gray-500 px-4 py-2 text-white transition duration-300 hover:bg-gray-600"
          >
            Kembali
          </Link>
        </div>
        <form action="" className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Item Name"
              defaultValue={item.name}
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-400 focus:outline-none"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">
              Kategori
            </label>
            <select
              name="category"
              id="category"
              defaultValue={item.category}
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-400 focus:outline-none"
              disabled
            >
              <option value="elektronik">Elektronik</option>
              <option value="pakaian">Pakaian</option>
              <option value="makanan">Makanan</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-semibold">
              Harga
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Item Price"
              defaultValue={item.price}
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-400 focus:outline-none"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stock" className="block font-semibold">
              Stok
            </label>
            <input
              type="text"
              id="stock"
              name="stock"
              placeholder="Item Stock"
              defaultValue={item.stock}
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-400 focus:outline-none"
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemDetail;
