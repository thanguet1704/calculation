import { useState } from 'react';
import { Calculation } from './components/tabs/calculation';
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';
import bg from './public/img/bg.png';

const headerStyle = {
  backgroundColor: 'rgb(103, 134, 255)',
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  padding: 10,
  height: 80,
  boxSizing: 'border-box',
}

function App() {
  const [title, setTitle] = useState('Tiện');

  return (
    <div className="App">
      <Container maxWidth="xl" style={{ boxShadow: '0 0 20px rgb(0 0 0 / 30%)' }}>
        <div style={{ textAlign: 'center', paddingTop: 10 }}><h1> TÍNH/TRA CÁC THÔNG SỐ CƠ BẢN KHI GIA CÔNG CƠ</h1></div>
        <img 
          src="http://cokhi.dut.udn.vn/wp-content/uploads/Logo/logo_cokhi.png" 
          alt="Faculty of Mechanical Engineering – University of Science and Technology – The University of Danang" />
          <br/>
          <br/>
          <br/>
        <hr style={{ borderTop: 'solid #DDD 2px' }}/>
        <Calculation setTitle={setTitle} title={title}/>
      </Container>
      <div className="bg-img"></div>
    </div>
  );
}

export default App;
