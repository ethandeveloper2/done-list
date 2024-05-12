'use client';

import { Container } from '@mui/material';
import { format } from 'date-fns';
import { useState } from 'react';
import Calendar from './components/Calendar';
import SummaryForm from './components/SummaryForm';
import SummaryList from './components/SummaryList';
import { Summary } from './types';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [summaries, setSummaries] = useState<Summary[]>([]);

  const addSummary = (summary: Summary) => {
    setSummaries([...summaries, summary]);
  };

  const todaySummaries = summaries.filter(
    (summary) =>
      summary.date.toLocaleDateString() === selectedDate.toLocaleDateString()
  );

  const deleteSummary = (id: number) => {
    const updatedSummary = summaries.filter((item) => {
      if (item.id != id) {
        return item;
      }
    })
    
    setSummaries(updatedSummary)

  }

  return (
    <Container
      maxWidth='md'
      className='#f9f7f3'
    >
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div className='mt-4 mb-4 min-h-[88vh]'>
        <div className='text-3xl font-bold flex justify-between mb-4'>
          <h1>오늘 한일</h1>
          <span>{todaySummaries.length}</span>
        </div>
        <div className='mb-4'>
          <SummaryForm
            addSummary={(summary) =>
              addSummary({ ...summary, date: selectedDate })
            }
            selectedDate={selectedDate}
          />
        </div>
        <SummaryList summaries={todaySummaries} deleteSummary={deleteSummary} />
      </div>
    </Container>
  );
}
