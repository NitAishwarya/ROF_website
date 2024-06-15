

import './ProjectIntrest.css';



const ProjectIntrest = () => {
   


  return (
    <div className="layout1">
      

        <div className="box">

            <div style={{textAlign:'-webkit-center'}}>
            <h1 className="head">Project Interest</h1>

            </div>


           <div className="inputs">
          
            <div className="input">
              <label className='label'>Type of Project</label>
              <br/>
             <select>
              <option value="" disabled selected>Choose Project</option>
              <option value="">Project A</option>
              <option value="">Project B</option>
              <option value="">Project C</option>
              <option value="">Project D</option>
             </select>
            </div>
            <br/>

            <div className='input'>           
              <label className='label'>Project Timline</label>
              <br/>
              <select>
              <option value="" disabled selected>Tentative Timline</option>
              <option value="">Immediately</option>
              <option value="">Within 3 months</option>
              <option value="">Within 6 months</option>
              <option value="">Not Sure</option>
             </select>

            </div>
            <br/>

            <div className="input"> 
            <label className='label'>Project location</label>
            <br/>
             <input className='location' type="text" placeholder="Enter Project Location"/>
          </div>
          </div>
          <br/>
          <br/>

          
        </div>
       </div>
       

  )
}

export default ProjectIntrest;