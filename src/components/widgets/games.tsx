import { Box } from '@mui/system'
import { teteGrayLight } from '/src/api/providers/theme/colors'

const Games = () => {
  return (
    <Box
         sx={{
            background:'white',
            width:'200px',
            height:'150px',
            borderRadius:'8px',
            padding:'5px',
            boxShadow:`1px 1px 2px 2px  ${teteGrayLight}`  
            }}
        >
            <Box 
                sx={{
                    background:'#E21313', 
                    color:'white', 
                    borderRadius:'5px',
                    width:'25%', 
                    marginLeft:'5px',
                    textAlign:'center',
                    marginTop:'5px'
                }}
            >live</Box>
            <Box sx={{
                display:'flex',
                justifyContent:"space-around",
                alignItems:'center',
                marginTop:'10px',
                fontSize:'10px',
            }}>
                    <div>
                        <img src="/img/chelsea.png" alt="chelsea"  style={{width:'30px', marginTop:'5px'}}/>
                        <div>chelsea</div>
                    </div>
                    <div>
                        <div>17:00</div>
                        <div>01/12</div>
                    </div>
                    <div>
                        <img src="/img/united.png" alt="chelsea"  style={{width:'30px', marginTop:'5px'}}/>
                        <div>Man united</div>
                    </div>
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent:"space-around",
                alignItems:'center',
                marginTop:'10px',
                fontSize:'10px',
            }}>        
             <Box sx={{
                        background:'#0E2EA0',
                        color:'white',
                        fontSize:'10px',
                        padding:'2px',
                        width:'40px',
                        textAlign:'center',
                }}>1  2.34</Box>
                <Box sx={{
                      background:'#0E2EA0',
                    color:'white',
                    fontSize:'10px',
                    padding:'2px',
                    width:'40px',
                    textAlign:'center',
                }}>X  3.55</Box>
                <Box sx={{
                        background:'#0E2EA0',
                        color:'white',
                        fontSize:'10px',
                        padding:'2px',
                        width:'40px',
                        textAlign:'center',
                }}>2  2.09</Box>
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-between', fontSize:'8px', mx:1}} > 
                <p>EPL</p>
                <p>More Events (50)</p>
            </Box>
    </Box>
  )
}

export default Games