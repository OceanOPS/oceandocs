import { Box, Typography, Grid, Paper } from '@mui/material';
import { PageProps } from '../../PageProps';

const steps = [
  {
    number: '1',
    title: 'Setup Environment',
    description: `Contact an OceanOPS coordinator to setup your permissions.

They will assign your OceanOPS user to a role within an official OceanOPS Program.

And if required, they will create a new program for you.`,
    imgSrc: '/docs/img/setup.png',
  },
  {
    number: '2',
    title: 'Pre-registration',
    description: `If you already have all the required metadata for a passport you can skip to step 3.

Otherwise, you can pre-register a mission to obtain a WIGOS-ID in exchange for a few basic criteria.

This can be done via the Request IDs API or within the Request IDs GUI in the OceanOPS dashboard.

The WIGOS-ID will expire within 6 months if the record is not completed with required metadata.`,
    imgSrc: '/docs/img/pre_reg.png',
  },
  {
    number: '3',
    title: 'Obtain Passport',
    description: `Submit metadata gradually once it becomes known to you.

This can be done via the OceanOPS dashboard using the File Uploader module or Platform Editor Form.

Alternatively, make your metadata available on an ERDDAP and tell the OceanOPS team to harvest it.

When the mandatory criteria are met, the platform mission will obtain it's passport.

The passport guarantees the WIGOS-ID will stay attributed, and that the mission adheres to GOOS objectives.`,
    imgSrc: '/docs/img/passport.png',
  },
];

const SubmitPlatforms: React.FC<PageProps> = ({ darkMode }) => {
  return (
    <Box sx={{ padding: 4, backgroundColor: darkMode ? '#1e1e1e' : '#f4f4f4' }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 500,
          color: darkMode ? "#03a9f4" : "#009af4",
          textAlign: 'center',
          mb: 4,
          fontFamily: 'Montserrat',
        }}
      >
        How to Submit Platforms
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} md={8} key={index}>
            <Paper
              sx={{
                padding: 3,
                backgroundColor: darkMode ? '#2c2c2c' : '#fff',
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                  <Box
                    sx={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: darkMode ? '#03a9f4' : '#009af4',
                      textAlign: 'center',
                      fontFamily: 'Montserrat',
                    }}
                  >
                    {step.number}
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box
                    component="img"
                    src={step.imgSrc}
                    alt={step.title}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: 150,
                      objectFit: 'contain',
                    }}
                  />
                </Grid>

                <Grid item xs={7}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: darkMode ? '#03a9f4' : '#009af4',
                      fontFamily: 'Montserrat',
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '1.1rem',
                      color: darkMode ? '#e0e0e0' : '#333',
                      fontFamily: 'Montserrat',
                      lineHeight: 1.2,
                      whiteSpace: 'pre-line', // Ensures line breaks are respected
                    }}
                  >
                    {step.description}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SubmitPlatforms;
