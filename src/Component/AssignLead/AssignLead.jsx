import React from "react";

import { Link } from "react-router-dom";
function AssignLead () {
  return (
    <>
      <div>
        {/* form  */}
        <div class=" flex items-center justify-center ">
          <div class="p-6 pt-0 rounded-2xl max-w-md border-4 border-[#632E04] ">
            <h2 class="text-2xl font-semibold text-[#131313] text-center mb-6" >
              Assign Lead
            </h2>

            <form>
              <div class="mb-4" >
                <label for="email" class="block text-black font-bold mb-2" style={{textAlign:'justify'}}>
                  Assign to Team
                </label>
                <div style={{textAlign:'-webkit-left'}}>
                  <form >
                    <select
                    style={{width:'358px'}}
                      id="countries"
                      class=" border-2 border-text-black   text-sm rounded-lg   block w-full p-2.5 dark: bg-slate-50-700  dark: text-black  "
                    >
                      <option>Choose Teams</option>
                      <option>Teams 1</option>
                      <option>Teams 2</option>
                      <option>Teams3</option>
                      <option>Teams4</option>
                    </select>
                  </form>
                </div>
              </div>

              <div class="">
                <p className="text-black font-bold">
                  Assign to Sales Executive
                </p>

                <div class="max-w-sm mx-auto">
                  <form class="max-w-sm mx-auto">
                    <select
                      id="countries"
                      class=" border-2 border-text-black text-sm rounded-lg   block w-full p-2.5 dark: bg-slate-50-700  dark: text-black  "
                    >
                      <option>Choose Sales Executive</option>
                      <option>Sales Executive 1</option>
                      <option>Sales Executive 2</option>
                      <option>Sales Executive3</option>
                      <option>Sales Executive4</option>
                    </select>
                  </form>

                  
                </div>
              </div>

            
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignLead;