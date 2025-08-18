import React from 'react'

export default function Footer(props) {

    // style = () => {
        
    // }
  return (
    <>
        <footer className={`pt-4 pb-2 mt-5 border-top border-secondary bg-${props.mode}`}>
            <div className={`container text-center text-md-start text-${props.textColor}`}>
                <div className="row">
                    {/* <!-- Company Info --> */}
                    <div className="col-md-3 mb-4">
                        <h5 className={`text-uppercase text-${props.textColor}`}>MyCompany</h5>
                        <p>Building smart solutions for the future. Let's connect and grow together!</p>
                    </div>

                    {/* <!-- Quick Links --> */}
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className={`list-unstyled text-${props.textColor}`}>
                            <li><a href="#" className= {`text-${props.textColor} text-decoration-none`}>Home</a></li>
                            <li><a href="#" className={`text-${props.textColor} text-decoration-none`}>About</a></li>
                            <li><a href="#" className={`text-${props.textColor} text-decoration-none`}>Services</a></li>
                            <li><a href="#" className={`text-${props.textColor} text-decoration-none`}>Contact</a></li>
                        </ul>
                    </div>

                    {/* <!-- Contact Info --> */}
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase">Contact</h5>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-geo-alt-fill me-2"></i>Bangalore, India</li>
                            <li><i className="bi bi-envelope-fill me-2"></i>email@example.com</li>
                            <li><i className="bi bi-phone-fill me-2"></i>+91 9876543210</li>
                        </ul>
                    </div>

                    {/* <!-- Social Media --> */}
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className={`text-center text-${props.textColor} py-2 mt-3 border-top border-secondary`}>
                <small>&copy; 2025 MyCompany. All rights reserved.</small>
            </div>
        </footer>
    
    
    </>
  )
}
