
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Job } from '@/data/jobs';
import { MapPin, Briefcase, Clock } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface JobDetailProps {
  job: Job | null;
}

const JobDetail: React.FC<JobDetailProps> = ({ job }) => {
  if (!job) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500 text-lg">Select a job to view details</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-none p-6 border-b">
        <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
        <div className="flex flex-col gap-2 mb-4">
          <div className="text-lg">{job.company}</div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            {job.location}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
            <Briefcase className="w-4 h-4 mr-2" />
            {job.type}
          </div>
          {job.payRate && (
            <div className="flex items-center text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
              ${job.payRate}
            </div>
          )}
          <div className="flex items-center text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 mr-2" />
            Posted {job.postedDays} ago
          </div>
        </div>
      </div>
      
      <ScrollArea className="flex-grow p-6">
        <div>
          <div className="mb-5">
            <h3 className="text-lg font-semibold mb-3">Qualifications</h3>
            <div className="flex flex-wrap gap-2">
              {job.qualifications.map((qualification, index) => (
                <Badge key={index} variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-100">
                  {qualification}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="mb-5">
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <div className="text-gray-700 whitespace-pre-line">
              {job.description}
            </div>
          </div>
        </div>
      </ScrollArea>
      
      <div className="flex-none p-6 border-t">
        <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
          {job.quickApply ? "Quick Apply" : "Apply Now"}
        </Button>
      </div>
    </div>
  );
};

export default JobDetail;
