import { Card, CardContent, Typography } from '@mui/material';
import { Job } from '../interfaces/Job';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

};

const JobCard: React.FC<Job> = ({ locationName, title }) => (
  <Card sx={cardStyle}>
    <CardContent sx={contentStyle}>
      <Typography variant='subtitle2'>{locationName}</Typography>
      <Typography variant='body1'><strong>{title}</strong></Typography>
    </CardContent>
  </Card>
);

export default JobCard;