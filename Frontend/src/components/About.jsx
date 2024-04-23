import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About Us</h1>
                    <p>The only thing we are serious sbout is food.</p>
                </div>
                <p className='mid'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae debitis voluptate vero odit voluptatibus minima vitae modi, cum ullam obcaecati dignissimos officiis necessitatibus voluptates commodi rem nisi fugiat fugit quae itaque excepturi consequuntur pariatur optio. Accusantium fuga minus quibusdam ea illum iusto sint maiores, ad saepe dicta quod pariatur facere.</p>
                <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  );
}

export default About;