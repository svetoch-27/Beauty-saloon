import SelectedOptions from './SelectedOptions';
import Cost from './Cost';
import React from 'react';

function ParAndCost({ type, view, spec}) {
    //type = type' view = 'view' spec = 'spec'
    return (
        <div>
            <SelectedOptions type = {type} view = {view} spec = {spec}></SelectedOptions>
            <Cost></Cost>
        </div>
    )
}

export default ParAndCost;