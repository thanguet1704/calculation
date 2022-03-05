import { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Table713 = () => {
    const [show, setShow] = useState(false);

    const handleOnClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <div onClick={handleOnClick} className="up-down">
                <h4>Bảng 7.13 Tốc độ cắt khi tiện ren ngoài</h4>
                {show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            {show && <table>
                <thead>
                    <tr>
                        <th rowSpan="2">Kiểu ren</th>
                        <th colSpan="2">Tốc độ cắt (m/ph)</th>
                    </tr>
                    <tr>
                        <th>HS</th>
                        <th>HM</th>
                    </tr>
                </thead>
                <tr>
                    <td>Metric thread</td>
                    <td>5 - 7.5</td>
                    <td>70</td>
                </tr>
                <tr>
                    <td>Metric fine screw thread</td>
                    <td>5 - 9</td>
                    <td>70 - 90</td>
                </tr>
                <tr>
                    <td>Acme thread</td>
                    <td>5 - 8</td>
                    <td>70</td>
                </tr>
            </table>
    }
        </div>
        );
}