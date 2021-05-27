import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { isAutheticated, signout } from "../auth";
import { Link, Route, useParams, Redirect, useHistory } from "react-router-dom";
function Sidebar() {
  const history = useHistory();
  const {
    user: { name },
  } = isAutheticated();

  console.log(name);

  return (
    <div className="admin">
      <div className="slidebar-left">
        <ProSidebar>
          <SidebarHeader>
            <div className="admin-logo">
              {/* <strong style={{ fontSize: "25px", color: "#f39510" }}>
                COVID HELP
              </strong> */}
            <img src="/assets/img/covid_logo.jfif" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem>
                <Link to="/admindashboard">
                  <i className="fa fa-tachometer" aria-hidden="true" />{" "}
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/request">
                  <i className="fa fa-rss-square" aria-hidden="true"></i>{" "}
                  Requests
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/volunteers">
                  <i className="fa fa-file" aria-hidden="true"></i> Volunteers
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/resources1">
                  <i class="fa fa-book fa-fw" aria-hidden="true"></i> Resources
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  to=""
                  onClick={() => {
                    signout(() => {
                      history.push("/adminlogin");
                    });
                  }}
                >
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                  Logout {name}
                </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </div>
  );
}
export default Sidebar;
