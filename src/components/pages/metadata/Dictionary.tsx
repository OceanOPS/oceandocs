import { Box, Typography } from '@mui/material';
import { PageProps } from '../PageProps';

const Dictionary: React.FC<PageProps> = ({ darkMode }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h2" sx={{ fontWeight: 500, color: darkMode ? "#03a9f4" : "#009af4" }}>
        Dictionary
      </Typography>
    </Box>
  );
};

export default Dictionary;
