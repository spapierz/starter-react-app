import React, { Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import JobProvider from './context/JobContext';
import './styles/spinner.css';

const LazyGalleryView = lazy(() => import('./views/GalleryView'));
const LazyDetailsView = lazy(() => import('./views/DetailsView'));
const LazyPageNotFound = lazy(() => import('./views/PageNotFoundView'));

const App: React.FC = () => (
  <Router>
    <JobProvider>
      <Suspense fallback={<div className='spinner'><CircularProgress /></div>}>
        <Routes>
          <Route path="/" element={<LazyGalleryView />} />
          <Route path="/job-description" element={<LazyDetailsView />} />
          <Route path="*" element={<LazyPageNotFound />} />
        </Routes>
      </Suspense>
    </JobProvider>
  </Router>
);

export default App;
