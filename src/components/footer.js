import Phone from '@mui/icons-material/Phone';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const styleLi = {
    display: 'flex',
    alignItems: 'center',
}
const styleFooter = {
    backgroundColor: '#065791',
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
    paddingTop: 10,
}

export const Footer = () => {
    return (
        <div style={styleFooter}>
            <ul style={{listStyleType: 'none'}}>
                <p>LIÊN HỆ: VÕ DUY LINH, LỚP 17C1B, KHOA CƠ KHÍ, ĐẠI HỌC BÁCH KHOA - ĐẠI HỌC ĐÀ NẴNG</p>
                <li style={styleLi}>
                    <LocationOnIcon style={{marginRight: 5}} />
                    <p>K104/24 Đoàn Phú Tứ, tp. Đà Nẵng</p>
                </li>
                <li style={styleLi}>
                    <PhoneIcon style={{marginRight: 5}} />
                    <p>0345815277</p>
                </li>
                <li style={styleLi}>
                    <AlternateEmailIcon style={{marginRight: 5}} />
                    <p>voduylinh123456.dlv@gmail.com</p>
                </li>
            </ul>
            <div style={{ backgroundColor: '#3ca5f0', width: '100%', textAlign: 'center' }}>
                <ul>
                    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <p>Bản quyền thuộc về Võ Duy Linh, lớp 17C1B, Đại học Bách khoa - Đại học Đà Nẵng</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}