import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/nitin0409sep")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  const data = useLoaderData();

  return (
    <div>
      Github -: {data.followers}
      <img src={data.avatar_url} alt="Github DP" height="100px" width="100px" />
    </div>
  );
};

export default Github;

export const githubUserData = async () => {
  const res = await fetch("https://api.github.com/users/nitin0409sep");
  return res.json();
};
