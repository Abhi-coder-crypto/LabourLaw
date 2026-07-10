import { Link, NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Briefcase, FileText, LogOut, ExternalLink } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useNavigate } from 'react-router-dom';

const PP = 'Poppins, sans-serif';

const navItems = [
  { to: '/admin/home', label: 'Home', icon: LayoutDashboard },
  { to: '/admin/services', label: 'Services', icon: Briefcase },
  { to: '/admin/careers', label: 'Careers', icon: FileText },
];

export default function AdminLayout() {
  const { username, logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen flex" style={{ fontFamily: PP, backgroundColor: '#f8fafb' }}>
      {/* Sidebar */}
      <aside className="w-64 shrink-0 flex flex-col border-r border-gray-100 bg-white">
        <div className="px-6 py-6 border-b border-gray-100">
          <p className="font-bold text-sm" style={{ color: '#a83a00' }}>Maru Consultancy</p>
          <p className="text-xs text-gray-400 mt-0.5">Admin Panel</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
                }`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#a83a00' : 'transparent',
              })}
            >
              <item.icon size={16} />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="px-3 py-4 border-t border-gray-100 space-y-1">
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <ExternalLink size={16} /> View Site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
        {username && (
          <div className="px-6 py-3 border-t border-gray-100 text-xs text-gray-400">
            Signed in as <span className="font-semibold text-gray-600">{username}</span>
          </div>
        )}
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
