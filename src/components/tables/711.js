import { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Table711 = () => {
    const [show, setShow] = useState(false);

    const handleOnClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <div onClick={handleOnClick} className="up-down">
                <h4>Bảng 7.11 Tốc độ cắt khi tiện với dao kim cương</h4>
                {show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            {show && <table border="1" cellSpacing="0" cellPadding="0">
                <tr>
                    <th>Phôi</th>
                    <th>Lượng chạy dao (mm/v)</th>
                    <th>Chiểu sâu cắt (mm)</th>
                    <th>Tốc độ cắt (m/ph)</th>
                </tr>
                <tr>
                    <td>Al alloy (9 - 13 % Si)</td>
                    <td>0.04</td>
                    <td>0.15</td>
                    <td>300 - 500</td>
                </tr>
                <tr>
                    <td>Al - extrusion special alloy 12 % Si - 120 HB</td>
                    <td>0.25</td>
                    <td>0.4</td>
                    <td>200 - 500</td>
                </tr>
                <tr>
                    <td>Electrolyte copper</td>
                    <td>0.05 - 0.1</td>
                    <td>0.05 - 0.4</td>
                    <td>140 - 400</td>
                </tr>
                <tr>
                    <td>Brass</td>
                    <td>0.03 - 0.08</td>
                    <td>0.5 - 1.4</td>
                    <td>80 - 400</td>
                </tr>
                <tr>
                    <td>Plastics PTFE with 20% glass fibre</td>
                    <td>0.12 - 0.18</td>
                    <td>0.5 - 3.0</td>
                    <td>130 - 170</td>
                </tr>
            </table>}
        </div>
       );
}