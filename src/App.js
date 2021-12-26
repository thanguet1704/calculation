import { useState } from 'react';
import { Calculation } from './components/tabs/calculation';
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


function App() {
  const [title, setTitle] = useState('Turning');

  return (
    <div className="App">
      <Container maxWidth="xl">
      <h1 id="home" style={{ marginTop: 20, display: 'flex', alignItems: 'center' }}>
        <HomeIcon />
        <b> Cutting Calculation ({title})</b>
      </h1>
      <Calculation setTitle={setTitle} title={title}/>
      </Container>
    </div>
  );
}

export default App;
