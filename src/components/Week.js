import Day from './Day';
import HeaderWeek from './HeaderWeek';
import styles_Week from './Week.css';
import React from 'react';
import PropTypes from 'prop-types';


function Week({ week}) {
    return (
        <div className ='Week__Week'>
            <HeaderWeek headerWeek = 'Неделя'></HeaderWeek>
            <div className ='Week__Days'>
               
                <Day day = ' 1 ' week = {week}></Day>
                <Day day = '2' week = {week}></Day>
                <Day day = '3' week = {week}></Day>
                <Day day = '4' week = {week}></Day>
                <Day day = '5' week = {week}></Day>
                <Day day = '6' week = {week}></Day>
                <Day day = '7' week = {week}></Day>

                {/*    <Day className ='Day' day = ' 1 ' week = {week}></Day>
                    <Day className ='Day' day = '2' week = {week}></Day>
                    <Day className ='Day' day = '3' week = {week}></Day>
                    <Day className ='Day' day = '4' week = {week}></Day>
                    <Day className ='Day' day = '5' week = {week}></Day>
                    <Day className ='Day' day = '6' week = {week}></Day>
                    <Day className ='Day' day = '7' week = {week}></Day>
                    */}
                   
            </div>          
        </div>
    )
}

Week.propTypes = {
    week: PropTypes.arrayOf(PropTypes.object),
    // onItemClick: PropTypes.func,
    // onItemDoubleClick: PropTypes.func,
  }
  
  // TodoList.propTypes = {
  //   items: PropTypes.arrayOf(PropTypes.shspe(shapeTypes {
  //     title: PropTypes.string,
  //     completed: PropTypes.bool
  //   })),
  // }
  
  
  
  Week.defaultProps = {
    week: [],
    // onItemClick: () => {
    // },
    // onItemDoubleClick: () => {
    // },
  }

export default Week;