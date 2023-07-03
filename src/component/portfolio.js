import React,{useRef} from "react";
import { Link } from 'react-router-dom';
import './portfolio.css'
import emailjs from '@emailjs/browser';
import './images/portfolioImages/profile.JPG'
import './portfolio.css'
import './images/portfolioImages/abel.png'
import './images/portfolioImages/profile.JPG'
import agecalculator from './images/portfolioImages/agecalculator.jpg'
import bmi from './images/portfolioImages/bmi.jpg'
import tictactoe from'./images/portfolioImages/tictactoe.jpg'
import calculator from './images/portfolioImages/calculator.jpg'


function Portfolio(){
    const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8v69ong', 'template_71ha3g1', form.current, 'hZjAJVnXtNgPlUfi1')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
          }, (error) => {
              console.log(error.text);
          });
      };
   
    return(
        <div>
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark navbarScroll">
        <div class="container">
            
            <div class="header__content">
                <div class="header__logo-container">
                  <div class="header__logo-img-cont">
                    <img src="images/portfolioImages/profile.JPG" alt="Ram Maheshwari Logo Image" class="header__logo-img"/>
                    
                </div>
                <span class="header_logo-sub navbar-brand">Abel</span>
                  </div>
                </div>
                
                
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    </nav>

    <div>
        <section class="bgimage" id="home"></section>
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 maintext">
                <h2 class="maintitle">Hi, it's me Abel</h2>
                <p class="maindiscription">I am a Fullstack Developer</p>
            </div>
            </div>
        </div>
        </div>
        <section id="about">
        <div class="container mt-4 pt-4">
            <h1 className="text-center">About Me</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img src="images/portfolioImages/profile.JPG" class= "imageAboutPage" alt=""/>
                </div>

                <div className="col-lg-8">
                    <div className="row mt-3">
                        <div className="col-md-6">
                            
             <h1 className=' '> Abel Eshetu</h1>  
                                    
                              

                        </div>
                    <p> I completed my bachelor of science in Mechanical Engineering at Addis Ababa University and i have certificate in Graphic Design from Birhanena Selam collage and Videography and Photography From TOM.
                        
                    </p>
                    
                        
                    </div>
                    <div className="row mt-3">
                        <p> Since I have a great interest in IT,I recently took a short course on Fullstack Website Development at sage.I have gained a vast knowledge about HTML,CSS,JavaScript,React,NodeJs,ExpressJs,Mongodb and other skills that are related to the frontend and backend of a Website Development.I also have worked on diffrent Projects throughout my learning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        <section id="portfolio">
        <div className="container mt-3">
            <h2 className="text-center">Portfolio</h2>
            <div className="row">
            <div className="col-lg-4 mt-4">
                    <div className="card">
                        <img className="card-img-top" src={tictactoe} alt="Card image" style={{width:'100%'}}/>
                        <div className="card-body">
                            <h4 className="card-title">TicTacToe Game</h4>
                            <p className="card-text">TicTacToe Game, built with HTML, CSS, and JavaScript.</p>
                            <div className="text-center">
                            <Link className="btn btn-success" to="/tictactoe">Link</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={calculator} alt="Card image" style={{width:'100%'}}/>
                        <div className="card-body">
                            <h4 className="card-title">Calculator</h4>
                            <p className="card-text">Calculator, built with HTML, CSS, and JavaScript. It offers basic arithmetic operations and a clean, responsive design.</p>
                            <div className="text-center">
                            <Link className="btn btn-success" to="/calculator">Link</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        <img className="card-img-top" src={agecalculator} alt="Card image" style={{width:'100%'}}/>
                        <div className="card-body">
                            <h4 className="card-title">Age Calculator</h4>
                            <p className="card-text">Age Calculator, built with HTML, CSS, and JavaScript.calculates Age when date of birth is given.</p>
                            <div className="text-center">
                            <Link className="btn btn-success" to="/age">Link</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4">
                    <div className="card portfolioContent">
                        <img className="card-img-top" src={bmi} alt="Card image" style={{width:'100%'}} />
                        <div className="card-body">
                            <h4 className="card-title">Body-Mass Index Calculator</h4>
                            <p className="card-text">Calculator, built with HTML, CSS, and JavaScript. It calculates BMI ratio </p>
                            <div className="text-center">
                            <Link className="btn btn-success" to="/bmi">Link</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
          </div>  
    </section>
           
    
    <section id="contact">
        <div className="container mt-3 contactContent">
           <div><h1 className="text-center">Contact Me</h1></div> 

                <div class="container p-3 mb-2 bg-body-tertiary col-lg-6 ">
                    
                    <form ref={form} onSubmit={sendEmail}> 
                        <input type="text" name="user_name" className="form-control form-control-lg" placeholder="Name"/>
                        <input type="email" name="user_email" className="form-control mt-3" placeholder="Email"/>
                        <div className="mb-3 mt-3">
                            <textarea className="form-control"  rows="5" id="comment" name="message" placeholder="Project Details"></textarea>
                        </div>
                    </form>
                     {/* <button type="submit"  href="https://t.me/abelaet1" class="btn btn-success mt-3">Contact Me</button> */}
                     <button type="button" class="btn btn-success mt-3" onClick={() => window.open('https://t.me/abelaet1')}>Contact Me</button>
                    
                </div>

            
        </div>
    </section>
    <footer id="footer">
        <div className="container-fluid">
           
            <div className="social-icons mt-4">
            <a href="https://t.me/abelaet1" target="_blank"><i className="fab fa-telegram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100081602199713&mibextid=ZbWKwL" target="_blank"><i className="fab fa-facebook"></i></a>
                <a href="https://instagram.com/abel.et?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@abela.et?_t=8deciPuJvcc&_r=1" target="_blank"><i className="fab fa-tiktok"></i></a>
                <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>

                
            </div>
        </div>
    </footer>

    </div> 
    )
}
export default Portfolio;