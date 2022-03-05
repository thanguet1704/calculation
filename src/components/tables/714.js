import { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Table714 = () => {
    const [show, setShow] = useState(false);

    const handleOnClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <div onClick={handleOnClick} className="up-down">
                <h4>Bảng 7.14 Tốc độ cắt Vc60 (m/ph) khi tiện với dao cemented carbide</h4>
                {show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            {show && <table>
            <thead>
                <tr>
                    <th rowSpan="2">Phôi </th>
                    <th colSpan="2">Phương pháp gia công </th>
                </tr>
                <tr>
                    <th>Tiện mặt trụ và tiện mặt đầu </th>
                    <th>Tiện rãnh và cắt đứt</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Al alloy</td>
                    <td>250 - 500</td>
                    <td>250 - 400</td>
                </tr>
                <tr>
                    <td>CuZn37</td>
                    <td>200 - 400</td>
                    <td>200 - 350</td>
                </tr>
                <tr>
                    <td>GJL200, GIL300</td>
                    <td>50 - 100</td>
                    <td>40 - 80</td>
                </tr>
                <tr>
                    <td>Free cutting steel </td>
                    <td>120 - 180</td>
                    <td>100 - 160</td>
                </tr>
                <tr>
                    <td>{'Mild steel & heat treated steel < 500N/mm2'}</td>
                    <td>100 - 150</td>
                    <td>80 - 120 </td>
                </tr>
                <tr>
                    <td>{'Mild steel & heat treated steels 600-850N/mm2'}</td>
                    <td>100 - 150</td>
                    <td>70 - 100</td>
                </tr>
                <tr>
                    <td>{'Mild steel & heat treated steels 850-1000N/mm2'}</td>
                    <td>70 - 150</td>
                    <td>50 - 100</td>
                </tr>
            </tbody>
        </table>}
        </div>
    );
}