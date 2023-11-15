import React from 'react'
import Logo from '../images/saturation.png';
import Back from '../images/logo512.png';
import KS from '../images/ks.png';

export default function Header(){ //child

    const WelHome = ["My Name is Saad im a developer WebSite", "You can take a look at my work below","Hello World Welcome to My Portfolio"];

    const [index, setIndex] = React.useState(2)
        React.useEffect(() => { 
                setTimeout(() => {
                    if (index <= WelHome.length - 2){
                setIndex(index + 1)
            }else{
                setIndex(index => index = 0);
            }
        }, 4000);
        
        }, [index])

    return (
        <div className="content-bar">
            <div className="r-person change">
                <p>{WelHome[index]}</p>
            </div>
            <div className="l-person">
                <img src={KS} />
            </div>
        </div>
    )
}

export function Footer(){ //child
    return (
        <footer>
            <small>© 2023 Saadcraft development. All rights reserved.</small>
        </footer>
    )
}

export function NavBar(props) { 
                return (
                        <nav className={props.darkmode ? "nav-bar dark": "nav-bar"}>
                                    <img src={Logo} onClick={props.handleMain} />
                                        <h2 onClick={props.handleMain}>Khouani saad</h2>
                                        <ul>
                                            <li onClick={props.handleAbout}>About</li>
                                        </ul>
                                        <div className="toggler" onClick={props.toggleDarkMode}>
                                            <p className="toggler--light">Light</p>
                                            <div className="toggler--slider" >
                                                <div className="toggler--slider--circle"></div>
                                            </div>
                                            <p className="toggler--dark">Dark</p>
                                        </div>
                                </nav>
                )
}

/* export const navBar = <nav className="nav-bar">
<img src={logo} />
    <h2>React</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav> */

export const imgBack = <div className='backImg'><img src={Back}/></div>