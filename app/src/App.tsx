import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import AddQuote from './pages/AddQuote.tsx';
import Quote from './pages/Quote.tsx';
import Recherche from './pages/Recherche.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='addQuote' element={<AddQuote />} />
        <Route path='quote' element={<Quote />} />
        <Route path='recherche' element={<Recherche />} />
        <Route path='*' element={<IndexPage />} />
      </Route>
    </Routes>
  );
}

export default App;
