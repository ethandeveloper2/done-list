import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation = () => {
  return (
    <>
      <Paper
        className='container mx-auto'
        component='form'
        sx={{
          p: '2px 4px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          sx={{ p: '10px' }}
          aria-label='menu'
        >
          <AutoGraphIcon />
        </IconButton>
        <h1 className='text-xl font-bold'>DoneList - 내가 한 일 기록하기</h1>
        <IconButton
          sx={{ p: '10px' }}
          aria-label='directions'
        >
          <SettingsIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default Navigation;
