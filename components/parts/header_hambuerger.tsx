import Link from 'next/link'
import { useState } from 'react';
import style from '../../styles/parts_styles/header_hamburger.module.scss';

const HeaderMenu = () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);

  const clickMenuBtn = () => {
    console.log(isMenuOpen);
    toggleMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  const clickMenuContent = () => {
    toggleMenuOpen(false);
  }

  return (
    <div className={style.menu}>
        <div className={`${style.hm} ${isMenuOpen ? style.hm_o : null }`}>
          <label 
            className={`${style.hmb} ${isMenuOpen ? style.hmb_o : null }`}
            onClick={() => clickMenuBtn()}
          >
            <span className={`${style.span} ${isMenuOpen ? style.span_o : null }`}></span>
          </label>

          <div className={`${style.hmc} ${isMenuOpen ? style.hmc_o : null }`}>
            <ul>
              <li  onClick={() => clickMenuContent()}>
                <a href='/#'>
                  ABOUT
                </a>
              </li>
              <li  onClick={() => clickMenuContent()}>
                <a href='/#skill'>
                  SKILL
                </a>
              </li>
              <li  onClick={() => clickMenuContent()}>
                <a href='/#works'>
                  WORKS
                </a>
              </li>
              <li  onClick={() => clickMenuContent()}>
                <a href='/#contact'>
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}



export default HeaderMenu;
