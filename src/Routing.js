import logo from "./logo.svg";

import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Empty from "./empty";
/////////////////////SuperAdmin/////////////////////////////////////////////
import Login from "./components/login";
import Changepassword from "./components/changepassword";
import Dashboard from "./components/dashboard";

//Admin Users
import AddAdminUser from "./components/AdminUser/add_adminuser";
import AdminUsers from "./components/AdminUser/adminusers";
import EditAdminUsers from "./components/AdminUser/edit_adminusers";

//Administrator Users
import AddAdministratorUser from "./components/Administrator/add_administrator";
import AdministratorUsers from "./components/Administrator/administrator";

//Cities
import AddCity from "./components/City/add_city";
import City from "./components/City/city";
import EditCity from "./components/City/edit_city";

//Countries
import AddCountry from "./components/Country/add_country";
import Country from "./components/Country/country";
import EditCountry from "./components/Country/edit_country";

//Blood Group
import AddBloodGroup from "./components/BloodGroup/add_bloodgroup";
import EditBloodGroup from "./components/BloodGroup/edit_bloodgroup";
import BloodGroup from "./components/BloodGroup/bloodgroup";

//Resource
import AddResource from "./components/Resource/add_resource";
import EditResource from "./components/Resource/edit_resource";
import ViewResource from "./components/Resource/view_resource";
import Resources from "./components/Resource/resources";

//Privacy Policy
import AddPrivacyPolicy from "./components/PrivacyPolicy/add_privacypolicy";
import PrivacyPolicy from "./components/PrivacyPolicy/privacypolicy";
import EditPrivacyPolicy from "./components/PrivacyPolicy/edit_privacypolicy";
import PrivacyPolicyPage from "./components/PrivacyPolicy/privacypolicysingle";

//TermsOfServices
import AddTermsOfservice from "./components/TermsOfServices/add_termsofservice";
import TermsOfservice from "./components/TermsOfServices/termsofservice";
import EditTermsOfservice from "./components/TermsOfServices/edit_termsofservice";
import TermsOfservicePage from "./components/TermsOfServices/termsofservicessingle";

//Menu
import Menu from "./components/Menu/menu";
import AddMenu from "./components/Menu/add_menu";
import EditMenu from "./components/Menu/edit_menu";
import ViewMenu from "./components/Menu/view_menu";

////////////////////Admin/////////////////////////////////////////////////////////////////////////////////////////////
import AdminLogin from "./AdminComponents/login";
import AdminDashboard from "./AdminComponents/dashboard";
import AdminChangepassword from "./AdminComponents/changepassword";

//Resource1
import AddResource1 from "./AdminComponents/Resource/add_resource";
import EditResource1 from "./AdminComponents/Resource/edit_resource";
import ViewResource1 from "./AdminComponents/Resource/view_resource";
import Resources1 from "./AdminComponents/Resource/resources";

//Volunteers

import AddVolunteers from "./AdminComponents/Volunteers/add_volunteers";
import EditVolunteers from "./AdminComponents/Volunteers/edit_volunteers";
import Volunteers from "./AdminComponents/Volunteers/volunteers";

import AddRequest from "./AdminComponents/Request/add_request";
import EditRequest from "./AdminComponents/Request/edit_request";
import ViewRequest from "./AdminComponents/Request/view_request";
import Request from "./AdminComponents/Request/request";
import PatientStaus from "./AdminComponents/Request/add_patient_status";


/////Volunteers  Details///////////////////////////////////////////////////////////////////////////////
import VolunteerLogin from "./Volunteers/login_volunteers"; 

import VolunteerAddRequest from "./Volunteers/Request/add_request";
import VolunteerEditRequest from "./Volunteers/Request/edit_request";
import VolunteerViewRequest from "./Volunteers/Request/view_request";
import VolunteerRequest from "./Volunteers/Request/request";
import VolunteerPatientStaus from "./Volunteers/Request/add_patient_status";

