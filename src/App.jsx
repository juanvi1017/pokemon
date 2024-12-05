import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminPage from './AdminPage';

const Landing = React.lazy(() => import('./pages/Landing'));
const Pokemon = React.lazy(() => import('./pages/Pokemon'));
const PokemonV2 = React.lazy(() => import('./pages/PokemonV2'));
const Error = React.lazy(() => import('./component/Error/Error'));

function App() {

  return (
    <Router basename='/'>
      <Routes >
        <Route path='/*' element={(
          <AdminPage>
            <React.Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/pokemonv2" element={<PokemonV2 />} />
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </React.Suspense>
          </AdminPage>
        )}>
        </Route>
      </Routes >
    </Router >
  )
}

export default App
