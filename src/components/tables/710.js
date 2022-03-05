import { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export const Table710 = () => {
  const [show, setShow] = useState(false);

  const handleOnClick = () => {
    setShow(!show);
  }

  return (
    <div>
      <div onClick={handleOnClick} className="up-down">
        <h4>Bảng 7.10 Tốc độ cắt và lượng chạy dao khi tiện với vật liệu dao ceramic</h4>
        {show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </div>
      {show && <table>
        <thead>
          <tr>
            <th>Phôi</th>
            <th>Độ cứng, độ bền</th>
            <th>Kiểu gia công</th>
            <th>Lượng chạy dao (mm/v)</th>
            <th>Tốc độ cắt (m/ph)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="2">E295 - E360, C35, CK35, C45, CK45</td>
            <td rowSpan="2">500 -800</td>
            <td>Roughing</td>
            <td>0.3 - 0.5</td>
            <td>300 - 100</td>
          </tr>
          <tr>
            <td>Finishing</td>
            <td>0.1 - 0.3</td>
            <td>500 - 200</td>
          </tr>
          <tr>
            <td rowSpan="2">C60, CK60, 40Mn4, 30Mn5, 37MnSi5, 34Cr4, 41Cr4, 25CrMo4, 34CrMo4</td>
            <td rowSpan="2">800 - 1000</td>
            <td>Roughing</td>
            <td>0.2 - 0.4</td>
            <td>250 - 100</td>
          </tr>
          <tr>
            <td>Finishing</td>
            <td>0.1 - 0.3</td>
            <td>400 - 200</td>
          </tr>
          <tr>
            <td rowSpan="2">42MnV, 42CrMo4, 50CrMo4, 36CrNiMo4, 34CrNiMo6</td>
            <td rowSpan="2">1000 - 1200</td>
            <td>Roughing</td>
            <td>0.2 - 0.4</td>
            <td>200 - 100</td>
          </tr>
          <tr>
            <td>Finishing</td>
            <td>0.1 - 0.3</td>
            <td>350 - 200</td>
          </tr>
          <tr>
            <td rowSpan="2">GE260, G20Mn5, G24MnMo5, G22CrMo5</td>
            <td rowSpan="2">500 - 600</td>
            <td>Roughing</td>
            <td>0.3 - 0.6</td>
            <td>300 - 100</td>
          </tr>
          <tr>
            <td>Finishing</td>
            <td>0.1 - 0.3</td>
            <td>500 - 200</td>
          </tr>
          <tr>
          <td>Hot forming tool steels, Die steels</td>
          <td>45 - 55 HRC</td>
          <td>Finishing</td>
          <td>0.05 - 0.2</td>
          <td>150 - 50</td>
        </tr>
          <tr>
          <td>Cold work steels, ball bearing steels</td>
          <td>55 - 60 HRC</td>
          <td>Finishing</td>
          <td>0.05 - 0.15</td>
          <td>80 - 30</td>
        </tr>
          <tr>
          <td>Cold work steels, High speed steels</td>
          <td>60 - 65 HRC</td>
          <td>Finishing</td>
          <td>0.05 - 0.1</td>
          <td>50 -20</td>
        </tr>
        <tr>
          <td rowSpan="2">GJL100 - GJL250</td>
          <td rowSpan="2">1400 - 2200 HB</td>
          <td>Roughing</td>
          <td>0.3 - 0.8</td>
          <td>400 - 200</td>
        </tr>
        <tr>
          <td>Finishing</td>
          <td>0.1 - 0.3</td>
          <td>250 - 80</td>
        </tr>
        <tr>
          <td rowSpan="2">GJL300, Special cast iron 40, GG alloyed</td>
          <td rowSpan="2">2200 - 3500 HB</td>
          <td>Roughing</td>
          <td>0.2 - 0.6</td>
          <td>250 - 80</td>
        </tr>
        <tr>
          <td>Finishing</td>
          <td>0.1 - 0.3</td>
          <td>300 - 100</td>
        </tr>
        <tr>
          <td rowSpan="2">Brass: Ms63, (CuZn37)</td>
          <td rowSpan="2">800 HB</td>
          <td>Roughing</td>
          <td>0.3 - 0.8</td>
          <td>500 - 300</td>
        </tr>
        <tr>
          <td>Finishing</td>
          <td>0.1 - 0.3</td>
          <td>1000 - 400</td>
        </tr>
        <tr>
          <td rowSpan="2">Al alloyed</td>
          <td rowSpan="2">600 - 1200 HB</td>
          <td>Roughing</td>
          <td>0.3 - 0.8</td>
          <td>1000 - 600</td>
        </tr>
        <tr>
          <td>Finishing</td>
          <td>0.1 - 0.3</td>
          <td>2000 - 800</td>
        </tr>
       </tbody>
     </table>}
    </div>
    );
}