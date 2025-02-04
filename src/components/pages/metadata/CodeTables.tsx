import { Box, Typography } from '@mui/material';

const CodeTables: React.FC<PageProps> = ({ darkMode }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Code Tables
      </Typography>
    </Box>
  );
};

export default CodeTables;
