import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faBuilding} from "@fortawesome/free-solid-svg-icons";

const MyListedProperty = () => {
    return (
      
            <div className="card  bg-base-100 px-4 py-10 justify-around items-center flex flex-col lg:flex-row">
                
                <div className="radial-progress text-rose-500" style={{"--value":"100", "--size": "4rem", "--thickness": "4px"}} role="progressbar"><FontAwesomeIcon className='text-xl bg-red-200 px-4 p-3 rounded-full' icon={faBuilding} /></div>

                <div className='ml-2'>
                    <h2 className='text-xl font-semibold'> My Listed Propety</h2>
                    <p className='text-lg font-semibold text-red-400 '>1239+</p>
                </div>
            </div>
      
    );
};

export default MyListedProperty;