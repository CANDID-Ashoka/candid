import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
      <>
<footer class="footer-distributed">
			<div class="footer-left">
				<h3>Company<span>logo</span></h3>
				{/* <p class="footer-links">
					<a href="#" class="link-1">Home</a>
					<a href="#">Blog</a>
					<a href="#">People</a>
					<a href="#">Projects</a>
					<a href="#">Publications</a>
					<a href="#">Contact</a>
				</p> */}
				<p class="footer-company-name">CANDID © 2022</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Ashoka University, NH44</span> Rajiv Gandhi Education City, Haryana</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 9812345678</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:candid@ashoka.edu.in">candid@ashoka.edu.in</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About us</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>
				<div class="footer-icons">
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>
				</div>
			</div>
		</footer>
    </>)
}
export default Footer