function Routing() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Empty}></Route>
        <Route exact path="/login" component={Empty}></Route>
        {/*************************************  Super Admin *****************************************/}
        <Route exact path="/superadminlogin" component={Login}></Route>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/change_password" exact component={Changepassword} />
        {/* Admin Users */}
        <Route path="/add_adminuser" exact component={AddAdminUser} />
        <Route path="/adminuser" exact component={AdminUsers} />
        <Route path="/edit_adminuser/:_id" exact component={EditAdminUsers} />
        {/* Administrator Duplicate */}
        <Route
          path="/add_administratoruser"
          exact
          component={AddAdministratorUser}
        />
        <Route path="/administratoruser" exact component={AdministratorUsers} />
        {/* Cities */}
        <Route path="/add_city" exact component={AddCity} />
        <Route path="/cities" exact component={City} />
        <Route path="/edit_city/:_id" exact component={EditCity} />
        {/* Countries */}
        <Route path="/add_country" exact component={AddCountry} />
        <Route path="/countries" exact component={Country} />
        <Route path="/edit_country/:_id" exact component={EditCountry} />
        {/* Blood Group */}
        <PrivateRoute path="/add_bloodgroup" exact component={AddBloodGroup} />
        <PrivateRoute
          path="/edit_bloodgroup/:_id"
          exact
          component={EditBloodGroup}
        />
        <PrivateRoute path="/bloodgroup" exact component={BloodGroup} />
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

{/*888888888888888888888888888888888888888 Menu 888888888888888888888888888888888888888888888888888*/}

  <Route path="/add_menu" exact component={AddMenu} />
        <Route path="/menu" exact component={Menu} />
         <Route path="/edit_menu/:_id" exact component={EditMenu} />
         <Route path="/view_menu/:_id" exact component={ViewMenu} />

        {/*************************************   Admin *****************************************/}
        {/* Admin */}
        <Route exact path="/adminlogin" component={AdminLogin}></Route>
        <Route
          path="/adminchange_password"
          exact
          component={AdminChangepassword}
        />
        <Route path="/admindashboard" exact component={AdminDashboard} />
        {/* Resource 1*/}
        <PrivateRoute path="/add_resource1" exact component={AddResource1} />
        <PrivateRoute
          path="/edit_resource1/:_id"
          exact
          component={EditResource1}
        />
        <PrivateRoute
          path="/view_resource1/:_id"
          exact
          component={ViewResource1}
        />
        <PrivateRoute path="/resources1" exact component={Resources1} />
        {/* Volunteers */}
        <PrivateRoute path="/add_volunteers" exact component={AddVolunteers} />
        <PrivateRoute
          path="/edit_volunteers/:_id"
          exact
          component={EditVolunteers}
        />
        <PrivateRoute path="/volunteers" exact component={Volunteers} />
        {/* Request*/}
        <PrivateRoute path="/add_request" exact component={AddRequest} />
        <PrivateRoute path="/edit_request/:_id" exact component={EditRequest} />
        <PrivateRoute path="/view_request/:_id" exact component={ViewRequest} />
        <PrivateRoute path="/request" exact component={Request} />
        <PrivateRoute
          path="/add_patient_status/:_id"
          exact
          component={PatientStaus}
        />

{/****************************** Volunteers Details **************************************************/}


  <Route exact path="/volunteerlogin" component={VolunteerLogin}></Route>
   
   <PrivateRoute path="/volunteer_add_request" exact component={VolunteerAddRequest} />
        <PrivateRoute path="/volunteer_edit_request/:_id" exact component={VolunteerEditRequest} />
        <PrivateRoute path="/volunteer_view_request/:_id" exact component={VolunteerViewRequest} />
        <PrivateRoute path="/volunteer_request" exact component={VolunteerRequest} />
        <PrivateRoute
          path="/volunteer_add_patient_status/:_id"
          exact
          component={VolunteerPatientStaus}
        />



      </Switch>
    </HashRouter>
  );
}

export default Routing;
