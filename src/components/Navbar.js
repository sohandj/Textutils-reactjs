import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
    {/* {console.log('props' ,props)} */}
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            {/* "set title here " default title value */}
            <Link className="navbar-brand" to="/">{props.title|| 'set title here'}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className={`nav-link active ${props.active}`} aria-current="page" to="/">
                        <button type="button" className={`btn btn-${props.mode}`}>{props.home}</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/about">
                        <button type="button" className={`btn btn-${props.mode}`}>{props.about}</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link active`} to="/accrodion">
                        <button type="button" className={`btn btn-${props.mode}`}>{props.accrodion}</button>
                        </Link>
                    </li>
                </ul>
                {/* Mode check box */}
                <form className="d-flex" role="search">
                    <div className="form-check form-switch ">
                        <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="switchCheckDefault" />
                        <label className={`form-check-label text-${props.textColor}`} htmlFor="switchCheckDefault">Dark Mode</label>
                    </div>
                </form>
            </div>
        </div>
    </nav>
    
    </>
  )
}

// setting datatypes for props
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    home : PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}


// not working
// need to find sol or check version docs
Navbar.defaultProps = {
    title: 'Set Title Here',
    home: 'Set Home here',
    about: 'Set About Here'
}