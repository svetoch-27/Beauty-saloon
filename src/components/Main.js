import Menu from './Menu';
import RegisterSpecialist from './RegisterSpecialist';
import BodyWeek from './BodyWeek';
import Footer from './Footer';
import styles_Main from './Main.css';
import {useState, useEffect} from 'react';
import logobackgr from '../img/23.jpg';
//'../../img/background.jpg';
//'./../../background.jpg';
//import axios from 'axios';
//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import React from 'react';

function Main({}) {

    /*const [state, setState] = useState({});
    const [typeService, setTypeService] = useState([]);
    const [viewService, setViewService] = useState(0);
    const [specialist, setSpecialist] = useState();

    const onChangeTask = () => {};
    const onDeleteTask = () => {};
    const onRestoreTask = () => {};*/

    const onChangeOption = (typePar, par) => {
        if(typePar='Type'){onChangeType(par)};
        if(typePar='View'){onChangeView(par)};
        if(typePar='Spec'){onChangeSpec(par)};
    };

    const onChangeType = (parType) => {activPar[0].idType = parType};
    const onChangeView = (parView) => {activPar[0].idView = parView};
    const onChangeSpec = (parSpec) => {activPar[0].idSpec = parSpec};

    const activWeek = [
        {
            id: 1,
            data: '03.01.2022',  
            dayOfWeek: 'Mon',          
        },
        {
            id: 2,
            data: '04.01.2022',              
            dayOfWeek: 'Tues',               
        },{
            id: 3,
            data: '05.01.2022',              
            dayOfWeek: 'Wed',               
        },{
            id: 4,
            data: '06.01.2022',              
            dayOfWeek: 'Thurs',               
        },{
            id: 5,
            data: '07.01.2022',              
            dayOfWeek: 'Fri',               
        },{
            id: 6,
            data: '08.01.2022',              
            dayOfWeek: 'Sat',               
        },{
            id: 7,
            data: '09.01.2022',              
            dayOfWeek: 'Sun',               
        },
    ];

    const activPar = [
        {
            idType: 1,
            idView: 1,
            idSpec: 1,
        },
    ];


    const viewService = [
        {
            idView: 1,
            idType: 1,
            nameView:'Пилинг',
            completed: false,
        },
        {
            idView: 2,
            idType: 1,
            nameView:'Визаж',
            completed: false,
        },
        {
            idView: 3,
            idType: 1,
            nameView:'Массаж лица',
            completed: false,
        },
        {
            idView: 4,
            idType: 2,
            nameView:'Классический массаж',
            completed: true,
        },
        {
            idView: 5,
            idType: 3,
            nameView:'Маникюр',
            completed: true,
        },
        {
            idView: 6,
            idType: 3,
            nameView:'Педикюр',
            completed: true,
        },
        {
            idView: 7,
            idType: 3,
            nameView:'Наращивание ногтей',
            completed: true,
        },
        {
            idView: 8,
            idType: 4,
            nameView:'Стрижка',
            completed: true,
        },
      ];
      
      
      const typeService = [
            {
                idType: 1,
                nameType: 'Эстетика лица',
            },
            {
                idType: 2,
                nameType: 'Эстетика тела',
            },       
            {
                idType: 3,
                nameType: 'Ногтевой сервис',
            },
            {
                idType: 4,
                nameType: 'Парикмахерские услуги',
            }
        ];






    let state = {
        type: [],
        view: [],
        specialist: [
            {
                name: 'Иванова Марина Иванова',
                class: 1,
                typeid: 1,
                viewid: 1,
            },
            {
                name: 'Иванова Марина Иванова',
                class: 1,
                typeid: 1,
                viewid: 1,
            },
            {
                name: 'Горнякова Марина Иванова',
                class: 1,
                typeid: 1,
                viewid: 1,
            },
            {
                name: 'Ларионова Марина Иванова',
                class: 1,
                typeid: 1,
                viewid: 2,
            },
            {
                name: 'Онова Марина Иванова',
                class: 1,
                typeid: 2,
                viewid: 1,
            }
        ]
    };

    const specialist = [
        {
            idSpec: 1,
            idPreSpec: null,
            dataChange:null,
            reasonChange: null,
            fullName:'Ларионова Лариса Георгиевна',
            fio:'Ларионова Л.Г.',
            speciality:'Мастер маникюра и педикюра, массажист',
            idView: 1,
            completed: false,
        },
        {
            idSpec: 2,
            idPreSpec: null,
            dataChange:null,
            reasonChange: null,
            fullName:'Иванова Марина Ивановна',
            fio:'Иванова М.И.',
            speciality:'Мастер маникюра и педикюра',
            idView: 1,
            completed: false,
        },
        {
            idSpec: 3,
            idPreSpec: null,
            dataChange:null,
            reasonChange: null,
            fullName:'Авдошкина Ольга Витальевна',
            fio:'Авдошкина О.В.',
            speciality:'Массажист',
            idView: 2,
            completed: false,
        },
        {
            idSpec: 4,
            idPreSpec: null,
            dataChange:null,
            reasonChange: null,
            fullName:'Крыжова Алина Константиновна',
            fio:'Крыжова А.К.',
            speciality:'Парикмахер',
            idView: 8,
            completed: false,
        },
        {
            idSpec: 5,
            idPreSpec: null,
            dataChange:null,
            reasonChange: null,
            fullName:'Кувшинова Юлия Ивановна',
            fio:'Кувшинова Ю.И.',
            speciality:'Мастер маникюра и педикюра',
            idView: 1,
            completed: false,
        },
        {
            idSpec: 6,
            idPreSpec: null,
            dataChange:null,
            reasonChange: null,
            fullName:'Ульянова Александра Петровна',
            fio:'Ульянова А.П.',
            speciality:'Мастер маникюра и педикюра',
            idView: 1,
            completed: false,
        },
        {
            idSpec: 7,
            idPreSpec: null,
            dataChange:null,
            reasonChange: null,
            fullName:'Барберонова Лариса Петровна',
            fio:'Барберонова Л.П.',
            speciality:'Мастер маникюра и педикюра',
            idView: 1,
            completed: false,
        },
        {
            idSpec: 8,
            idPreSpec: null,
            dataChange:null,
            reasonChange: null,
            fullName:'Ионова Лариса Владимировна',
            fio:'Ионова Л.В.',
            speciality:'Мастер маникюра и педикюра',
            idView: 1,
            completed: false,
        },
      ];

      const specService = [
        {
            id: 1,
            idView: 1,
            idType: 1,
            completed: false,
        },
        {
            id: 2,
            idView: 2,
            idType: 1,
            completed: false,
        },
        {
            id: 3,
            idView: 3,
            idType: 1,
            completed: false,
        },
        {
            id: 4,
            idView: 4,
            idType: 2,
            completed: true,
        },
        {
            id: 5,
            idView: 5,
            idType: 3,
            completed: true,
        },
        {
            id: 6,
            idView: 6,
            idType: 3,
            completed: true,
        },
        {
            id: 7,
            idView: 7,
            idType: 3,
            completed: true,
        },
        {
            id: 8,
            idView: 8,
            idType: 4,
            completed: true,
        },
      ];


      const dateTime = [
        {
            idDateTime: 1,
            Time: '10:00',
            Time: '01.01.2022',
            idView: 1,
            cabinet: 1,
            completed: false,
        },
        {
            idDateTime: 2,
            Time: '11:00',
            Time: '01.01.2022',
            idView: 1,
            cabinet: 1,
            completed: false,
        },
        {
            idDateTime: 3,
            Time: '12:00',
            Time: '01.01.2022',
            idView: 1,
            cabinet: 1,
            completed: false,
        },
        {
            idDateTime: 4,
            Time: '13:00',
            Time: '01.01.2022',
            idView: 1,
            cabinet: 1,
            completed: true,
        },
        {
            idDateTime: 5,
            Time: '14:00',
            Time: '01.01.2022',
            idView: 1,
            cabinet: 1,
            completed: true,
        },
        {
            idDateTime: 6,
            Time: '15:00',
            Time: '01.01.2022',
            idView: 1,
            cabinet: 1,
            completed: true,
        },
        {
            idDateTime: 7,
            Time: '15:30',
            Time: '01.01.2022',
            idView: 1,
            cabinet: 1,
            completed: true,
        },
        {
            idDateTime: 8,
            Time: '10:00',
            Time: '01.01.2022',
            idView: 2,
            cabinet: 2,
            completed: true,
        },
      ];
    
    
    const data = [
        {
            typeid: 1,
            name: 'Эстетика лица',
            type: [
                {
                    id: 1,
                    name: 'Пилинг',
                    price: 100
                },
                {
                    id: 2,
                    name: 'Визаж',
                    price: 100
                },
                {
                    id: 3,
                    name: 'Массаж',
                    price: 100
                },
                {
                    id: 4,
                    name: 'Архитектура бровей',
                    price: 100
                },
            ]
        },
        {
            typeid: 2,
            name: 'Ногтевой сервис',
            type: [
                {
                    id: 1,
                    name: 'Маникюр',
                    price: 100
                },
                {
                    id: 2,
                    name: 'Педикюр',
                    price: 100
                },
                {
                    id: 3,
                    name: 'Наращивание ногтей',
                    price: 100
                },
                {
                    id: 4,
                    name: 'Покрытие SHELLIAG',
                    price: 100
                },
            ]
        }
    ];
    



    return (
        <>
        {//<img src="./img/background.jpg" alt="LOGO"></img>        
        //<img src="C:\react\6\my-app\img\23.jpg)" alt="LOGO"></img>
        //<img src="C:\react\6\my-app\img\background.jpg" alt="LOGO"></img>
                //./../img/background.jpg'
        //<img src="file://localhost/C:\react\6\my-app\img\background.jpg" alt="LOGO" width="200" height="100" />
        
        //<img src={logobackgr} alt="LOGO" />
        
        //<img src={'../../img/background.jpg'} className='Logobackgr' alt="LOGO" />
        }
        <div className='logo'> LOGO </div> 
        
        <div className='Main'>
            <div className='Field' />
                <div className='Main__item'>

                    <div className='Main__header'>
                        <Menu></Menu>
                    </div>
                    
                    <div className='Main__body'>
                        <RegisterSpecialist activPar={activPar} data = {data} state = {state} viewService = {viewService} typeService = {typeService} specialist = {specialist} onChangeOption={onChangeOption}></RegisterSpecialist>
                        <BodyWeek activPar={activPar} viewService = {viewService} typeService = {typeService} specialist = {specialist}></BodyWeek>
                    </div>

                    <div className='Main__footer'>
                        <Footer></Footer>
                    </div>
                    
                </div>
            <div className='Field'></div>
        </div>
        </>
    )
}

export default Main;