import React from "react";
import Router from "../Router/Router.Config";
const App = () => {
  // const [name, setName] = useState<string>("Rajendra"); // 'name' is a state variable
  // const [loading, setLoading] = useState<boolean>(true); // 'loading' is a another state variable
  // const [userList, setUserList] = useState<Array<any>>();
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // // 1. First argument of useEffect is callBack function - single argument
  // useEffect(() => {
  //   // this hook triggers on any update of re-renders of this component
  //   console.log("I am always executed on any state change");
  // });
  // // 2. two arguments first- callBack function () and second - list of dependencies []
  // useEffect(() => {
  //   console.log("I am only called once when this component is loaded");
  //   // a. Make API calls
  //   // api data user list
  //   setTimeout(() => {
  //     setLoading(false);
  //     setUserList([]);
  //   }, 3000);
  // }, []);
  // useEffect(() => {
  //   console.log("I am only triggered when loading or name is changed");
  // }, [loading, name]);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
};

export default App;
