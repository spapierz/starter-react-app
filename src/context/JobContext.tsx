import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Job } from '../interfaces/Job';
import axios from 'axios';

interface JobContextType {
  jobs: Job[];
}

interface JobProviderProps {
  children: ReactNode;
}

export const JobContext = createContext<JobContextType>({} as JobContextType);

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobContext must be used within a JobProvider');
  }
  return context;
};

export const JobProvider = ({ children }: JobProviderProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const getJobs = async (): Promise<void> => {
    try {
      const { data: { jobs } } = await axios.get('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs');
      if (jobs.length) {
        setJobs(jobs);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const value: JobContextType = {
    jobs,
  };

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;