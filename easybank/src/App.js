import './App.css';
import { useState } from 'react';

function App() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBurgerOpen = () => setMobileMenuOpen(true);

  const handleBurgerClose = () => setMobileMenuOpen(false);

  return (
    <div className='App'>
      <div className='nav-wrap'>
        <div className='logo'></div>
        <div className='selections'>
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
          <button>Blog</button>
          <button>Careers</button>
        </div>
        <div className='req'>
          <button className='btn-gradient'>Request Invite</button>
        </div>
        {!mobileMenuOpen && <div className='burger' onClick={handleBurgerOpen}></div>}
        {mobileMenuOpen && <div className='close' onClick={handleBurgerClose}></div>}

        {mobileMenuOpen && <div className='background-gradient' onClick={handleBurgerClose}>
          <div className='mobile-popup'>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>Blog</div>
            <div>Careers</div>
          </div>
        </div>}
      </div>

      <div className='tile bank'>
        <div className='text'>
          <h2>Next generation digital banking</h2>
          <p>Take your financial life online. Your EasyBank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <button className='btn-gradient'>Request Invite</button>
        </div>
        <div className='design'>
          <div className='mockup'></div>
        </div>
      </div>

      <div className='tile-expl'>
        <h3>Why Chose EasyBank?</h3>
        <p>We leverage Open Banking to turn your bank account into your financial hub. <br/> Control your fincances like never before.</p>
        <div className='feature-wrap'>
          <div className='feature'>
            <div className='icon online'></div>
            <h5>Online Banking</h5>
            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>

          <div className='feature'>
            <div className='icon budgeting'></div>
            <h5>Simple Budgeting</h5>
            <p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
          </div>

          <div className='feature'>
            <div className='icon onboarding'></div>
            <h5>Fast Onboarding</h5>
            <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
          </div>

          <div className='feature'>
            <div className='icon api'></div>
            <h5>Open API</h5>
            <p>Manages your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
          </div>
        </div>
      </div> 


      <div className='tile-article'>
        <h3>Latest Articles</h3>
        <div className='article-wrap'>
          <div className='article'>
            <div className='money bckgrnd'></div>
            <div className='author'>Claire Robinson</div>
            <div className='title'>Receive money in any currency with no fees</div>
            <div className='preview'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single</div>
          </div>

          <div className='article'>
          <div className='restaurant bckgrnd'></div>
            <div className='author'>William Hutton</div>
            <div className='title'>Treat yourself without worrying about money</div>
            <div className='preview'>Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you</div>
          </div>

          <div className='article'>
          <div className='plane bckgrnd'></div>
          <div className='author'>William Hutton</div>
            <div className='title'>Take your EasyBank card wherever you go</div>
            <div className='preview'>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you</div>
          </div>

          <div className='article'>
            <div className='confetti bckgrnd'></div>
            <div className='author'>Claire Robinson</div>
            <div className='title'>Our invite-only Beta account are now live!</div>
            <div className='preview'>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through our site</div>
          </div>
        </div>
      </div>

      <div className='tile footer'>
        <div className='float-left'>
          <div className='easybank'></div>
          <div className='social-wrap'>
            <div className='fb'></div>
            <div className='yt'></div>
            <div className='twt'></div>
            <div className='pnt'></div>
            <div className='inst'></div>
          </div>
        </div>
        
        <div className='footer-nav'>
          <div>About Us</div>
          <div>Careers</div>
          <div>Contact</div>
          <div>Support</div>
          <div>Blog</div>
          <div>Privacy Policy</div>
        </div>
        <div className='float-right'>
          <button className='btn-gradient'>Request Invite</button>
          <span>&copy; EasyBank. All&nbsp;Rights&nbsp;Resvered</span>
        </div>
      </div>





    </div>
  );
}

export default App;
