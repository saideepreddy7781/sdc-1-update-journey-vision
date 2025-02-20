import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-dark-primary text-gray-100">
      <div className="fixed inset-0 bg-[url('./components/background.jpg')] bg-cover bg-center opacity-5 pointer-events-none"></div>
      <Navbar />
      <div className="relative">
        <Home />
      </div>
    </div>
  );
}

export default App;