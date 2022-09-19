import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [user, setUsers] = useState([]);


  const loadUsers = () => {
    axios.get("http://localhost:8080/users").then((res) => {
      setUsers(res.data);
      console.log(user)
    })
  }
  // loadUsers();

  //------------------->>>>>>>>>>  For rendering the component only once  <<<<<<<<<-----------------------//
  
  useEffect(() => {    
     loadUsers();
  },[])

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

  //----------------->>>>>>>>>  Deleting Particular Data with the help of ID  <<<<<<<<<-------------------//

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8080/users/${id}`).then(() => {
      loadUsers();
    })
  }
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


  return (
    <>
      <div className="w-[100%] h-full justify-center items-center flex flex-col px-10 py-8 mt-5">
        <h1 className="text-4xl font-bold text-sky-500 text-gray-900 dark:text-pink-700">DATA TABLE</h1>
        <div className="flex flex-col ">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8 ">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8 " >
              <div className="overflow-hidden">
                <table className="min-w-full text-center border-solid border-2 border-gray-500">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Sr. No.
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {
                    user.map((elem,index) => {
                      return( 
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index+1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {elem.name}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {elem.email}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {elem.phone}
                        </td>
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link
                            to={`/user/${elem.id}`}
                            className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                          >
                            View
                          </Link>
                          <Link
                            to={`/edit-user/${elem.id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </Link>
                          <Link
                            onClick={()=>deleteUser(elem.id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    )})}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;



/////////////////// ----------------  IInd Method  ----------------////////////////////////////////


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Home() {
//   const [users, setUsers] = useState([]);

//   function loadUsers() {
//     axios.get("http://localhost:8080/users").then((res) => {
//       setUsers(res.data);
//     });
//   }

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   function deleteUser(id) {
//     axios.delete(`http://localhost:8080/users/${id}`).then(loadUsers());
//   }

//   return (
//     <>
//       <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
//         <h1 className="text-3xl font-bold">DATA TABLE</h1>
//         <div className="flex flex-col">
//           <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
//             <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
//               <div className="overflow-hidden">
//                 <table className="min-w-full text-center">
//                   <thead className="border-b bg-gray-800">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="text-sm font-medium text-white px-6 py-4"
//                       >
//                         #
//                       </th>
//                       <th
//                         scope="col"
//                         className="text-sm font-lg text-white px-6 py-4"
//                       >
//                         Name
//                       </th>
//                       <th
//                         scope="col"
//                         className="text-sm font-lg text-white px-6 py-4"
//                       >
//                         Email
//                       </th>
//                       <th
//                         scope="col"
//                         className="text-sm font-lg text-white px-6 py-4"
//                       >
//                         Phone
//                       </th>
//                       <th
//                         scope="col"
//                         className="text-sm font-lg text-white px-6 py-4"
//                       >
//                         Action
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="border-black border-b-2">
//                     {users.map((data, index) => (
//                       <tr
//                         key={index}
//                         className="bg-white border-b-2 border-black"
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
//                           {index + 1}
//                         </td>
//                         <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
//                           {data.name}
//                         </td>
//                         <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
//                           {data.email}
//                         </td>
//                         <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
//                           {data.phone}
//                         </td>
//                         <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
//                           <Link
//                             to={`/users/${data.id}`}
//                             className="bg-teal-600 text-white px-6 py-2 rounded-lg"
//                           >
//                             View
//                           </Link>
//                           <Link
//                             to={`/edit-user/${data.id}`}
//                             className="bg-blue-600 text-white px-6 py-2 rounded-lg"
//                           >
//                             Edit
//                           </Link>
//                           <Link
//                             onClick={()=>deleteUser(data.id)}
//                             to={"#"}
//                             className="bg-red-600 text-white px-6 py-2 rounded-lg"
//                           >
//                             Delete
//                           </Link>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;