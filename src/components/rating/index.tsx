import { NextPage } from 'next';
import { useMemo, useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarProps {
  count?: number;
  rating: number;
  color?: {
    filled: string;
    unfilled: string;
  };
  onRating: Function;
}

const Stars: NextPage<StarProps> = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState<number>(0);
  const getColor = (idx: number) => {
    if (hoverRating >= idx) {
      return color?.filled;
    } else if (!hoverRating && rating >= idx) {
      return color?.filled;
    }
    return color?.unfilled;
  };
  const starRating: JSX.Element[] = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FaStar key={idx} className="cursor-pointer" style={{ color: getColor(idx) }} onClick={() => onRating(idx)} onMouseEnter={() => setHoverRating(idx)} onMouseLeave={() => setHoverRating(0)} />
      ));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, rating, hoverRating]);
  return (
    <>
      <div className="flex flex-row mt-3 text-2xl w-full items-center justify-center">{starRating}</div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-500 mt-8 text-center">1,745 Total Ratings</p>
      <div className="flex items-center justify-between mt-3">
        <span className="text-xs font-light text-blue-600 dark:text-blue-500">5 star</span>
        <div className="w-2/4 h-2 mx-3 bg-gray-200 rounded dark:bg-gray-300">
          <div className="h-2 bg-yellow-400 rounded" style={{ width: '70%' }}></div>
        </div>
        <span className="text-xs font-medium text-blue-600 dark:text-blue-500">70%</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs font-light text-blue-600 dark:text-blue-500">4 star</span>
        <div className="w-2/4 h-2 mx-3 bg-gray-200 rounded dark:bg-gray-300">
          <div className="h-2 bg-yellow-400 rounded" style={{ width: '17%' }}></div>
        </div>
        <span className="text-xs font-medium text-blue-600 dark:text-blue-500">17%</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs font-light text-blue-600 dark:text-blue-500">3 star</span>
        <div className="w-2/4 h-2 mx-3 bg-gray-200 rounded dark:bg-gray-300">
          <div className="h-2 bg-yellow-400 rounded" style={{ width: '8%' }}></div>
        </div>
        <span className="text-xs font-medium text-blue-600 dark:text-blue-500">8%</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs font-light text-blue-600 dark:text-blue-500">2 star</span>
        <div className="w-2/4 h-2 mx-3 bg-gray-200 rounded dark:bg-gray-300">
          <div className="h-2 bg-yellow-400 rounded" style={{ width: '4%' }}></div>
        </div>
        <span className="text-xs font-medium text-blue-600 dark:text-blue-500">4%</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs font-light text-blue-600 dark:text-blue-500">1 star</span>
        <div className="w-2/4 h-2 mx-3 bg-gray-200 rounded dark:bg-gray-300">
          <div className="h-2 bg-yellow-400 rounded" style={{ width: '1%' }}></div>
        </div>
        <span className="text-xs font-medium text-blue-600 dark:text-blue-500">1%</span>
      </div>
    </>
  );
};

export default Stars;

Stars.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: '#ffa500',
    unfilled: '#C5C5C5',
  },
};
