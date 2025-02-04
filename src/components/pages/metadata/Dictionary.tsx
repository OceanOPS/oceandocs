import { Box, Typography } from '@mui/material';

const Dictionary: React.FC<PageProps> = ({ darkMode }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Dictionary
      </Typography>
    </Box>
  );
};

export default Dictionary;
