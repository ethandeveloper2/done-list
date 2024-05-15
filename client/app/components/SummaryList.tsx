import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { MutableRefObject, useState } from 'react';
import { Summary } from './../types';

interface SummaryListProps {
  summaries: Summary[];
  deleteSummary: Function;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addSummary: (summary: Summary) => void;
  selectedDate: Date;
  idRef: MutableRefObject<number>;
  setSelectedSummary: any
  setUpdateModalOpen: any
}

export default function SummaryList({
  summaries,
  deleteSummary,
  open,
  setOpen,
  addSummary,
  selectedDate,
  idRef,
  setSelectedSummary,
  setUpdateModalOpen
}: SummaryListProps) {
  const [updatedId, setUpdatedId] = useState<number | null>(null);
  
  return (
    <>
      <div className='mt-4'>
        {summaries.length === 0 ? (
          <p>기록이 없습니다. 새로운 기록을 추가해보세요!</p>
        ) : (
          summaries.map((summary, index) => (
            <div
              key={index}
              className='mb-2'
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2-content'
                  id='panel2-header'
                >
                  <div className='flex gap-3 items-center'>
                    <span className='font-bold'>{summary.category}</span>
                    <span>{summary.title}</span>
                    <div>
                      {summary.value}
                      {summary.unit}
                    </div>
                  </div>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>{summary.description}</Typography>
                </AccordionDetails>

                <AccordionActions>
                  <Button
                    onClick={() => {
                      setSelectedSummary(summary)
                      setUpdatedId(summary.id)
                      setUpdateModalOpen(true);
                    }}
                  >
                    수정
                  </Button>
                  <Button
                    onClick={() => {
                      deleteSummary(summary.id);
                    }}
                  >
                    삭제
                  </Button>
                </AccordionActions>
              </Accordion>
            </div>
          ))
        )}
      </div>
    </>
  );
}
