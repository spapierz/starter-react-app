import { useContext } from 'react';
import { Grid } from '@mui/material';
import JobCard from '../components/JobCard';
import { JobContext } from '../context/JobContext';

const GalleryView = () => {
  const { jobs } = useContext(JobContext);

  return (
    <Grid container spacing={2}>
      { jobs && jobs.map(job => (
        <Grid item sm={3} key={job.id}>
          <JobCard title={job.title} locationName={job.location?.name} />
        </Grid>
      ))}
    </Grid>
  )
};

export default GalleryView;