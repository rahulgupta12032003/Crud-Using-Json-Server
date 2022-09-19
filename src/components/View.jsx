import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'

const View = () => {

    const { id } = useParams();
    // console.log(id)

    const [person , setPerson] = useState([])

    const personData = async () => {
        axios.get(`http://localhost:8080/users/${id}`).then((res) => {
           setPerson(res.data)
        });
    }

    useEffect(() => {
        personData();
    },[]);

    console.log(person);

  return (
    <>

      <h2 className=" text-center mt-20 text-3xl font-bold text-gray-500">👇👇👇 The Data of the Selected Person is shown below 👇👇👇 </h2>
      <div className="h-500 w-[50%] bg-lime-300 justify-center items-center flex flex-col rounded-2xl m-auto mt-[3%] border-solid border-2 border-sky-500">
        {
          person && (
              <>  
                  <div className="flex items-center mt-10 h-55  w-[80%] justify-around border-solid border-2 border-green-300 bg-amber-200">
                    <h3 className=" font-bold text-red-400 text-2xl  ">NAME :</h3>
                    <p className="text-blue-900 font-semibold text-xl float-left">{person.name}</p>
                  </div>
                  <div className="flex items-center mt-5 h-55  w-[80%] justify-around border-solid border-2 border-green-300 bg-amber-200">
                    <h3 className="pl-[5%] font-bold text-red-400 text-2xl  ">EMAIL :</h3>
                    <p className="text-blue-900 font-semibold text-xl float-left">{person.email}</p>
                  </div>
                  <div className="flex items-center mt-5 mb-10 h-55  w-[80%] justify-around border-solid border-2 border-green-300 bg-amber-200">
                    <h3 className=" font-bold text-red-400 text-2xl  ">PHONE :</h3>
                    <p className="text-blue-900 font-semibold text-xl float-left">{person.phone}</p>
                  </div>

              </>  
          )
        } 
      </div>
      <div className="mt-10">
        <Link to="/" className="hover:bg-rose-800 bg-white hover:shadow-md bg-stone-400 text-2xl outline-none rounded-xl font-bold border mt-8 hover:text-gray-200 text-red-600 border-zinc-400 py-4 px-4 pl-4">GO BACK TO HOME 🔙</Link>
      </div>

    </>
  )
}

export default View