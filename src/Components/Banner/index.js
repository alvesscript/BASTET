import './banner.css';
import Img from '../../assests/Img.png';
import img_2 from '../../assests/img_2.jpg';

export function Banner() {
    return (
        <>
        <div className="Banner">
            <div className="Banner_img1"><img src={Img} alt='pessoas' /></div>
            <div className="Banner_img2"><img src={img_2} alt='pessoas' /></div>
            <div><h1 className='title'>Bem-Vindos ao portal de alunos da Toti</h1></div>
        </div>
        <div  className='title_1'>-</div>
    </>
    );
}