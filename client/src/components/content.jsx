import React from 'react';
import style from "./content.module.css";
import MyGoals from './MyGoals/ToDo';

const Content = () =>{
   return(
       <div className={style.Content}>
      <MyGoals />
       </div>
   ); 
}

export default Content;