import React from 'react';

import {GrContactInfo} from "@react-icons/all-files/gr/GrContactInfo"
import {FaWhatsapp} from "@react-icons/all-files/fa/FaWhatsapp"
import {FaGithub} from "@react-icons/all-files/fa/FaGithub"
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin"
import {SiFiverr} from "@react-icons/all-files/si/SiFiverr"

import "../sass/contact.sass"

function Contact() {
    return (
        <section id='contact'>
            <div className="section_title_container">
                <h1>
                    Contact Info <GrContactInfo />
                </h1>
                <p>(Call Me Maybe)</p>
            </div>
            <div className='contact_container'>
                <div className='networks_container'>
                    <h2> My Networks</h2>
                    <div className='icons_section'>
                        <a href='https://wa.me/573213881334' target={"_blank"}><FaWhatsapp /></a> 
                        <a href='https://github.com/ElHurta' target={"_blank"}><FaGithub/></a>
                        <a href='https://www.linkedin.com/in/juan-david-hurtado-0244b5188/' target={"_blank"}><FaLinkedin/></a>
                        <a href='https://es.fiverr.com/juandavidhur943' target={"_blank"}><SiFiverr/></a>
                    </div>
                </div>
                <div className='message_container'>
                    <h2>Or Send Me A Message!</h2>
                    <form className='contact_form' method='POST' netlify-honeypot="bot-field" data-netlify="true" name="contact">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />

                        <label>
                            Your Email
                            
                        </label>
                        <input type={"email"} name='email'/>

                        <label>
                            Message
                            
                        </label>
                        <textarea type={"textarea"} name='message'/>
                        <button className='send_msg_btn' type='submit'>Send ✨</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export {Contact};
