import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function App() {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <MusicNoteIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sacred
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            Welcome to Sacred — Day 1
          </Typography>
          <Typography variant="body1" paragraph>
            Theme & AppBar are set. Backend health check ready at <strong>/api/ping</strong>.
          </Typography>
          <Typography variant="body2">
            Next: Auth forms, DB schema and upload flow.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;
