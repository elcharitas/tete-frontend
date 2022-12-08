import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { bets } from '../Data/betHistories';
import { Divider, Typography } from '@mui/material';
import { teteBlue, teteGray, teteRed, teteWhite } from '/src/api/providers/theme/colors';
import { useStyle } from '../styles/homeStyles';

export default function LabTabs() {
    const classes = useStyle()


  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="bet histories tab">
            <Tab label="All Bets" value="1" />
            <Tab label="Cashouts" value="2" />
            <Tab label="Unsettled" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Divider />
            {bets.map(bet => (
                <>
              <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <div>
                        <Typography>Date</Typography>
                        <Typography>{bet.date}</Typography>
                    </div>
                    <div>
                        <Typography>Game</Typography>
                        <Typography>{bet.game}</Typography>
                    </div>
                    <div>
                        <Typography>Total Stake</Typography>
                        <Typography>{bet.stake}</Typography>
                    </div>
                    <div>
                        <Typography>Potential Winnings</Typography>
                        <Typography>{bet.potentialWinnings}</Typography>
                    </div>
                    <Typography
                       sx={{
                        border:'2px solid',
                        textAlign:'center',
                        color:teteWhite,
                        width:'100px',
                        margin:' auto 0',
                        bgcolor: `${bet.status === "Lost" ? (teteRed) : (teteBlue)}`,
                        background:`${bet.status === 'Running' ? (teteGray) : (null)}`
                       }}
                     
                    >
                        {bet.status}
                    </Typography>
                </Box>
              <Divider />
              </>
            ))}
        </TabPanel>
        <TabPanel value="2">No Bets Available</TabPanel>
        <TabPanel value="3">
                {bets.map(bet =>{
                        if(bet.status === "Running")
                        return(
                        <>
                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                <div>
                                    <Typography>Date</Typography>
                                    <Typography>{bet.date}</Typography>
                                </div>
                                <div>
                                    <Typography>Game</Typography>
                                    <Typography>{bet.game}</Typography>
                                </div>
                                <div>
                                    <Typography>Total Stake</Typography>
                                    <Typography>{bet.stake}</Typography>
                                </div>
                                <div>
                                    <Typography>Potential Winnings</Typography>
                                    <Typography>{bet.potentialWinnings}</Typography>
                                </div>
                                <Typography
                                sx={{
                                    border:'2px solid',
                                    textAlign:'center',
                                    color:teteWhite,
                                    width:'100px',
                                    margin:' auto 0',
                                    background:teteGray
                                }}
                                >
                                    {bet.status}
                                </Typography>
                            </Box>
                        <Divider />
                        </>
                        )
                    })}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
