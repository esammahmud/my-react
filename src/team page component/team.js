import React, { useState } from 'react';
import './team.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import logoImage from './final_logo.png';
import leader1 from './esam mahmud.jpeg';
import demo from './demo.jpg';
import rover1 from './rover1.jpg';
import rover2 from './rover6.jpg';
import rover3 from './rover3.jpeg';
const Team = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    
    <div>
    <nav className="navbar">
      <div className="navbar-logo">
      
      <img src={logoImage} alt="" className="logo-img" />

      
      
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#project details">Project Details</a>
        <a href="#team">Team</a>
        <a href="#achievements">Achievements</a>
        <a href="#gallery">Gallery</a>
        <a href="#outreach&projects">Outreach & Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      
    </nav>
    <div className='slider'>
      <figure>
        <div className='slide'>
          
          <img src={rover1} alt='' />
        </div>
        <div className='slide'>
          
          <img src={rover3} alt='' />
        </div>
        <div className='slide'>
          
          <img src={rover2} alt='' />
        </div>
        <div className='slide'>
          
          <img src={rover3} alt='' />
        </div>
      </figure>
    </div>
    <div>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div>
      <h2 className='meet'> -- OUR TEAM LEADERS -- </h2>
    </div>
    <section>
      <div className='containerl'>
        <div className='contentl'>
          <div className='cardl'>
            <div className='card-contentl'>
              <div className='imagel'>
                <img src={leader1} />
              </div>
              <div className='media-iconsl'>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-github'></i>
              </div>
              <div className='name-professionl'>
                <span className='namel'>Someone Name</span>
                <span className='professionl'>web developer</span>
              </div>
              <div className='ratingl'>
                
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              </div>
              <div className='buttonl'>
              <button className='aboutMel'>About Me</button>
              <button className='hireMel'>Hire Me</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <section>
      <div className='containerr'>
        <div className='contentt'>
          <div className='cardd'>
            <div className='card-contentt'>
              <div className='imagee'>
                <img src={leader1} />
              </div>
              <div className='media-iconss'>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-github'></i>
              </div>
              <div className='name-professionn'>
                <span className='namee'>Someone Name</span>
                <span className='professionn'>web developer</span>
              </div>
              <div className='ratingg'>
                
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              </div>
              <div className='buttonn'>
              <button className='aboutMee'>About Me</button>
              <button className='hireMee'>Hire Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"></link>
    <div className='team'>
      <div className='containe'>
        <div className='section-title'>
          <h2>-- MEET THE TEAM --</h2>
          
        </div>
        <div className='row'>
          
          <div className='col-lg-6 mt-4'>
            <div className='member d-flex align-items-start'>
              <div className='teampic'>
                <img src={leader1} className='img-fluid' alt='team1'/>
              </div>
              <div className='member-info'>
                <h4>Esham</h4>
                <span>ronaldo ronaldo ronaldo suii </span>
                <p>ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo</p>
              </div>
              <div className='social'>
                <a href=''><i className='bi bi-facebook'></i></a>
                <a href=''><i className='bi bi-instagram'></i></a>
                <a href=''><i className='bi bi-linkedin'></i></a>
                <a href=''><i className='bi bi-whatsapp'></i></a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mt-4'>
            <div className='member d-flex align-items-start'>
              <div className='teampic'>
                <img src={leader1} className='img-fluid' alt='team1'/>
              </div>
              <div className='member-info'>
                <h4>Esham</h4>
                <span>ronaldo ronaldo ronaldo suii </span>
                <p>ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo</p>
              </div>
              <div className='social'>
                <a href=''><i className='bi bi-facebook'></i></a>
                <a href=''><i className='bi bi-instagram'></i></a>
                <a href=''><i className='bi bi-linkedin'></i></a>
                <a href=''><i className='bi bi-whatsapp'></i></a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mt-4'>
            <div className='member d-flex align-items-start'>
              <div className='teampic'>
                <img src={leader1} className='img-fluid' alt='team1'/>
              </div>
              <div className='member-info'>
                <h4>Esham</h4>
                <span>ronaldo ronaldo ronaldo suii </span>
                <p>ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo</p>
              </div>
              <div className='social'>
                <a href=''><i className='bi bi-facebook'></i></a>
                <a href=''><i className='bi bi-instagram'></i></a>
                <a href=''><i className='bi bi-linkedin'></i></a>
                <a href=''><i className='bi bi-whatsapp'></i></a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mt-4'>
            <div className='member d-flex align-items-start'>
              <div className='teampic'>
                <img src={leader1} className='img-fluid' alt='team1'/>
              </div>
              <div className='member-info'>
                <h4>Esham</h4>
                <span>ronaldo ronaldo ronaldo suii </span>
                <p>ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo</p>
              </div>
              <div className='social'>
                <a href=''><i className='bi bi-facebook'></i></a>
                <a href=''><i className='bi bi-instagram'></i></a>
                <a href=''><i className='bi bi-linkedin'></i></a>
                <a href=''><i className='bi bi-whatsapp'></i></a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mt-4'>
            <div className='member d-flex align-items-start'>
              <div className='teampic'>
                <img src={leader1} className='img-fluid' alt='team1'/>
              </div>
              <div className='member-info'>
                <h4>Esham</h4>
                <span>ronaldo ronaldo ronaldo suii </span>
                <p>ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo</p>
              </div>
              <div className='social'>
                <a href=''><i className='bi bi-facebook'></i></a>
                <a href=''><i className='bi bi-instagram'></i></a>
                <a href=''><i className='bi bi-linkedin'></i></a>
                <a href=''><i className='bi bi-whatsapp'></i></a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mt-4'>
            <div className='member d-flex align-items-start'>
              <div className='teampic'>
                <img src={leader1} className='img-fluid' alt='team1'/>
              </div>
              <div className='member-info'>
                <h4>Esham</h4>
                <span>ronaldo ronaldo ronaldo suii </span>
                <p>ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo</p>
              </div>
              <div className='social'>
                <a href=''><i className='bi bi-facebook'></i></a>
                <a href=''><i className='bi bi-instagram'></i></a>
                <a href=''><i className='bi bi-linkedin'></i></a>
                <a href=''><i className='bi bi-whatsapp'></i></a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mt-4'>
            <div className='member d-flex align-items-start'>
              <div className='teampic'>
                <img src={leader1} className='img-fluid' alt='team1'/>
              </div>
              <div className='member-info'>
                <h4>Esham</h4>
                <span>ronaldo ronaldo ronaldo suii </span>
                <p>ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo</p>
              </div>
              <div className='social'>
                <a href=''><i className='bi bi-facebook'></i></a>
                <a href=''><i className='bi bi-instagram'></i></a>
                <a href=''><i className='bi bi-linkedin'></i></a>
                <a href=''><i className='bi bi-whatsapp'></i></a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mt-4'>
            <div className='member d-flex align-items-start'>
              <div className='teampic'>
                <img src={leader1} className='img-fluid' alt='team1'/>
              </div>
              <div className='member-info'>
                <h4>Esham</h4>
                <span>ronaldo ronaldo ronaldo suii </span>
                <p>ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo ronaldo</p>
              </div>
              <div className='social'>
                <a href=''><i className='bi bi-facebook'></i></a>
                <a href=''><i className='bi bi-instagram'></i></a>
                <a href=''><i className='bi bi-linkedin'></i></a>
                <a href=''><i className='bi bi-whatsapp'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  );
  
};


export default Team;
