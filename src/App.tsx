
import './App.css'
import AdminLayout from './components/layout/AdminLayout';
import MainLayout from './components/layout/MainLayout'
import { useCurrentUser } from './redux/features/auth/authSlice';
import { useAppSelector } from './redux/hook';
import { TUser } from './utils/Type';

function App() {
  
  const user = useAppSelector(useCurrentUser) as TUser;
  return user?.role === 'admin' ? <AdminLayout /> : <MainLayout />
  // https://web.programming-hero.com/level2-batch-4-frontend-track/video/level2-batch-4-frontend-track-28-1-login-redirect-and-logout
}

export default App
