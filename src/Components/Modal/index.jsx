import './Modal.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PromiseModal from '../../Middleware/PromiseModal';


import ImageHelp from '../../Assets/images/help.png';
import ImageExit from '../../Assets/images/exit.png';
import ImageReport from '../../Assets/images/report.png';

/*
** type : modal-section-sm, modal-section-md, modal-section-xl | default = modal-section-md |
*/
function Modal({ children, title, disabled = false, type='modal-section-sm' }) {
    const navigation = useNavigate();

    return (
        <section className='modal'>
            <div className={`modal-section modal-border ${type}`}>

                <div className='modal-header modal-border'>
                    {!disabled &&
                        <>
                            <img className='modal-icon white-drop-shadow cursor-pointer' src={ImageHelp} alt='help' />
                            <img className='modal-icon white-drop-shadow cursor-pointer' src={ImageReport} alt='report' onClick={() => navigation('/metaverse/report', { state: { href: window.location.href.split('/').slice(3).join('/') } })}/>
                        </>
                    }

                    <div className={`modal-title modal-header-shadow ${disabled && 'w-85 top-left-rounded'}`}>
                        <p className='rtl'>{ title }</p>
                    </div>

                    <img className='modal-icon white-drop-shadow cursor-pointer' src={ImageExit} alt='exit' onClick={() => navigation('/metaverse')}/>
                </div>
                <div className='modal-body '>
                    { children }
                </div>
            </div>
        </section>
    )
}

export default PromiseModal(Modal, axios);
