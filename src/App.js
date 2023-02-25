import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';


function App() {
  return (
    <div className="App scroll-smooth scroll-bar bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;