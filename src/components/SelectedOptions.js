import React from 'react';

function SelectedOptions({ type, view, spec}) {
    return (
        <div>
            <div>Тип услуги </div>
            <div>{type}</div>
            <div> <br></br> </div>

            <div>Вид услуги</div>
            <div>{view}</div>
            <div> <br></br> </div>
            
            <div>Cпециалист</div>         
            <div>{spec}</div>
            <div> <br></br> </div>
        </div>
    )
}

export default SelectedOptions;