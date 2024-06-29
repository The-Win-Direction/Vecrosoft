import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateUser = async () => {
      let token = localStorage.getItem("userdatatoken");
      if (!token) {
        navigate("/sign-in");
        setLoading(false);
        return;
      } 

      try {
        const res = await fetch("https://vecrosoft-server.onrender.com/api/validation", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        });

        const data = await res.json();

        if (data.status === 401 || !data) {
          navigate("/sign-in");
        }
      } catch (error) {
        console.error("Validation error:", error);
        navigate("/sign-in");
      }

      setLoading(false);
    };

    validateUser();
  }, [navigate]);

  return loading;
};

export default useAuth;
