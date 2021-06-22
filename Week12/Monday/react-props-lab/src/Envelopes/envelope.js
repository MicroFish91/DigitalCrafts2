import React from 'react';
import './styles.css';
import stamp from './stamp2.png';

const Envelope = () => {
  return (
    <>
      <div className="envelope m-3">
          <div className="envelope-to">
              <div>
                <b>Veronica Lino</b> <br />
                915 Franklin St. <br />  
                Houston, TX 77002
              </div>

              <span className="imgCont">
                <img src={stamp} alt="" />
              </span>
          </div>

          <div className="envelope-from">
            <span>
                <b>Peggy Lino</b> <br />
                802 Cactus Bend Dr. <br />  
                Pflugerville, TX 78660
            </span>
          </div>
      </div>
    </>
  )
}

export default Envelope
