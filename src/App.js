import { useState } from 'react';
import { Calculation } from './components/tabs/calculation';
import Container from '@mui/material/Container';
import logo from './public/img/logo_header.png';
import { Footer } from './components/footer';
import Grid from '@mui/material/Grid';

function App() {
  const [title, setTitle] = useState('Tiện');

  return (
    <div className="App">
      <Container maxWidth="xl" style={{ boxShadow: '0 0 20px rgb(0 0 0 / 30%)', padding: 0 }}>
        <div id="home" style={{ textAlign: 'center', paddingTop: 10 }}><h1> TÍNH/TRA CÁC THÔNG SỐ CƠ BẢN KHI GIA CÔNG CƠ</h1></div>
        <div style={{padding: 20}}>
              <Grid container spacing={2}>
                <Grid item sm={6} style={{display: 'flex', justifyContent: 'center', padding: 35}}> 
                  <img 
                    src={logo}
                    alt="Faculty of Mechanical Engineering – University of Science and Technology – The University of Danang" />
                </Grid>
                <Grid item sm={6}> 
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <strong style={{lineHeight: 2, fontSize: 18}}>ĐỒ ÁN TỐT NGHIỆP</strong>
                        <div style={{lineHeight: 2,fontSize: 18}}>ĐỀ TÀI:</div>
                        <strong style={{lineHeight: 2, fontSize: 18, marginBottom: -15}}>THIẾT KẾ GIAO DIỆN WEB PHỤC VỤ VIỆC TÍNH TRA CHẾ ĐỘ GIA CÔNG CƠ</strong>
                        <ul style={{lineHeight: 1.5 }}>
                          <li>GVHD: PGS.TS. LƯU ĐỨC BÌNH</li>
                          <li>SVTH: VÕ DUY LINH</li>
                          <li>LỚP : 17C1B</li>
                        </ul>
                        
                    </div>
                </Grid>
              </Grid>
          <hr style={{ borderTop: 'solid #DDD 2px' }}/>
          <Calculation setTitle={setTitle} title={title} />
        </div>  
        <Footer />
      </Container>
    </div>
  );
}

export default App;
