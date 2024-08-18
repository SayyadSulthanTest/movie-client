import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './trailer.css';
const Trailer = () => {
    let params = useParams();
    let key = params.ytTrailerId;

    return (
        <div className='react-player-container'>
            {key === null ? null : (
                <ReactPlayer
                    playing={true}
                    controls={true}
                    url={`https://www.youtube.com/watch?v=${key}`}
                    width={'100%'}
                    height={'100%'}
                />
            )}
        </div>
    );
};

export default Trailer;
