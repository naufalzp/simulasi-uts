import { itemData } from '../data.js';

const Dashboard = () => {
  const totalProducts = itemData.length;
  const totalStock = itemData.reduce((acc, item) => acc + item.stock, 0);
  const totalCategories = [...new Set(itemData.map((item) => item.category))]
    .length;

  return (
    <div className="p-6 bg-neutral-100 flex-grow">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-2 text-lg font-semibold">Total Produk</h2>
          <p className="text-4xl font-bold text-blue-500">{totalProducts}</p>
          <p className="mt-1 text-sm text-gray-500">
            Total produk yang tersedia
          </p>
        </div>

        <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-2 text-lg font-semibold">Total Kategori</h2>
          <p className="text-4xl font-bold text-green-500">{totalCategories}</p>
          <p className="mt-1 text-sm text-gray-500">
            Kategori produk yang tersedia
          </p>
        </div>

        <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-2 text-lg font-semibold">Total Stok</h2>
          <p className="text-4xl font-bold text-purple-500">{totalStock}</p>
          <p className="mt-1 text-sm text-gray-500">
            Total stok produk yang tersedia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
