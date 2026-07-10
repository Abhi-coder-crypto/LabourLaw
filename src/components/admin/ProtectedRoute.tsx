import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { username, loading } = useAdminAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <p className="text-gray-400 text-sm">Loading…</p>
      </div>
    );
  }

  if (!username) return <Navigate to="/admin/login" replace />;

  return <>{children}</>;
}
