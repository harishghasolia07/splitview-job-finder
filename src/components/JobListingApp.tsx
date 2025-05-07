import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JobDetail from './JobDetail';
import SearchBar from './SearchBar';
import { Button } from '@/components/ui/button';
import { jobsData, Job } from '@/data/jobs';
import { useIsMobile } from '@/hooks/use-mobile';

const JobListingApp: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(jobsData);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (jobs.length > 0 && !selectedJob) {
      setSelectedJob(jobs[0]);
    }
  }, [jobs, selectedJob]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setJobs(jobsData);
      return;
    }
    
    const lowercasedQuery = query.toLowerCase();
    const filteredJobs = jobsData.filter(job => 
      job.title.toLowerCase().includes(lowercasedQuery) || 
      job.company.toLowerCase().includes(lowercasedQuery) ||
      job.location.toLowerCase().includes(lowercasedQuery)
    );
    
    setJobs(filteredJobs);
    
    if (filteredJobs.length > 0) {
      setSelectedJob(filteredJobs[0]);
    } else {
      setSelectedJob(null);
    }
  };

  // For mobile view, we show either the list or the detail view
  const [showDetailView, setShowDetailView] = useState(false);
  
  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
    if (isMobile) {
      setShowDetailView(true);
    }
  };

  const handleBackToList = () => {
    setShowDetailView(false);
  };

  if (isMobile) {
    return (
      <div className="h-full flex flex-col">
        {!showDetailView ? (
          <div className="flex flex-col h-full">
            <div className="p-4 bg-white sticky top-0 z-10">
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
              {jobs.length > 0 ? (
                jobs.map(job => (
                  <JobCard
                    key={job.id}
                    job={job}
                    isSelected={selectedJob?.id === job.id}
                    onClick={() => handleJobSelect(job)}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No jobs match your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <Button 
              onClick={handleBackToList} 
              variant="ghost" 
              className="p-2 m-2 self-start"
            >
              ← Back to list
            </Button>
            <div className="flex-grow">
              <JobDetail job={selectedJob} />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex h-full">
      {/* Left panel - Job list */}
      <div className="w-2/5 border-r overflow-hidden flex flex-col">
        <div className="p-4 bg-white sticky top-0 z-10">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
          {jobs.length > 0 ? (
            jobs.map(job => (
              <JobCard
                key={job.id}
                job={job}
                isSelected={selectedJob?.id === job.id}
                onClick={() => handleJobSelect(job)}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No jobs match your search criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Right panel - Job details */}
      <div className="w-3/5 overflow-hidden">
        <JobDetail job={selectedJob} />
      </div>
    </div>
  );
};

export default JobListingApp;
