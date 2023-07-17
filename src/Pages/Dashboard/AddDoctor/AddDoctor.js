import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-protal-server.vercel.app/appointmentspecility"
      );
      const data = await res.json();
      return data;
    },
  });
  const imghostingkey = process.env.REACT_APP_imagbb_key;

  const onSubmit = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imghostingkey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imagedata) => {
        if (imagedata?.data?.url) {
          const doctorInfo = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: imagedata?.data?.url,
          };
          fetch(`https://doctor-protal-server.vercel.app/doctor`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessTocken")}`,
            },
            body: JSON.stringify(doctorInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.acknowledged) {
                toast.success("Successfully Add Doctor!");
                reset();
              }
            });
        }
      });
  };

  if (isLoading) {
    return <p>Loading .............</p>;
  }
  return (
    <div>
      <Toaster position="top-center" />

      <div className="border-solid border-2 rounded-md  w-96">
        <div className="m-8 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text"> Doctor Name</span>
              </label>

              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Type here Doctor Name"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-600" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text"> Doctor Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="text"
                placeholder="Type here Your email"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Speciality</span>
              </label>
              <select
                {...register("speciality")}
                className="input input-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select Doctor Speciality{" "}
                </option>
                {data?.map((data, i) => (
                  <option key={i} value={data.name}>
                    {data.name}
                  </option>
                ))}
              </select>
              {errors.speciality && (
                <p className="text-red-600" role="alert">
                  {errors.speciality?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text"> Doctor Image</span>
              </label>
              <input
                {...register("img", {
                  required: "image is required",
                })}
                type="file"
                placeholder="image"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.img && (
                <p className="text-red-600" role="alert">
                  {errors.img?.message}
                </p>
              )}
            </div>

            <input
              type="submit"
              value="Add Doctor"
              className="btn btn-primary mt-6"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
