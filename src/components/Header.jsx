import Button from './ui/Button';

const Header = () => {
  return (
    <header className="flex justify-end bg-white p-4">
      <Button
        className={`bg-red-500 text-white hover:bg-red-600 focus:ring-red-400`}
      >
        Logout
      </Button>
    </header>
  );
};

export default Header;
