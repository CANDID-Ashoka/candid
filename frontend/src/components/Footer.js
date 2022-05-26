import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return (
      <>
<div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Twitter Analytics</a></li>
                            <li><a href="#">Media Bias Reportage</a></li>
                            <li><a href="#">Social Media Activism</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">University</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Internships</a></li>
                            <li><a href="#">Staff Openings</a></li>
                            <li><a href="#">Faculty Advisors</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social">
                        <a href="mailto:candid@ashoka.edu.in"><i class="bi bi-envelope"></i></a>
                        <a href="https://twitter.com/candid_ashoka"><i class="bi bi-twitter"></i></a>
                        <a href="#"><i class="bi bi-github"></i></a>
                        <p class="copyright">Centre for Analysis of Network Data and Insight Derivation © 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </>)
}
export default Footer