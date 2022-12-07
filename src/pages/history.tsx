import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SimpleAccordion from '../components/common/accordion'
import LabTabs from '../components/common/tabs'
import Toggle from '../components/common/toggle'
import MainLayout from '../layouts/main'

const History = () => {
  return (
    <MainLayout title='Bet History'>
        <Box 
            sx={{
                background:"white",
                width:'949px',
                padding:'5px'
            }}
        >
            <Typography variant="h6" sx={{ m: 2 }}>
                Bet History
            </Typography>
            <Divider />
            <Box >
                <LabTabs />
            </Box>
        </Box>
    </MainLayout>
  )
}

export default History