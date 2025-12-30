import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <button className='users' onClick={() => navigate('/users')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
