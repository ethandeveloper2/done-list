import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { FormEvent, useRef, useState } from 'react';
import { Summary } from '../types';

export default function SummaryForm({
  addSummary,
  selectedDate,
}: {
  addSummary: (summary: Summary) => void;
  selectedDate: Date;
}) {
  const [summary, setSummary] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState<number>(0);
  const [unit, setUnit] = useState<string>('');
  // Define the ref with a specific type
  const idRef = useRef<number>(0);

  // Example function to increment the ref's current value
  const incrementId = () => {
    idRef.current += 1;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedDate) {
      addSummary({
        id: idRef.current,
        date: selectedDate,
        title: summary,
        description: description,
        category: category,
        unit: unit,
        value: value,
      });
      setSummary('');
      setDescription('');
      setCategory('');
      setValue(0);
      setUnit('');
      incrementId();
    }
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col space-y-4'
    >
      <div>
        <div className='flex flex-row space-x-4 mb-2'>
          <FormControl className='w-[200px] shrink-0'>
            <InputLabel>카테고리</InputLabel>
            <Select
              className={'swiper-no-swiping'}
              value={category}
              onChange={handleCategoryChange}
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
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            fullWidth
            sx={{
              zIndex: 0,
            }}
          />
        </div>
        <TextField
          label='내용'
          variant='outlined'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          sx={{
            zIndex: 0,
          }}
        />
        <div className='flex flex-row space-x-4 mb-3 mt-2'>
          <TextField
            label='단위'
            variant='outlined'
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            fullWidth
            sx={{
              zIndex: 0,
            }}
          />
          <TextField
            label='달성도'
            variant='outlined'
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
            fullWidth
            type='number'
          />
        </div>
      </div>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        className='bg-[#0fa3b1]'
      >
        오늘 한 일 추가하기
      </Button>
    </form>
  );
}
