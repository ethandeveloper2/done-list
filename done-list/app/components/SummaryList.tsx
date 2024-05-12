import { Summary } from './../types';

interface SummaryListProps {
  summaries: Summary[];
}

export default function SummaryList({ summaries }: SummaryListProps) {
  return (
    <div className="mt-4">
      {summaries.length === 0 ? (
        <p>기록이 없습니다. 새로운 기록을 추가해보세요!</p>
      ) : (
        summaries.map((summary, index) => (
          <div key={index} className="bg-[#f9f7f3] p-4 rounded my-2">
            <div className="font-bold">
              {summary.date.toLocaleDateString()} - {summary.category}
            </div>
            <div>{summary.text}</div>
            <div>Units: {summary.units}</div>
          </div>
        ))
      )}
    </div>
  );
}
