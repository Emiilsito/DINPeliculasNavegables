import Nav from './Nav';

function Header({ siteTitle = 'Peliculas' }) {
  return (
    <header className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
        <div className="text-lg font-semibold">{siteTitle}</div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
