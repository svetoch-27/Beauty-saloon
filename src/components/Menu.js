import './Menu.css';

function Menu({ menu, ok}) {
    return (
        <div>
            <nav>
                <ul className = "topmenu">
                    <li className = "Menu__item">
                        <a href="index.html">Главная</a>
                    </li>

                    <li className = "Menu__item, down" >
                        <a href="index.html">Акции</a>
                        <ul  className = "submenu">
                            <li className = "Menu__item">
                                <a href="index.html">Акции дня</a>
                            </li>

                            <li className = "Menu__item">
                                <a href="index.html">Акции месяца</a>
                            </li>
                                                        
                        </ul>
                    </li>

                    <li className = "Menu__item">
                        <a href="index.html">Прейскурант</a>
                    </li>

                    <li className = "Menu__item">
                        <a href="index.html">Запись</a>
                    </li>

                    <li className = "Menu__item">
                        <a href="index.html">Отзывы</a>
                    </li>

                    <li className = "Menu__item">
                        <a href="index.html">Контакты</a>
                    </li>

                    <li className = "Menu__item">
                        <a href="index.html">Войти/Регистрация</a>
                    </li>
                </ul>
                </nav>
                {/*
                <button className = "Menu__item">Главная</button>
                <button className = "Menu__item">Акции</button>
                <button className = "Menu__item">Прейскурант</button>
                <button className = "Menu__item">Запись</button>
                <button className = "Menu__item">Отзывы</button>
                <button className = "Menu__item">Контакты</button>
                <button className = "Menu__item">Войти/Регистрация</button>
                //---------------------------------------
                <div className = "Menu__item">Главная</div>
                <div className = "Menu__item">Акции</div>
                <div className = "Menu__item">Прейскурант</div>
                <div className = "Menu__item">Запись</div>
                <div className = "Menu__item">Отзывы</div>
                <div className = "Menu__item">Контакты</div>
                <div className = "Menu__item">Войти/Регистрация</div>
                */}
       </div>
    )
}

export default Menu;