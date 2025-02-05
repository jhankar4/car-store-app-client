
import './App.css'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'

function App() {
  
  return (
    <MainLayout userRole="user">
      <Home />
    </MainLayout>
  )
}

export default App
