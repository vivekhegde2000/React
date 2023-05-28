import React from 'react';
import style from './findcoder.module.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <ol id={style.menublock}>
           <li><Link to="/comp1">Explore Work</Link></li>
           <li><Link to="/comp2">Hire Talents</Link></li>
           <li><Link to="/comp3">Dev board</Link></li>
           <li><Link to="/comp4">Challenges</Link></li>
        </ol>
    );
};

export default Menu;