import { useState } from 'react';
import { CssBaseline, Box, createTheme, ThemeProvider } from '@mui/material';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OceanMeta from './components/pages/metadata/OceanMeta';
import Ontology from './components/pages/metadata/Ontology';
import Dictionary from './components/pages/metadata/Dictionary';
import CodeTables from './components/pages/metadata/CodeTables';
import Passports from './components/pages/metadata/Passports';
import OceanJSON from './components/pages/metadata/OceanJson';
import OceanAPI from './components/pages/applications/OceanAPI';
import OceanKPIs from './components/pages/indicators/OceanKPIs';
import Submit from './components/pages/tutorials/submit/Submit';
import SubmitPlatforms from './components/pages/tutorials/submit/SubmitPlatforms';
import SubmitCruises from './components/pages/tutorials/submit/SubmitCruises';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string>('OceanMeta'); // Default page

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', width: '100vw' }}>
          <Sidebar 
            darkMode={darkMode} 
            toggleDarkMode={() => setDarkMode(!darkMode)} 
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1, 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column',
            }}
          >
            <Routes>
              <Route path="/" element={<OceanMeta darkMode={darkMode} setSelectedOption={setSelectedOption} />} />
              <Route path="/ontology" element={<Ontology darkMode={darkMode} />} />
              <Route path="/dictionary" element={<Dictionary darkMode={darkMode} />} />
              <Route path="/code-tables" element={<CodeTables darkMode={darkMode} />} />
              <Route path="/passports" element={<Passports darkMode={darkMode} />} />
              <Route path="/oceanjson" element={<OceanJSON darkMode={darkMode} />} />
              <Route path="/oceanapi" element={<OceanAPI darkMode={darkMode} />} />
              <Route path="/kpis" element={<OceanKPIs darkMode={darkMode} />} />
              <Route path="/submit" element={<Submit darkMode={darkMode} />} />
              <Route path="/submit-platforms" element={<SubmitPlatforms darkMode={darkMode} />} />
              <Route path="/submit-cruises" element={<SubmitCruises darkMode={darkMode} />} />
              <Route path="*" element={<OceanMeta darkMode={darkMode} setSelectedOption={setSelectedOption} />} /> {/* Default fallback */}
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
