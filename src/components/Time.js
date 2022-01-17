import styles_Time from './Time.css';
import React from 'react';


function Time({ time, ok}) {
    return (
        ok ?  <button className='Time__ok'> {time}
              </button>
            : <button className='Time__no'> 
                <p>{time}</p>
              </button>
    )
}

export default Time;