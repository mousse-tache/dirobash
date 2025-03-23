import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import IndexPage from './pages/IndexPage';
import AddQuote from './pages/AddQuote.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='/addQuote' element={<AddQuote />} />
      </Route>
    </Routes>
  );
}

export default App;
