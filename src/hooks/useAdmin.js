import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [Isadmin, setIsadmin] = useState(false);
  const [Isadminlooding, setIsadminlooding] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://doctor-protal-server.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsadmin(data?.isadmin);
          setIsadminlooding(false);
        });
    }
  }, [email]);
  return [Isadmin, Isadminlooding];
};

export default useAdmin;
