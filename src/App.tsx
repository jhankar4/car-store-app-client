
import './App.css'
import AdminLayout from './components/layout/AdminLayout';
import MainLayout from './components/layout/MainLayout'
import { useCurrentUser } from './redux/features/auth/authSlice';
import { useAppSelector } from './redux/hook';
import { TUser } from './utils/Type';

function App() {
  const user = useAppSelector(useCurrentUser) as TUser;
  return user?.role === 'admin' ? <AdminLayout /> : <MainLayout />
}

export default App
