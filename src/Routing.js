import logo from "./logo.svg";

import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

//SuperAdmin
import Login from "./components/login";
import Dashboard from "./components/dashboard";

//Admin Users
import AddAdminUser from "./components/AdminUser/add_adminuser";
import AdminUsers from "./components/AdminUser/adminusers";
import EditAdminUsers from "./components/AdminUser/edit_adminusers";

//Cities
import AddCity from "./components/City/add_city";
import City from "./components/City/city";
import EditCity from "./components/City/edit_city";

//Countries
import AddCountry from "./components/Country/add_country";
import Country from "./components/Country/country";
import EditCountry from "./components/Country/edit_country";

//Privacy Policy
import AddPrivacyPolicy from "./components/PrivacyPolicy/add_privacypolicy";
import PrivacyPolicy from "./components/PrivacyPolicy/privacypolicy";
import EditPrivacyPolicy from "./components/PrivacyPolicy/edit_privacypolicy";
import PrivacyPolicyPage from "./components/PrivacyPolicy/privacypolicysingle";

//Privacy Policy
import AddTermsOfservice from "./components/TermsOfServices/add_termsofservice";
import TermsOfservice from "./components/TermsOfServices/termsofservice";
import EditTermsOfservice from "./components/TermsOfServices/edit_termsofservice";

import TermsOfservicePage from "./components/TermsOfServices/termsofservicessingle";

import Changepassword from "./components/changepassword";
import PrivateRoute from "./PrivateRoute";

//Admin
import AdminLogin from "./AdminComponents/login";
import AdminDashboard from "./AdminComponents/dashboard";
import AdminChangepassword from "./AdminComponents/changepassword";

//Resource
import AddResource from "./AdminComponents/Resource/add_resource";
import EditResource from "./AdminComponents/Resource/edit_resource";
import ViewResource from "./AdminComponents/Resource/view_resource";
import Resources from "./AdminComponents/Resource/resources";
function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/dashboard" exact component={Dashboard} />
        {/* Admin Users */}
        <Route path="/add_adminuser" exact component={AddAdminUser} />
        <Route path="/adminuser" exact component={AdminUsers} />
        <Route path="/edit_adminuser/:_id" exact component={EditAdminUsers} />
        {/* Cities */}
        <Route path="/add_city" exact component={AddCity} />
        <Route path="/cities" exact component={City} />
        <Route path="/edit_city/:_id" exact component={EditCity} />
        {/* Countries */}
        <Route path="/add_country" exact component={AddCountry} />
        <Route path="/countries" exact component={Country} />
        <Route path="/edit_country/:_id" exact component={EditCountry} />
        {/* PrivacyPolicy */}
        <Route path="/add_privacypolicy" exact component={AddPrivacyPolicy} />
        <Route path="/privacypolicy" exact component={PrivacyPolicy} />
        <Route
          path="/edit_privacypolicy/:_id"
          exact
          component={EditPrivacyPolicy}
        />
        <Route
          path="/privacypolicypage/60a2573033be630015d6fcad"
          exact
          component={PrivacyPolicyPage}
        />

        {/* terms of service */}
        <Route path="/add_termsofservice" exact component={AddTermsOfservice} />
        <Route path="/termsofservice" exact component={TermsOfservice} />
        <Route
          path="/edit_termsofservice/:_id"
          exact
          component={EditTermsOfservice}
        />
        <Route
          path="/termsofservicepage/60a25d9c33be630015d6fcaf"
          exact
          component={TermsOfservicePage}
        />
        {/* Admin */}
        <Route
          path="/adminchange_password"
          exact
          component={AdminChangepassword}
        />
        <Route exact path="/adminlogin" component={AdminLogin}></Route>
        <Route path="/admindashboard" exact component={AdminDashboard} />
        <PrivateRoute
          path="/adminchangepassword"
          exact
          component={Changepassword}
        />
        {/* Resource */}
        <PrivateRoute path="/add_resource" exact component={AddResource} />
        <PrivateRoute
          path="/edit_resource/:_id"
          exact
          component={EditResource}
        />
        <PrivateRoute
          path="/view_resource/:_id"
          exact
          component={ViewResource}
        />
        <PrivateRoute path="/resources" exact component={Resources} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
