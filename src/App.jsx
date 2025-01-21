import { ColorModeContext,useMode } from './Theme'
import { CssBaseline ,ThemeProvider } from '@mui/material'
import { Routes ,Route } from 'react-router-dom';

// components
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/Sidebar";
import Contacts from "./scenes/contacts";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
// import Bar from "./scenes/Bar";
// import Form from "./scenes/Form";
// import Line from "./scenes/Line";
// import Pie from "./scenes/Pie";
// import Faq from "./scenes/Faq";
// import Calander from "./scenes/Calander";
// import Geography from "./scenes/Geography";
import Form from "./scenes/form"
function App() {
  const [theme , colorMode] = useMode();

  return (
    // this is a normal use of context API;
    // the colorModeContext we defined before in the theme file...:
    <ColorModeContext.Provider value={colorMode}>
      {/* the theme providor is a biult in method form MUI; */}
      <ThemeProvider theme={theme}>
        {/* this will return css to the default Aslo an API provided from MUI */}
        <CssBaseline/>
        <div className="app"> 
          <SideBar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>  
              <Route path='/team' element={<Team/>}/>  
              <Route path='/contacts' element={<Contacts/>}/>  
              <Route path='/invoices' element={<Invoices/>}/>  
              {/* <Route path='/Bar' element={<Bar/>}/>   */}
              {/* <Route path='/form' element={<Form/>}/>   */}
              {/* <Route path='/line' element={<Line/>}/>   */}
              {/* <Route path='/pie' element={<Pie/>}/>   */}
              {/* <Route path='/faq' element={<Faq/>}/>   */}
              {/* <Route path='/calander' element={<Calander/>}/>   */}
              {/* <Route path='/geography' element={<Geography/>}/>   */}
              <Route path='/adduser' element={<Form/>}/>
            </Routes>  
          </main> 
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
