import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import PlatformTopbar from './PlatformTopbar';
import PlatformTable from './PlatformTable';

const Platforms: React.FC = () => {
  const [topBarHeight, setTopBarHeight] = useState<number>(72); 
  const topBarRef = useRef<HTMLDivElement | null>(null); 

  

  const updateDataWithFilters = (filters: any) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach((filterKey) => {
      if (filters[filterKey] && filters[filterKey].length > 0) {
        params.append(filterKey, filters[filterKey].join(','));
      }
    });

    fetch(`/api/platforms?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle platform data refresh
      });
  };

  useEffect(() => {
    const handleResize = () => {
      if (topBarRef.current) {
        setTopBarHeight(topBarRef.current.offsetHeight); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box sx={{ width: '100%', height: '100vh', padding: '0px', display: 'flex', flexDirection: 'column' }}>
   
      <Box ref={topBarRef}>
        <PlatformTopbar  />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          overflow: 'auto', 
          height: `calc(100vh - ${topBarHeight}px)`, 
        }}
      >
        <PlatformTable />
      </Box>
    </Box>
  );
};

export default Platforms;
