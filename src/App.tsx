
import './App.css'
import AdminLayout from './components/layout/AdminLayout';
import MainLayout from './components/layout/MainLayout'

function App() {
  
  const user = 'user';
  return (
    user === 'user' ? <MainLayout /> : <AdminLayout />
  )
}

export default App
