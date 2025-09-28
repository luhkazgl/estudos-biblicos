import React from 'react';

interface UpdateBannerProps {
  date: string;
  message: string;
}

const UpdateBanner: React.FC<UpdateBannerProps> = ({ date, message }) => {
  return (
    <div className="w-full bg-white/10 backdrop-blur-sm border-b border-white/10 py-2 px-4 flex flex-col items-center mb-4 rounded-xl">
      <p className="text-slate-200 text-xs flex items-center gap-1">
        Última atualização: <span className="font-medium">{date}</span>
      </p>
      {message && (
        <p
          className="text-slate-300 text-[11px] italic mt-0.5 max-w-full truncate"
          title={message}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default UpdateBanner;