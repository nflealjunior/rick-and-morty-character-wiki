import React from 'react';
import AdultSwimLogo from '../../assets/images/adult-swim-logo.png';
import './footer.scss';

function Footer() {

  return (
    <div className="footer-component">
      <div className="row">
        <div className="col-lg-10">
          <p>
            The information contained in this website is for general information purposes only. 
            The information is provided by <a href="https://rickandmortyapi.com/" target="_blank">
            The Rick and Morty API</a>, owned by <a href="https://www.adultswim.com/" 
            target="_blank">[adult swim]</a> and while we endeavour to keep the information up to date and 
            correct, we make no representations or warranties of any kind, express or implied, about 
            the completeness, accuracy, reliability, suitability or availability with respect to the 
            website or the information, products, services, or related graphics contained on the 
            website for any purpose. Any reliance you place on such information is therefore strictly 
            at your own risk.

            In no event will we be liable for any loss or damage including without limitation, indirect or 
            consequential loss or damage, or any loss or damage whatsoever arising from loss of data or 
            profits arising out of, or in connection with, the use of this website.

            Every effort is made to keep the website up and running smoothly. However, we take no 
            responsibility for, and will not be liable for, the website being temporarily unavailable 
            due to technical issues beyond our control.
          </p>
        </div>
        <div className="col-lg-2">
          <a href="https://www.adultswim.com/" target="_blank">
            <img className="adult-swim-logo" src={AdultSwimLogo} />
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;