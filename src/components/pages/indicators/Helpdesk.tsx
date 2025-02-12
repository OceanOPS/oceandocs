import { Box, Typography } from '@mui/material';
import { PageProps } from '../PageProps';

const Helpdesk: React.FC<PageProps> = ({ darkMode }) => {
  return (
	<Box sx={{ textAlign: 'center', mb: 4 }}>
	<Typography variant="h2" sx={{ fontWeight: 500, color: darkMode ? "#03a9f4" : "#009af4" }}>
	Helpdesk
	</Typography>
	<Typography variant="h5" sx={{ fontWeight: 400, color: darkMode ? "#e0e0e0" : "#333" }}>
	The OceanOPS Wiki pages.
	</Typography>
	<br/><br/>
	Documentation is currently in the <a target="_blank" href="https://github.com/OceanOPS/helpdesk/wiki/Argo-alert,-warning-and-notification-system#ioc-resolution-notfications">OceanOPS Helpdek GitHub repo wiki</a><br/>
	It will be moved to this page in due course.
  </Box>
  );
};

export default Helpdesk;
