import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
import Home from "./components/Home";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      
      <Routes>
        <Route exact path='/Youtube_clone' element={<Home />} />
        
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
