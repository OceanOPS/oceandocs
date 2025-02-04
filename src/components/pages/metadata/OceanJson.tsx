import { Box, Typography, Paper } from '@mui/material';
import { PageProps } from '../PageProps';


const OceanJson: React.FC<PageProps> = ({ darkMode }) => {
  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Page Title */}
     
      <Typography variant="h3" noWrap  sx={{ fontWeight: 500, color: darkMode ? "#03a9f4" : "#009af4", marginBottom: 2 }}>
          Ocean
          <Typography variant="h3" component="span" sx={{ fontWeight: '600' }}>
            JSON
          </Typography>
        </Typography>

        <Typography variant="h4" noWrap  sx={{ fontWeight: 500, color: darkMode ? "#03a9f4" : "#009af4", marginBottom: 2 }}>
          
        The Standard JSON Schema for OceanMeta
        </Typography>

      {/* Introduction Section */}
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 3, 
          maxWidth: 800, 
          backgroundColor: darkMode ? '#2c2c2c' : '#fff', 
          color: darkMode ? '#e0e0e0' : '#333' 
        }}
      >
        <Typography variant="body1" paragraph>
        The Standard JSON Schema for OceanMeta
        </Typography>


      </Paper>

      {/* Key Features Section */}
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 3, 
          maxWidth: 800, 
          marginTop: 3, 
          backgroundColor: darkMode ? '#2c2c2c' : '#fff', 
          color: darkMode ? '#e0e0e0' : '#333' 
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 500, marginBottom: 1 }}>
          Key Features
        </Typography>

        <Typography variant="body1">🔹 Standardized platform mission metadata JSON format</Typography>
      </Paper>
    </Box>
  );
};

export default OceanJson;
