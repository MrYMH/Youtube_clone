


import { Box } from '@mui/material'
import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Navbar from './Navbar'
import Feed from './Feed'
import VideoDetail from './VideoDetail'
import ChannelDetail from './ChannelDetail'
import SearchFeed from './SearchFeed'

function Home() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  )
}

export default Home