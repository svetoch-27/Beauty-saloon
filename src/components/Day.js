import Time from './Time';
import styles_Day from './Day.css';
import React from 'react';

function Day({ day, week}) {
    return (
        <div className='Day__Day'>
            <div>{week} </div>
            <div>{day}</div>
            <div className='Day__Time'>
                <Time time='10:00' ok = 'true' ></Time>        
                <Time time='11:00' ok = 'true' ></Time>
                <Time time='12:00' ok = 'true' ></Time>
                <Time time='13:00' ok = 'true' ></Time>
                <Time time='14:00' ok = 'true' ></Time>
                <Time time='15:00' ok = 'true' ></Time>
                <Time time='16:00' ok = 'true' ></Time>
                <Time time='17:00' ok = 'true' ></Time>
                <Time time='18:00' ok = 'true' ></Time>
            </div>
        </div>
    )
}

export default Day;