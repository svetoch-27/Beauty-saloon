import React from 'react';
import styles_RegisterSpecialist from './RegisterSpecialist.css';

function RegisterSpecialist({activPar, data, state,viewService, typeService, specialist, onChangeOption}) {
    //state = { value: "" }
    //handChange = ({ target: {value}}) => this.setState({value})

    const type_id = 1;



    return (
        <div className='column'>
            <div className='row'>
                <div className='type_RegisterSpecialist'>Тип услуги</div>   
                <select value='Тип услуги'> 
                    {typeService.map((typeid,i) => <option value={typeid.nameType} onClick={onChangeOption('Type',1)}>{typeid.nameType} </option>)}
                
                </select>    
            </div>
            <div className='row'>
                <div className='type_RegisterSpecialist'>Вид услуги</div>
                <select value='Вид услуги'> 
                    {viewService.map((viewid,i) => <option value={viewid.nameView}>{viewid.nameView}</option>)
                  /*                  
                        data.map((dataid,typeid,i) => {
                            dataid.typeid = typeid ? 
                                <option value={dataid.name}>
                                    {
                                        dataid.typeid.name
                                    }
                                </option> 
                                :
                                null
                            } )*/
                    }                
                </select> 
            </div>
            <div className='row'>
                <div className='type_RegisterSpecialist'>Выбор специалиста</div>
                <select value='Выбор специалиста'> 
                    {specialist.map((specid,i) => <option value={specid.fullName}>{specid.fullName}</option>)}
                    {/*
                    <option value='Иванова'>Иванова</option>
                    <option value='Гончарова'>Гончарова</option>
                    <option value='Ларионова'>Ларионова</option>
                    <option value='Онова'>Онова</option>*/}
                    {//state.map((stateid,i) => <option value={stateid.specialist.name}>{stateid.specialist.name}</option>)
                    }
                
                </select>  
            </div>
        </div>
    )
}

export default RegisterSpecialist;