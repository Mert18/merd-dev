
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import classes from './layout.module.css';
import ThemeToggler from './themeToggler';
import randomColor from 'randomcolor';

const Header = () => {

    const [color, setColor] = useState("white");

    useEffect(() => {
        setTimeout(() => {
            setColor(randomColor());
        },4000)
    }, [color]);

    return (
        <div className={classes.header}>
            <div className={classes.shadow}>

            </div>

            <div className={classes.header__title}>
                <Link href="/">
                    <svg viewBox="0 0 165.89 89.53">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path fill={color}
                                    d="M15.58,21.89a9.13,9.13,0,0,0-2.73-7.07q-2.72-2.53-5.25-2.54Q0,12.28,0,7.53,0,2,5.47,2a37.17,37.17,0,0,1,5.91.88,36.84,36.84,0,0,0,6.67.89A27.2,27.2,0,0,0,24.33,3a23.62,23.62,0,0,1,4.39-.76c2.28,0,3.81.57,4.57,1.71S34.61,9.75,35,17.86s.51,17.51.51,28.23l-.26,22c0,3.88.24,6.31.7,7.28a7.41,7.41,0,0,0,3,2.85A13.82,13.82,0,0,0,44.45,80a12.44,12.44,0,0,1,4.62,1.23c1,.54,1.46,1.73,1.46,3.52,0,3-2.17,4.5-6.48,4.5a49.48,49.48,0,0,1-9.52-1,48.7,48.7,0,0,0-9.52-1,55.73,55.73,0,0,0-9.33,1,54.26,54.26,0,0,1-8.31,1C2.62,89.28.25,87.9.25,85.16c0-2,.45-3.4,1.33-4a11.06,11.06,0,0,1,4.88-1.42,12.44,12.44,0,0,0,5.76-2A6.72,6.72,0,0,0,15,73.59a58.7,58.7,0,0,0,.57-10.36Zm57.61-.26a5.87,5.87,0,0,0-2.46-4.72,8.42,8.42,0,0,0-5.36-2q-6.32,0-14.89,7.14-5,4.4-7.31,4.39c-2.18,0-3.28-1-3.28-2.92q0-6.45,11.84-15T73.07,0A20,20,0,0,1,87.25,5.76a18.16,18.16,0,0,1,6.08,13.61l-.26,51.16a9,9,0,0,0,9,9.12q6.45,0,6.45,5.13,0,4.5-6.73,4.5-.77,0-7.54-.83a97.09,97.09,0,0,0-11.37-.82,73.25,73.25,0,0,0-12.82,1,50.58,50.58,0,0,1-6.73,1,5.94,5.94,0,0,1-4-1.48,4.78,4.78,0,0,1-1.71-3.8c0-2.38,1.47-3.59,4.43-3.59a12.64,12.64,0,0,0,7.6-2.59c2.36-1.73,3.54-4.31,3.54-7.77Zm57.87,0a5.88,5.88,0,0,0-2.45-4.72,8.45,8.45,0,0,0-5.37-2q-5,0-12.43,5.76T101,26.47a4.29,4.29,0,0,1-2.72-.95,2.81,2.81,0,0,1-1.19-2.22q0-5.7,11.14-14.37T130.94.25q13.42,0,18.36,11.27,1.77,3.42,1.77,37.49l-.25,21.52c0,2.71.72,4.73,2.15,6.08a13.3,13.3,0,0,0,6.59,2.91c2.95.6,4.75,1.29,5.38,2.12a4.54,4.54,0,0,1,.95,2.89c0,3.16-2.07,4.75-6.23,4.75-.59,0-3.12-.28-7.61-.83a96,96,0,0,0-11.43-.82,60.71,60.71,0,0,0-10.21,1,56.47,56.47,0,0,1-9.21,1,5.94,5.94,0,0,1-4-1.48,4.77,4.77,0,0,1-1.71-3.78q0-4,5.89-4.56c3.92-.37,6.52-1.41,7.78-3.1a10.18,10.18,0,0,0,1.9-6.31Z" />
                            </g>
                        </g>
                    </svg>
                </Link>
                    
            </div>

            <div className={classes.toggler}>
                <ThemeToggler />
            </div>

            <div className={classes.header__nav}>
                <div className={classes.linkbox}>
                    <Link href="/tmi">TMI</Link>
                </div>
                <div className={classes.linkbox}>
                    <Link href="/blog">BLOG</Link>
                </div>
                <div className={classes.linkbox}>
                    <Link href="/about">ABOUT</Link>
                </div>

                <div className={classes.linkbox}>
                    <Link href="/projects">PROJECTS</Link>
                </div>
                <div className={classes.linkbox}>
                    <Link href="/illustrations">ILLUSTRATIONS</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header
