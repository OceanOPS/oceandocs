import { Box, Typography } from '@mui/material';
import { PageProps } from '../PageProps';

const Passports: React.FC<PageProps> = ({ darkMode }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Passports
      </Typography>
    </Box>
  );
};

export default Passports;
