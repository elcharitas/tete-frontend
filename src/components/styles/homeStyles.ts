import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/system";
import { teteBlue, teteGray, teteGrayLight, teteRed, teteWhite } from "/src/api/providers/theme/colors";

const theme = createTheme({});

const useStyle = makeStyles((theme) => {
  return {
    featuredGames: {
      background: teteWhite,
      width: "949px",
      height:'240px',
      borderRadius: "10px 10px 0 0 ",
    },
    live:{
      background:'#E21313', 
      color:'white', 
      borderRadius:'5px',
      width:'25%', 
      marginLeft:'5px',
      textAlign:'center',
      marginTop:'5px'
    },
    games:{
      background:'white',
      width:'200px',
      height:'150px',
      borderRadius:'8px',
      padding:'5px',
      boxShadow:`1px 2px 4px 5px  ${teteGrayLight}`
    },
    match:{
      display:'flex',
      justifyContent:"space-around",
      alignItems:'center',
      marginTop:'10px',
      fontSize:'10px',
    },
    odds:{
      background:'#0E2EA0',
      color:'white',
      fontSize:'10px',
      padding:'2px',
      width:'40px',
      textAlign:'center',
    
    },
    liveBetting:{
      background:"#E5E5E5",
      width:'949px',
      height:'300px',
      marginTop:'20px',
      padding:'15px'
    },
    lbheading:{
      display:'flex',
      justifyContent:'space-around',
    },
    date:{
      marginLeft:'20px',
      fontSize:'20px'

    },
    grid:{
      display:'grid',
      gridTemplateColumns:'1.5fr  1fr',
      color:'grey'
    },
    team:{
      display:'flex',
      alignItems:'center',
      justifyContent:'start',
      fontSize:'15px',
      padding:'5px'
    },
    highlights:{
      background:"#E5E5E5",
      width:'949px',
      // height:'300px',
      marginTop:'20px',
      padding:'15px'
    },
    running:{
      background:teteGray,
    },
    lost:{
      background:teteRed
    },
    won:{
      background:teteBlue
    },
    paper:{
      border:'none'
    }
  };
});

export { useStyle, theme };
