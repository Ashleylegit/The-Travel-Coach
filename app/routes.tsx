import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destination Guide from './pages/DestinationGuide';
import Travel Planning from './pages/TravelPlanning';
import Community Forum from './pages/CommunityForum';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinationguide" element={<DestinationGuide />} />
        <Route path="/travelplanning" element={<TravelPlanning />} />
        <Route path="/communityforum" element={<CommunityForum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;