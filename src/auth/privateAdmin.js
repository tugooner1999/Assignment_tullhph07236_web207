
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from ".";
const PrivateAdmin = (props) => {
  return (
    <Route
      render={() => {
        if (isAuthenticated() && isAuthenticated().user.id == 1) {
          return props.children;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};
export default PrivateAdmin;