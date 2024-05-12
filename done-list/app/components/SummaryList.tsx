import { Summary } from './../types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
interface SummaryListProps {
  summaries: Summary[];
  deleteSummary: Function;
}

export default function SummaryList({
  summaries,
  deleteSummary,
}: SummaryListProps) {
  const [showmore, setShowmore] = useState(false);

  return (
    <div className='mt-4'>
      {summaries.length === 0 ? (
        <p>기록이 없습니다. 새로운 기록을 추가해보세요!</p>
      ) : (
        summaries.map((summary, index) => (
          <div
            key={index}
            className='bg-[#f9f7f3] p-4 rounded my-2'
          >
            <div className='flex justify-between items-center'>
              <div className='flex gap-3 items-center'>
                <span className='font-bold'>{summary.category}</span>
                <span>{summary.title}</span>
                <div>
                  {summary.value}
                  {summary.unit}
                </div>
              </div>
              <div className='flex gap-2'>
                <button onClick={() => setShowmore(!showmore)}>
                  {showmore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </button>
                <button
                  onClick={() => {
                    deleteSummary(summary.id);
                  }}
                >
                  <ClearIcon />
                </button>
              </div>
            </div>
            {showmore && <div className='bg-white'>{summary.description}</div>}
          </div>
        ))
      )}
    </div>
  );
}
