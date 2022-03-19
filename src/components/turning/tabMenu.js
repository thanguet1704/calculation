import external from '../../public/img/turning/cutting_time/turning_ex.png';
import facing from '../../public/img/turning/cutting_time/turning_fa.png';
import grooving from '../../public/img/turning/cutting_time/turning_gr.png';
import cut from '../../public/img/turning/cutting_time/turning_cu.png';
import Grid from '@mui/material/Grid';

const menu = [
    {
        href: '#tab-ex',
        src: external,
        alt: '',
        title: 'External',
    },
    {
        href: '#tab-fa',
        src: facing,
        alt: '',
        title: 'Facing',
    },
    {
        href: '#tab-gr',
        src: grooving,
        alt: '',
        title: 'Grooving',
    },
    {
        href: '#tab-cu',
        src: cut,
        alt: '',
        title: 'Cut-Off',
    },
];

const pStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: 'solid 0.5px #DDD',
    borderRadius: 2
};

const imgStyle = {
    width: 50,
};

const aStyle = {
    minWidth: 80,
    marginRight: 20
};

const ulStyle = {
    display: 'flex', 
    listStyleType: 'Không có giá trị',
    marginLeft: -50,
};

export const TabMenu = () => {
    return (
        <ul style={ulStyle}>
            {menu.map(item => {
                return (
                    <li style={aStyle}>
                        <a href={item.href}>
                            <p style={pStyle} >
                                <img src={item.src} alt={item.alt} style={imgStyle}/>
                                {item.title}
                            </p>
                        </a>
                    </li>
                );
            })}
        </ul>
    );                                                                                                                               
};