import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  );
}

export default App;
