import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    const onSelectColor = (choice) => {
        props.onChangeBckColor(choice)
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'}>{props.aboutText}</Link>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.onToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
                {props.mode === 'dark' ?                        
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                <label className="nav-link dropdown-toggle form-check-label" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Dark Mode
                                </label>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li><label className="dropdown-item" onClick={()=>onSelectColor('grey')}>Default</label></li>
                                    <li><label className="dropdown-item" onClick={()=>onSelectColor('green')}>Green</label></li>
                                    <li><label className="dropdown-item" onClick={()=>onSelectColor('blue')}>Blue</label></li>
                                </ul>
                                </li>
                            </ul>
                    :
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Light Mode</label>
                }
                
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

NavBar.defaultProps = {
    title: "NavBar Title",
    aboutText: "About"
}




