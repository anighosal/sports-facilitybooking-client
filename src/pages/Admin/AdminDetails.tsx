// import { useLocation } from "react-router-dom";
// import { useGetAdminsQuery } from "../../redux/api/baseApi";

// const AdminDetails = () => {
//   const location = useLocation();
//   const { newAdmin } = location.state || {}; // Get newly created admin from state

//   // Fetch all admins from the backend
//   const { data: admins, error, isLoading } = useGetAdminsQuery();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading admins</div>;

//   return (
//     <div className="max-w-4xl mx-auto mt-20 bg-white p-6 rounded shadow-lg">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Details</h2>

//       {newAdmin && (
//         <div className="mb-6">
//           <h3 className="text-xl text-green-600 mb-2">New Admin Created:</h3>
//           <p>
//             <strong>Name:</strong> {newAdmin.name}
//           </p>
//           <p>
//             <strong>Email:</strong> {newAdmin.email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {newAdmin.phone}
//           </p>
//           <p>
//             <strong>Address:</strong> {newAdmin.address}
//           </p>
//         </div>
//       )}

//       <h3 className="text-xl font-bold mb-4">All Admins</h3>
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border">Name</th>
//             <th className="py-2 px-4 border">Email</th>
//             <th className="py-2 px-4 border">Phone</th>
//             <th className="py-2 px-4 border">Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {admins?.map((admin: any) => (
//             <tr key={admin._id}>
//               <td className="py-2 px-4 border">{admin.name}</td>
//               <td className="py-2 px-4 border">{admin.email}</td>
//               <td className="py-2 px-4 border">{admin.phone}</td>
//               <td className="py-2 px-4 border">{admin.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDetails;
