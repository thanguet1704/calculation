import { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Table712 = () => {
    const [show, setShow] = useState(false);

    const handleOnClick = () => {
        setShow(!show);
    }

    return (
      <div>
         <div onClick={handleOnClick} className="up-down">
            <h4>Bảng 7.12 Tốc độ cắt V<sub>c60</sub> (m/ph) và Lượng chạy dao s (mm/v) trong tiện tự động</h4>
            {show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
        {show && <table>
        <thead>
          <tr>
            <th rowSpan="2">Phôi</th>
            <th rowSpan="2">Lượng chạy dao và tốc độ cắt</th>
            <th colSpan="8">Phương pháp gia công</th>
          </tr>
          <tr>
            <th>Tiện mặt trụ và tiện mặt đầu</th>
            <th>Tiện rãnh</th>
            <th>Cắt đứt</th>
            <th>Khoan Ø2.5 - 4</th>
            <th>Khoan Ø4 - 6.3</th>
            <th>Khoan Ø6.3 - 10</th>
            <th>Khoan Ø10 - 16</th>
            <th>Taro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="2">Al alloy</td>
            <td>V<sub>c60</sub></td>
            <td>160 - 190</td>
            <td>160 - 180 </td>
            <td>160 - 180</td>
            <td>130 - 150</td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td>40 - 60 </td>
          </tr>
          <tr>
            <td>f</td>
            <td>0.15 - 0.25</td>
            <td>0.04 - 0.08</td>
            <td>0.07 - 0.12 </td>
            <td>0.1</td>
            <td>0.13</td>
            <td>0.14</td>
            <td>0.17</td>
            <td> - </td>
          </tr>
          <tr>
            <td rowSpan="2">CuZn37</td>
            <td>V<sub>c60</sub></td>
            <td>60 - 100</td>
            <td>60 - 100</td>
            <td>60 - 100</td>
            <td>70 - 120</td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td>30 - 40</td>
          </tr>
          <tr>
            <td>f</td>
            <td>0.1 - 0.25</td>
            <td>0.04 - 0.08</td>
            <td>0.04 - 0.08</td>
            <td>0.08</td>
            <td>0.1</td>
            <td>0.12</td>
            <td>0.14</td>
            <td> - </td>
          </tr>
          <tr>
            <td rowSpan="2">GJL200, GIL300</td>
            <td>V<sub>c60</sub></td>
            <td>20 - 30</td>
            <td>20 - 30</td>
            <td>20 - 30</td>
            <td>15 - 20</td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td>5 - 8</td>
          </tr>
          <tr>
            <td>f</td>
            <td>0.1 - 0.2</td>
            <td>0.03 - 0.05</td>
            <td>0.06 - 0.1</td>
            <td>0.08</td>
            <td>0.1</td>
            <td>0.12</td>
            <td>0.14</td>
            <td> - </td>
          </tr>
          <tr>
            <td rowSpan="2">Free cutting steel</td>
            <td>V<sub>c60</sub></td>
            <td>50 - 80</td>
            <td>50 - 80</td>
            <td>50 - 80</td>
            <td>55 - 80</td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td>6 - 9</td>
          </tr>
          <tr>
            <td>f</td>
            <td>0.1 - 0.2</td>
            <td>0.03 - 0.05</td>
            <td>0.04 - 0.08</td>
            <td>0.06</td>
            <td>0.1</td>
            <td>0.12</td>
            <td>0.14</td>
            <td> - </td>
          </tr>
          <tr>
            <td rowSpan="2">{'Mild steel & heat treated steel < 500N/mm2'}</td>
            <td>V<sub>c60</sub></td>
            <td>30 - 50</td>
            <td>30 - 50</td>
            <td>30 - 50</td>
            <td>35 - 40</td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td>3 - 4</td>
          </tr>
          <tr>
            <td>f</td>
            <td>0.1 - 0.2</td>
            <td>0.02 - 0.03</td>
            <td>0.03 - 0.07</td>
            <td>0.07</td>
            <td>0.08</td>
            <td>0.1</td>
            <td>0.11</td>
            <td> - </td>
          </tr>
          <tr>
            <td rowSpan="2">{'Mild steel & heat treated steels 600-850N/mm2 '}</td>
            <td>V<sub>c60</sub></td>
            <td>30 - 40</td>
            <td>30 - 40</td>
            <td>25 - 35</td>
            <td>20 - 30</td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td>3 - 4</td>
          </tr>
          <tr>
            <td>f</td>
            <td>0.1 - 0.2</td>
            <td>0.02 - 0.03</td>
            <td>0.03 - 0.07</td>
            <td>0.07</td>
            <td>0.08</td>
            <td>0.1</td>
            <td>0.11</td>
            <td> - </td>
          </tr>
          <tr>
            <td rowSpan="2">{'Mild steel & heat treated steels 850-1000N/mm2'}</td>
            <td>V<sub>c60</sub></td>
            <td>25 - 35</td>
            <td>25 - 35</td>
            <td>25 - 35</td>
            <td>25 - 35</td>
            <td> - </td>
            <td> - </td>
            <td> - </td>
            <td>2 -3</td>
          </tr>
          <tr>
            <td>f</td>
            <td>0.1 - 0.2</td>
            <td>0.02 - 0.03</td>
            <td>0.02 - 0.03</td>
            <td>0.04</td>
            <td>0.05</td>
            <td>0.06</td>
            <td>0.07</td>
            <td> - </td>
          </tr>
        </tbody>
      </table>}
      </div>
      );
}