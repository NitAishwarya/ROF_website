import React from "react";
import { Link } from "react-router-dom";
const AdditionalRequ = () => {
  return (
    <>
      <div>
        {/* form  */}

        <div className="flex items-center justify-center">
          <div class="rounded-2xl max-w-md w-full border-4 border-[#632E04]">
            <h2 class="text-xl font-bold mb-4 text-center text-[#131313]" style={{fontFamily:'Poppins', fontWeight:'500'}}>
              Additional Requirements & Notes
            </h2>
            <div class="mb-4" style={{textAlign:'justify'}}>
              <label for="requirements" class="block font-medium mb-2">
                Specific Requirements or Preferences
              </label>
              <textarea
                id="notes"
                class="w-full border border-gray-300 rounded-md px-3 py-2"
                rows="3"
                placeholder="Enter any specific requirements or preferences"
              ></textarea>
            </div>
            <div class="mb-4" style={{textAlign:'justify'}}>
              <label for="notes" class="block font-medium mb-2">
                Notes for sales person
              </label>
              <textarea
                id="notes"
                class="w-full border border-gray-300 rounded-md px-3 py-2"
                rows="3"
                placeholder="Internal Notes"
              ></textarea>
            </div>
            {/* <div class=" flex flex-wrap justify-evenly ">
              <button class="bg-red-950 hover:bg-gray-400 text-white font-bold py-2 px-8 rounded-md ">
                &larr;
              </button>
              <Link to="/AssignLead">
                <button class=" bg-red-950 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-md">
                  Next &rarr;
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdditionalRequ;