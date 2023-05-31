import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
const Alluser = () => {
  const url = `http://localhost:5000/users`;
  const { data = [], refetch } = useQuery({
    queryKey: [" users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handelMakeadmin = (id) => {
    fetch(`http://localhost:5000/updateuser/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessTocken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          toast.success("Success make Admin");
          refetch();
        }
      });
  };

  const handelDelete = (id) => {};

  return (
    <div>
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-5">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}

          <thead>
            <tr>
              <th>Sl.No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Actiom</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((data, index) => (
              <tr key={data._id}>
                <td>{index + 1}</td>

                <td>{data?._id}</td>
                <td>{data?.name}</td>
                <td>{data?.email}</td>
                <td>
                  {data?.role !== "admin" && (
                    <button
                      onClick={() => handelMakeadmin(data?._id)}
                      className="btn btn-success"
                    >
                      Make admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handelDelete(data?._id)}
                    className="btn btn-outline btn-denger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;
