const validUser = async (navigate) => {
  let token = localStorage.getItem("userdatatoken");
  //console.log(token);
  const res = await fetch("http://localhost:4000/api/validation", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  });
  const data = await res.json();
  console.log(data);
  if ((data.status ===401 || !data)) {
    navigate("*");

  }else{
    navigate("/")
  }
};


module.exports=validUser;