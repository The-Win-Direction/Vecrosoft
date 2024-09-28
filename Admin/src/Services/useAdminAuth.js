import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const baseURL = "http://localhost:4000";

const useAdminAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateAdmin = async () => {
      let token = localStorage.getItem("admintoken");  
      if (!token) {
        navigate("/sign-in");  
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${baseURL}/api/admin/validate`, {  
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        });
      // console.log(res);
        const data = await res.json();
        // console.log(data);
        if (data.status === 401 || !data) {
          localStorage.removeItem("admintoken"); 
          localStorage.removeItem("adminfname"); 
          localStorage.removeItem("adminlname"); 
          localStorage.removeItem("adminId"); 
          navigate("/admin/sign-in");  
        }
      } catch (error) {
        console.error("Admin validation error:", error);
        localStorage.removeItem("admintoken"); 
        localStorage.removeItem("adminfname"); 
        localStorage.removeItem("adminlname"); 
        localStorage.removeItem("adminId"); 
        navigate("/sign-in");
      }

      setLoading(false);
    };

    validateAdmin();
  }, [navigate]);

  return loading;
};

export default useAdminAuth;
