import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`).then((res) => {
          setName(res.data.name);
          setEmail(res.data.email);
          setPhone(res.data.phone);
      });
  },[id]);


  const updatedObj = {
    name: name,
    email: email,
    phone: phone,
  };
  

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Updating Logic Here <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(updatedObj);

    // >>>> Logic Here <<<< //

    axios.put(`http://localhost:8080/users/${id}`, updatedObj)
    .then(navigate("/"))

    // >>>>>>>>>>>>>>>  Ends <<<<<<<<<<<<<<<< //

  }


  return (
    <>
        <div className="bg-yellow-200 w-[50%] m-auto rounded-2xl">
            <h1 className="text-4xl font-semibold mt-20 mb-4 font-extrabold text-gray-900 dark:text-pink-700 md:text-5xl lg:text-6xl">
                UPDATE USER HERE 
            </h1>
            <h1 className="text-4xl font-semibold mt-10 mb-10 font-extrabold text-gray-900 dark:text-pink-700 md:text-5xl lg:text-6xl">
                📝
            </h1>

            <form  onSubmit={handleSubmit}
            className="m-auto w-[70%] "
            >

              <input 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] mt-10 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold text-xl"
                  type="text" 
                  placeholder="Enter the Name" 
                  name="name"
                  value = {name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />

              <input 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold text-xl"
                    type="email" 
                    placeholder="Enter the Email"
                    name="email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

              <input 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold text-xl"
                    type="phone" 
                    placeholder="Enter the Phone"
                    name="phone"
                    value = {phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br />

                <button
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 w-[30%] text-xl py-3.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    type="submit"
                >
                        UPDATE 🗒️
                </button>

            </form>
        </div>
    </>
  )
}

export default Edit;