
import React from 'react';
import { Star, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Job } from '@/data/jobs';

interface JobCardProps {
  job: Job;
  isSelected: boolean;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-4 border rounded-lg mb-3 cursor-pointer transition-all",
        isSelected 
          ? "border-job-border bg-job-highlight shadow-sm" 
          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
      )}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-lg text-left">{job.title}</h3>
        <span className="text-sm text-gray-500">{job.postedDays}</span>
      </div>
      
      <div className="text-left text-gray-700 mt-1">{job.company}</div>
      <div className="text-left text-gray-600 text-sm mt-1">{job.location}</div>
      
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center space-x-2">
          {job.payRate && (
            <span className="text-sm font-medium text-gray-800">{job.payRate}</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <span className={cn(
            "text-xs rounded-full px-2 py-1",
            job.quickApply 
              ? "bg-blue-100 text-blue-800" 
              : "bg-gray-100 text-gray-800"
          )}>
            {job.quickApply ? "Quick Apply" : "Apply Now"}
          </span>
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span>{job.rating || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
