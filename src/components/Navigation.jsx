import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/me') {
      return location.pathname === '/' || location.pathname === '/me';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/me', label: 'Me' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/me" className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              PM Portfolio
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
