import { useState } from 'react';
import { Calculation } from './components/tabs/calculation';
import Container from '@mui/material/Container';
import logo from './public/img/logo_header.png';
import { Footer } from './components/footer';

function App() {
  const [title, setTitle] = useState('Tiện');

  return (
    <div className="App">
      <Container maxWidth="xl" style={{ boxShadow: '0 0 20px rgb(0 0 0 / 30%)', padding: 0 }}>
        <div id="home" style={{ textAlign: 'center', paddingTop: 10 }}><h1> TÍNH/TRA CÁC THÔNG SỐ CƠ BẢN KHI GIA CÔNG CƠ</h1></div>
        <div style={{padding: 20}}>
          <img 
            src={logo}
            alt="Faculty of Mechanical Engineering – University of Science and Technology – The University of Danang" />
            <br/>
            <br/>
            <br/>
          <hr style={{ borderTop: 'solid #DDD 2px' }}/>
          <Calculation setTitle={setTitle} title={title} />
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
