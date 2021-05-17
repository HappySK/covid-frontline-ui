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
              <strong style={{ fontSize: "25px", color: "#f39510" }}>
                COVID HELP
              </strong>
              {/* <img src="/assets/img/logo/deepthoughtlogo.svg" /> */}
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
              {/* <MenuItem>
                <Link to="/dashboard">
                  <i className="fa fa-tachometer" aria-hidden="true" />{" "}
                  Volunteers
                </Link>
              </MenuItem> */}
              <MenuItem>
                <Link to="/resources">
                  <i class="fa fa-book fa-fw" aria-hidden="true"></i> Resources
                </Link>
              </MenuItem>
              {/* <MenuItem>
                <Link to="/dashboard">
                  <i className="fa fa-tachometer" aria-hidden="true" /> Service
                  Providers
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/dashboard">
                  <i className="fa fa-tachometer" aria-hidden="true" /> Requests
                </Link>
              </MenuItem> */}
              {/* <MenuItem>
                <Link to="/changepassword">
                  <i class="fa fa-book fa-fw" aria-hidden="true"></i> Change
                  Password
                </Link>
              </MenuItem> */}

              {/* 
              <MenuItem>
                <Link to="/sub_menu">
                  <i class="fa fa-book fa-fw" aria-hidden="true"></i> Sub Menu
                </Link>
              </MenuItem>
              <SubMenu
                title="Home Page"
                icon={<i className="fa fa-home" aria-hidden="true"></i>}
              >
                <MenuItem>
                  {" "}
                  <a
                    href="/home1/608b912efcc7860015dce5b1"
                    style={{ color: "white" }}
                  >
                    Section 1 Text
                  </a>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <a href="/home_section_1_1" style={{ color: "white" }}>
                    Section 1 Videos
                  </a>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <a href="/home_section_2" style={{ color: "white" }}>
                    Section 2
                  </a>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <a href="/home_section_3" style={{ color: "white" }}>
                    Section 3
                  </a>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <a href="/home_section_4" style={{ color: "white" }}>
                    Media Presence
                  </a>
                </MenuItem>
              </SubMenu> */}
              {/* <SubMenu title="Component 2">
              <MenuItem>Component 2.1</MenuItem>
              <MenuItem>Component 2.2</MenuItem>
            </SubMenu> */}
              {/* <SubMenu
                title="About Us Page"
                icon={<i class="fa fa-info-circle" aria-hidden="true"></i>}
              >
                <MenuItem>
                  {" "}
                  <a href="/about_section_2" style={{ color: "white" }}>
                    Values
                  </a>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <a href="/about_section_3" style={{ color: "white" }}>
                    Leadership
                  </a>
                </MenuItem>
              </SubMenu>

              <SubMenu
                title="Blog"
                icon={<i className="fa fa-rss-square" aria-hidden="true"></i>}
              >
                <MenuItem>
                  {" "}
                  <a href="/blogcategory" style={{ color: "white" }}>
                    Category
                  </a>{" "}
                </MenuItem>
                <MenuItem>
                  {" "}
                  <li>
                    {" "}
                    <a href="/article" style={{ color: "white" }}>
                      Articles
                    </a>{" "}
                  </li>
                </MenuItem>
              </SubMenu>

              <MenuItem>
                <Link to="/post">
                  <i className="fa fa-upload" aria-hidden="true" /> Posts
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/privatepage">
                  <i className="fa fa-file" aria-hidden="true"></i> Private
                  Pages
                </Link>
              </MenuItem> */}
              <MenuItem>
                <Link
                  to=""
                  onClick={() => {
                    signout(() => {
                      history.push("/");
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
