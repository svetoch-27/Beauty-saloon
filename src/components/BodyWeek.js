import ParAndCost from './ParAndCost';
import styles_BodyWeek from './BodyWeek.css';
import Week from './Week';
import React from 'react';

function BodyWeek({activPar, viewService, typeService, specialist}) {
    let type = '3245678';
    let view = 'ewrtyuiop';
    let spec = 'фывапролдж';

    if (typeService[activPar[0].idType].nameType){type = typeService[activPar[0].idType].nameType};
    if (typeService[activPar[0].idView].nameType){view = viewService[activPar[0].idView].nameView};
    if (typeService[activPar[0].idSpec].nameType){spec = specialist[activPar[0].idSpec].fio};

    return (
        <div className = 'BodyWeek__Body'>
            <ParAndCost type = {type} view = {view} spec = {spec}></ParAndCost>
            <div className='BodyWeek__Week'>
                <Week week = 'День'></Week>
            </div>
        </div>
    )
}

export default BodyWeek;