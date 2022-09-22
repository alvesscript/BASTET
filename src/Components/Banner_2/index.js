import './style.css'
import cadastro from '../../assests/cadastro.jpg'

export function Banner_2() {

    return (
        <div>
            <div className='Cadastro_home'>
                <div>
                <h1 className='cadastro_title'>Cadastre-se gratuitamente</h1>
                <button className='button'>Clique Aqui</button>
                </div>
                <div className='cadastro_img'><img src={cadastro} alt='cadastro' /></div>
             </div> 
        </div>
    )
}