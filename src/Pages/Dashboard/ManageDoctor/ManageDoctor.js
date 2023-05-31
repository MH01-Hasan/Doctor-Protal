import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfarmationModal from "../../Shared/ConfarmationModal/ConfarmationModal";
import { Toaster, toast } from "react-hot-toast";

// import ConfarmationModal from "../../Shared/confarmationModal";

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModel = () => {
    setDeletingDoctor(null);
  };

  // add a Doctor
  const url = `http://localhost:5000/doctor`;
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [" bookings"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessTocken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  // delete Docotr
  const handelDoctorDlete = (doctor) => {
    fetch(`http://localhost:5000/doctor/${doctor?._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessTocken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          refetch();
          toast.success(`Successfully delete Doctor ${doctor?.name}`);
        }
      });
  };

  if (isLoading) {
    return <p>Loading .............</p>;
  }

  return (
    <div>
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold mb-5">Manage Doctor</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}

          <thead>
            <tr>
              <th>Sl.NO</th>
              <th>Picture</th>
              <th>Name</th>
              <th>speciality</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data &&
              data?.map((data, index) => (
                <tr key={data?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={data?.img} alt="doctor-img" />
                      </div>
                    </div>
                  </td>

                  <td>{data?.name}</td>
                  <td>{data?.speciality}</td>
                  <td>{data?.email}</td>
                  <td>
                    <label
                      onClick={() => setDeletingDoctor(data)}
                      htmlFor="my-modal"
                      className="btn"
                    >
                      Delet
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfarmationModal
          titel={"Are you sure Delet"}
          massage={`if you delet ${deletingDoctor?.name} doctor ,you can't undo`}
          modeldata={deletingDoctor}
          Success={handelDoctorDlete}
          closeModel={closeModel}
        ></ConfarmationModal>
      )}
    </div>
  );
};

export default ManageDoctor;
