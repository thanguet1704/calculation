import { InputCommon } from '../../../common/input';
import wpc from '../../../../public/img/w_pc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const PhayChuVi = () => {
    const [result, setResult] = useState(0);
    const [l, setL] = useState(0);
    const [d, setD] = useState(0);
    const [a, setA] = useState(0);
    const [i, setI] = useState(0);
    const [f, setF] = useState(0);
    const [n, setN] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('phay4.1').reset();
        setReset(true);
    };

    useEffect(() => {
        const L = l + 3 + Math.sqrt(d * a - Math.pow(a, a));
        const th = (L * i) / (f * n);
        setResult(th);
    }, [l, d, a, i, f, n])

    return (
        <form id="phay4.1">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>4.1. Phay mặt phẳng bằng dao phay trụ</b></h4>
            </div>
        </form>
    );
};