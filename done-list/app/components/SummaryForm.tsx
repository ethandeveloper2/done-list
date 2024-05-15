import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { MutableRefObject, useEffect, useState } from 'react';
import { Summary } from '../types';

export default function SummaryForm({
  addSummary,
  selectedDate,
  setModalOpen,
  idRef,

  updateSummary,
  selectedSummary,
}: {
  addSummary?: (summary: Summary) => void;
  selectedDate: Date;
  idRef?: MutableRefObject<number>;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;

  updateSummary?: any;
  selectedSummary?: any;
}) {
  const [summary, setSummary] = useState({
    id: '',
    date: '',
    title: '',
    category: '',
    description: '',
    value: 0,
    unit: '',
  });

  useEffect(() => {
    if (selectedSummary) {
      setSummary({
        id: selectedSummary.id,
        date: selectedSummary.date,
        title: selectedSummary.title,
        category: selectedSummary.category,
        description: selectedSummary.description,
        value: selectedSummary.value,
        unit: selectedSummary.unit,
      });
    }
  }, []);

  const add = () => {
    if (idRef && selectedDate && addSummary) {
      addSummary({
        id: idRef.current,
        date: selectedDate,
        title: summary.title,
        description: summary.description,
        category: summary.category,
        unit: summary.unit,
        value: summary.value,
      });
      setSummary({
        id: '',
        date: '',
        title: '',
        category: '',
        description: '',
        value: 0,
        unit: '',
      });

      if (setModalOpen) {
        setModalOpen(false);
      }

      idRef.current += 1;
    }
  };

  const update = () => {
    updateSummary(selectedSummary.id, summary);
  };

  // event: React.ChangeEvent<HTMLInputElement>,
  const changeInput = (key: string, value: string | number) => {
    setSummary({
      ...summary,
      [key]: value,
    });
  };

  return (
    <div className='flex flex-col space-y-4'>
      <div>{selectedDate.toISOString()}</div>
      <div>
        <div className='flex flex-row space-x-4 mb-2'>
          <FormControl className='w-[200px] shrink-0'>
            <InputLabel>카테고리</InputLabel>
            <Select
              className={'swiper-no-swiping'}
              value={summary.category}
              onChange={(e) => changeInput('category', e.target.value)}
              label='Category'
              sx={{ zIndex: 1400 }}
              MenuProps={{
                sx: { zIndex: 1400 },
              }}
            >
              <MenuItem value='Work'>Work</MenuItem>
              <MenuItem value='Exercise'>Exercise</MenuItem>
              <MenuItem value='Study'>Study</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label='제목'
            variant='outlined'
            value={summary.title}
            onChange={(e) => changeInput('title', e.target.value)}
            fullWidth
            sx={{
              zIndex: 0,
            }}
          />
        </div>
        <TextField
          label='내용'
          variant='outlined'
          value={summary.description}
          onChange={(e) => changeInput('description', e.target.value)}
          fullWidth
          sx={{
            zIndex: 0,
          }}
        />
        <div className='flex flex-row space-x-4 mb-3 mt-2'>
          <TextField
            label='단위'
            variant='outlined'
            value={summary.unit}
            onChange={(e) => changeInput('unit', e.target.value)}
            fullWidth
            sx={{
              zIndex: 0,
            }}
          />
          <TextField
            label='달성도'
            variant='outlined'
            value={summary.value}
            onChange={(e) => changeInput('value', parseInt(e.target.value))}
            fullWidth
            type='number'
          />
        </div>
      </div>
      <Button
        variant='contained'
        color='primary'
        className='bg-[#0fa3b1]'
        onClick={selectedSummary ? update : add}
      >
        오늘 한 일 추가하기
      </Button>
    </div>
  );
}
