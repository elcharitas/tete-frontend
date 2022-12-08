import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { teteBlue } from '../api/providers/theme/colors'
import LabTabs from '../components/widgets/tabs'
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
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Box sx={{display:'flex', alignItems:'center', color:teteBlue, cursor:'pointer'}}>
                    <ArrowLeft/>
                    <span>Previous</span>
                </Box>
                <Box sx={{display:'flex', alignItems:'center', color:teteBlue, cursor:'pointer'}}>
                    <span>Next</span>
                    <ArrowRight/>
                </Box>
            </Box>
        </Box>
    </MainLayout>
  )
}

export default History