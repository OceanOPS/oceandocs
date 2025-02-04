import { useEffect } from 'react';
import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import { PageProps } from '../PageProps';
import { motion, useAnimation } from 'framer-motion';
import { IntegrationInstructions, AutoAwesome, Sync, FactCheck } from '@mui/icons-material';

interface OceanMetaProps extends PageProps {
  setSelectedOption: (option: string) => void; // Needed to switch pages
}

const OceanMeta: React.FC<OceanMetaProps> = ({ darkMode, setSelectedOption }) => {
  const controls = useAnimation();

  return (
    <motion.div animate={controls}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" sx={{ fontWeight: 500, color: darkMode ? "#03a9f4" : "#009af4" }}>
              Ocean
              <Typography variant="h2" component="span" sx={{ fontWeight: '600' }}>
                Meta
              </Typography>
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 400, color: darkMode ? "#e0e0e0" : "#333" }}>
              The OceanOPS Integrated Metadata Standard
            </Typography>
          </Box>
        </motion.div>

        {/* Main Content */}
        <Grid container spacing={4} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  padding: 4,
                  color: darkMode ? '#e0e0e0' : '#333',
                }}
              >
                <Typography variant="h6" sx={{ mb: 3 }}>
                  <Typography variant="h6" component="span" sx={{ fontWeight: 500, color: darkMode ? "#03a9f4" : "#009af4" }}>
                    Ocean
                    <Typography variant="h6" component="span" sx={{ fontWeight: '600' }}>
                      Meta
                    </Typography>
                  </Typography>
                  <Typography variant="h6" component="span" sx={{ mb: 3, ml: 1 }}>
                    is a comprehensive, integrated <strong>metadata standard</strong> designed to enhance 
                    the <strong>interoperability</strong> and <strong>consistency</strong> of operational oceanographic observing efforts metadata. 
                    It serves as a <strong>structured framework</strong> for defining, managing, and exchanging metadata 
                    across various systems and organisations.
                  </Typography>
                </Typography>

                <Typography variant="h6" sx={{ mb: 3 }}>
                  This standard ensures that ocean observing platforms, including buoys, floats, gliders, tagged animals, ship-based weather stations, and moorings—along with all their 
                  associated entities, activity, and measurements—are documented with <strong>rich, machine-readable metadata</strong>, enabling <strong>traceability, integration, and discovery</strong>.
                </Typography>

                <Typography variant="h6" sx={{ mb: 3 }}>
                  <Typography variant="h6" component="span" sx={{ fontWeight: 500, color: darkMode ? "#03a9f4" : "#009af4" }}>
                    Ocean
                    <Typography variant="h6" component="span" sx={{ fontWeight: '600' }}>
                      Meta
                    </Typography>
                  </Typography>
                  <Typography variant="h6" component="span" sx={{ mb: 3, ml: 1 }}>
                    aligns with <strong>global standards</strong> and incorporates 
                    <strong> best practices</strong> from the operational oceanography community, ensuring adaptability to evolving 
                    metadata requirements.
                  </Typography>
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Illustration with Padding */}
          <Grid item xs={12} md={6}>
            <motion.img
              src="https://www.ocean-ops.org/static/images/oceanops/logos/oceanops-earth-md.png"
              alt="OceanMeta Illustration"
              width="100%"
              height="auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ padding: "10px" }} // Added 50px padding around the image
            />
          </Grid>
        </Grid>

        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 500, textAlign: 'center', mb: 3 }}>
              Key Features
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {[
                { icon: <IntegrationInstructions sx={{ color: "#FF6F61" }} fontSize="large" />, text: "Standardized Metadata Ontology and Definitions" },
                { icon: <Sync sx={{ color: "#4CAF50" }} fontSize="large" />, text: "Interoperability between GOOS applications" },
                { icon: <FactCheck sx={{ color: "#FFD700" }} fontSize="large" />, text: "A standardized schema: OceanJSON" },
                { icon: <AutoAwesome sx={{ color: "#2196F3" }} fontSize="large" />, text: "Automated Validation & Quality Control" },
              ].map(({ icon, text }, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      textAlign: 'center',
                      padding: 3,
                      backgroundColor: darkMode ? '#2c2c2c' : '#fff',
                      color: darkMode ? '#e0e0e0' : '#333',
                    }}
                  >
                    {icon}
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {text}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default OceanMeta;
