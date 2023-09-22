import React, { Suspense, lazy } from 'react';
import '.styles/spinner';
import { CircularProgress } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import JobProvider from './context/JobContext';

const LazyGalleryView = lazy(() => import('./views/galleryView'));
const LazyDetailsView = lazy(() => import('./views/detailsView'));
const LazyPageNotFound = lazy(() => import('./views/pageNotFoundView'));

const App: React.FC = () => (
  <Router>
    <JobProvider>
      <Suspense fallback={<div className='spinnerStyles'><CircularProgress /></div>}>
        <Routes>
          <Route path="/" element={<LazyGalleryView />} />
          <Route path="/job-description" element={<LazyDetailsView />} />
          <Route path="*" element={<LazyPageNotFound />} />
        </Routes>
      </Suspense>
    </JobProvider>
  </Router>
)

export default App;
