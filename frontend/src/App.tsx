import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from 'components/Navbar';
import { MovieProvider } from 'components/context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/form/:movieId" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;