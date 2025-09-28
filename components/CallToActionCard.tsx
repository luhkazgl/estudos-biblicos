import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToActionCard: React.FC<CallToActionCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="mt-8 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg border border-sky-200 p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center">
            {icon || (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
          <p className="text-slate-600 mb-4">{description}</p>
          <Link
            to={buttonLink}
            className="inline-block bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionCard;