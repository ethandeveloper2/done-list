import React, { FC, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { format } from 'date-fns';

interface Props {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

const Calendar: FC<Props> = ({ selectedDate, setSelectedDate }) => {
  // Today's date details
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // Month is 0-indexed
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Generate the days for the current month
  const weeks = getWeeksInMonth(currentYear, currentMonth);

  // Move to previous month
  const handlePrevMonth = () => {
    const newDate = new Date(currentYear, currentMonth - 1, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
    setSelectedDate(newDate);
  };

  // Move to next month
  const handleNextMonth = () => {
    const newDate = new Date(currentYear, currentMonth + 1, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
    setSelectedDate(newDate);
  };

  return (
    <div className='flex justify-center'>
      <div className='text-base font-medium w-[350px] mb-4'>
        {selectedDate && (
          <div>
            <h2 className='text-xl font-bold mb-2'>
              {format(selectedDate, 'yyyy-MM-dd')}
            </h2>
            <div className='flex justify-between items-center mb-3'>
              <p>
                {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월
              </p>
              <div>
                <button onClick={handlePrevMonth}>
                  <ArrowBackIosIcon />
                </button>
                <button onClick={handleNextMonth}>
                  <ArrowForwardIosIcon />
                </button>
              </div>
            </div>
          </div>
        )}
        <div className='calendar'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => {
              return (
                <button
                  key={`${index}_${day}`}
                  style={{
                    padding: 10,
                    margin: 5,
                    width: 40,
                    height: 40,
                    borderRadius: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: day === '일' ? 'red' : day === '토' ? 'blue' : 'black'
                    // background:
                    //   selectedDate &&
                    //   selectedDate.toDateString() === day.toDateString()
                    //     ? '#b5e2fa'
                    //     : day.getMonth() === currentMonth
                    //     ? '#f9f7f3'
                    //     : '#f0f0f0', // 이 부분에서 해당 월이 아닌 날짜를 회색으로 표시
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>
          {weeks.map((week, index) => {
            return (
              <div
                key={index}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                {week.map((day, index) => {
                  return (
                    <button
                      key={`${index}_${day}`}
                      onClick={() => {
                        setSelectedDate(day);
                      }}
                      style={{
                        padding: 10,
                        margin: 5,
                        width: 40,
                        height: 40,
                        borderRadius: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background:
                          selectedDate &&
                          selectedDate.toDateString() === day.toDateString()
                            ? '#b5e2fa'
                            : day.getMonth() === currentMonth
                            ? '#f9f7f3'
                            : '#f0f0f0', // 이 부분에서 해당 월이 아닌 날짜를 회색으로 표시
                      }}
                    >
                      {day.getDate()}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function getWeeksInMonth(year: any, month: any) {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const weeks = [];
  let week = [];

  // Start from the Sunday of the week containing the first day of the month
  const day = new Date(firstDayOfMonth);
  day.setDate(day.getDate() - day.getDay());
  while (day <= lastDayOfMonth || day.getDay() !== 0) {
    if (day.getMonth() !== month) {
    }
    week.push(new Date(day));
    day.setDate(day.getDate() + 1);

    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  // Push the last week if it has fewer than 7 days and the month ends before Saturday
  if (week.length > 0) {
    weeks.push(week);
  }

  return weeks;
}

// Helper to create an array of days for the current month
const getDaysInMonth = (year: any, month: any) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export default Calendar;
