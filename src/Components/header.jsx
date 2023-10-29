import logo from '../images/logo192.png';
import back from '../images/logo512.png';

export default function Header(){ //child
    return (
        <div className="content-bar">
            <h1>Fun facts about React</h1>
            <ol>
                <li>was first released in 2023</li>
                <li>was originally created by jordan walke</li>
                <li>has well 100k start on github</li>
                <li>is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile app</li>
            </ol>

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
                                    <img src={logo} onClick={props.handleMain} />
                                        <h2 onClick={props.handleMain}>React</h2>
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

export const imgBack = <div className='backImg'><img src={back}/></div>