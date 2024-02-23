import {imageBasePath} from '../../constant';
import './MovieModal.css';
import { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
const MovieModal = ({backdrop_path, title, overview, name, release_data, vote_average, setModalOpen, first_air_data}) => {

    const ref = useRef(null);
    useOnClickOutside(ref, () => {
        setModalOpen(false)
    })

    return (
        <div className="presentation" role="presentation">
            <div className="wrapper-modal">
                <div className="modal">
                    <span onClick={() => setModalOpen(false)}
                    className="modal-close">
                        X
                    </span>

                    <img className="modal__poster-img" 
                        src={`${imageBasePath}${backdrop_path}`} 
                        alt="modal-poster-img" />
                    <div className='modal__content'>
                        <p className='modal__details'>
                            <span>
                                100% for you
                            </span>{" "}
                            {release_data ?  release_data : first_air_data}
                        </p>
                        <h2 className='modal__title'>
                          {title ? title : name}
                        </h2>
                        <p className='modal__overview'>평점 : {vote_average}</p>
                        <p className='modal__overview'>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;