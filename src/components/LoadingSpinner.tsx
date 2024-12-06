import type { FC } from 'react';

const LoadingSpinner: FC = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
  </div>
);

export default LoadingSpinner; 