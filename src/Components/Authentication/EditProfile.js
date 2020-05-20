import React from "react";
import "./Auth.css";
import axios from "axios";

export const EditProfile = (props) => {
  const baseURL = process.env.REACT_APP_SERVER_POINT;

  const service = axios.create({
    baseURL,
    withCredentials: true,
  });

  console.log(props.location.state.user)

  const [username, setUsername] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [bio, setBio] = React.useState([]);
  

  React.useEffect(() => {
    setUsername(props.location.state.user.username);
    setEmail(props.location.state.user.email);
    setLocation(props.location.state.user.location);
    setBio(props.location.state.user.bio);
  }, []);

  
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(baseURL + "/api/updateProfile/" + props.location.state.user._id,
      {
        username: username,
        email: email,
        location: location,
        bio: bio
      }
      )
      .then((blogData) => {
        console.log(blogData);
        window.location = "/profile";
      })
      .catch((error) => console.log(error));
  }

  // function getDetails() {
  //   return (
  //     <div>
  //       <img
  //         width="100px"
  //         src="https://cdn.onlinewebfonts.com/svg/img_206976.png"
  //       ></img>
  //       <div className="details">
  //         <h1>{user.username}'s profile</h1>
  //         <p>Email: {user.email}</p>
  //         <p>Location: {user.location}</p>
  //         <p>Bio: {user.bio}</p>
  //       </div>

  //       <form onSubmit={deleteAccount}>
  //         <button>Delete account</button>
  //       </form>
  //     </div>
  //   );
  // }

  return (
    <div className="profile-card">
      <h2>Edit profile:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Email:
          <textarea
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label>
          Bio:
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>

    </div>
  );
};

export default EditProfile;