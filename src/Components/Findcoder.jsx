import React from 'react';
import style from './findcoder.module.css'
import Logo from './Logo';
import Menu from './Menu';
import Btn from './Btn';
const Findcoder = () => {
    return (
        <section id={style.nav}>
            <article>
                <div className={style.Logo}><Logo/></div>
                <div className={style.Menu}><Menu/></div>
                <div className={style.Btn}><Btn/></div>
            </article>
        </section>
    );
};

export default Findcoder;