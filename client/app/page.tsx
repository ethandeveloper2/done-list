'use client';

import AddIcon from '@mui/icons-material/Add';
import { Button, Container } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Calendar from './components/Calendar';
import SummaryList from './components/SummaryList';
import DefaultModal from './components/modals/DefaultModal';
import { Summary } from './types';
import SummaryForm from './components/SummaryForm';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [selectedSummary, setSelectedSummary] = useState<Summary | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const idRef = useRef<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:9100/api/done-items');
      const data = await res.json();
      console.log(data)
      // setData(data);
      // setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:9100/api/done-items');
      const data = await res.json();
      console.log(data)
      // setData(data);
      // setLoading(false);
    };

    const fetchUnit = async () => {
      const res = await fetch('http://localhost:9100/api/units');
      const data = await res.json();
      console.log(data)
    }

    fetchData();
    fetchUnit();
  }, []);

  async function createDoneItem(doneItem : any) {
    const response = await fetch('http://localhost:9100/api/done-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doneItem),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error creating DoneItem: ${errorData.message}`);
    }
  
    return response.json();
  }
  
  // 사용 예시:
  const newDoneItem = {
    user_id: 1,
    category_id: 1,
    title: 'test title',
    description: 'Complete the project documentation',
    date: new Date(),
    unit_id: 1,
    value: 3.5,
    tags: [1, 2], // 예를 들어, 태그 ID가 1과 2인 태그
  };
  


  const todaySummaries = summaries.filter(
    (summary) =>
      summary.date.toLocaleDateString() === selectedDate.toLocaleDateString()
  );

  const addSummary = (summary: Summary) => {
    const add = async () => {
      const res = await fetch('http://localhost:9100/api/done-items');
    }
    setSummaries([...summaries, summary]);
    createDoneItem(newDoneItem)
    .then((createdItem) => {
      console.log('Created DoneItem:', createdItem);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  };

  const deleteSummary = (id: number) => {
    const updatedSummary = summaries.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });

    setSummaries(updatedSummary);
  };

  const updateSummary = (id: number, body: any) => {
    const updatedList = summaries.map((item) => {
      if (item.id === id) {
        item.title = body.title;
        item.description = body.description;
        item.date = body.date;
        item.category = body.category;
        item.unit = body.unit;
        item.value = body.value;
        return item;
      } else {
        return item;
      }
    });
    setSummaries(updatedList);
    setIsUpdateModalOpen(false);
  };

  const openAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const openUpdateModal = () => {
    setIsUpdateModalOpen(!isUpdateModalOpen);
  };

  return (
    <Container
      maxWidth='md'
      className='#f9f7f3'
      sx={{
        position: 'relative',
      }}
    >
      <Calendar
        summaries={summaries}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div className='mt-4 mb-4 min-h-[88vh]'>
        <div className='text-xl font-bold flex justify-between mb-4'>
          <h1>오늘 한일</h1>
          <span>{todaySummaries.length}</span>
        </div>
        <SummaryList
          summaries={todaySummaries}
          deleteSummary={deleteSummary}
          open={isAddModalOpen}
          setOpen={setIsAddModalOpen}
          setUpdateModalOpen={setIsUpdateModalOpen}
          addSummary={addSummary}
          selectedDate={selectedDate}
          idRef={idRef}
          setSelectedSummary={setSelectedSummary}
        />
      </div>

      <div className='fixed bottom-[20px] right-[20px]'>
        <Button
          variant='contained'
          color='primary'
          sx={{
            paddingRight: '10px',
          }}
          onClick={() => setIsAddModalOpen(true)}
        >
          추가하기
          <AddIcon />
        </Button>
      </div>
      <DefaultModal
        open={isAddModalOpen}
        setOpen={setIsAddModalOpen}
      >
        <SummaryForm
          selectedDate={selectedDate}
          addSummary={addSummary}
          idRef={idRef}
          setModalOpen={setIsAddModalOpen}
        />
      </DefaultModal>
      <DefaultModal
        open={isUpdateModalOpen}
        setOpen={setIsUpdateModalOpen}
      >
        <SummaryForm
          selectedDate={selectedDate}
          selectedSummary={selectedSummary}
          updateSummary={updateSummary}
          setModalOpen={setIsAddModalOpen}
        />
      </DefaultModal>
    </Container>
  );
}
