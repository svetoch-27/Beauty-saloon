import React from 'react';
import styles_HeaderWeek from './HeaderWeek.css';

function HeaderWeek({ headerWeek}) {
    return (
        <div className='HeaderWeek'> 

            <div className='HeaderWeekRow'>
                <div  className='Tr_L-Week'></div>
                <div  className='Tr_L-Day'></div>
            </div>

            <div> {headerWeek}</div>

            <div className='HeaderWeekRow'>    
                <div  className='Tr_R-Day'></div>
                <div  className='Tr_R-Week'></div>
            </div>
                {/*
                <div class="rotate-shadows">
                    <div  className='trr'></div>
                    <div  className='trr'></div>
                </div>
                */}
        </div>
    )
}

export default HeaderWeek;