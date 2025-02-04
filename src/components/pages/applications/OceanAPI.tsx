import { Box, Typography } from '@mui/material';
import { PageProps } from '../PageProps';

const OceanAPI: React.FC<PageProps> = ({ darkMode }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        OceanAPI
      </Typography>
    </Box>
  );
};

export default OceanAPI;
