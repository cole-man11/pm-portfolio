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
    { path: '/case-studies', label: 'My Work' },
    { path: '/projects', label: 'Learning Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/me" className="font-bold text-slate-900 hover:text-primary-600 transition-colors tracking-tight">
            Cole Lance
          </Link>
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
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
