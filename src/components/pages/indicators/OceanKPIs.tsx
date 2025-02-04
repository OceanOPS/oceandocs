import { Box, Typography } from '@mui/material';
import { PageProps } from '../PageProps';

const KPIs: React.FC<PageProps> = ({ darkMode }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        KPIs
      </Typography>
    </Box>
  );
};

export default KPIs;
