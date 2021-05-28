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
  const {
    user: { name },
  } = isAutheticated();

  console.log(name);

  const history = useHistory();

  return (
    <div className="admin">
      <div className="slidebar-left">
        <ProSidebar>
          <SidebarHeader>
            <div className="admin-logo">
              {/* <strong style={{ fontSize: "25px", color: "#f39510" }}>
                COVID HELP
              </strong> */}
              <img src="/assets/img/covid_logo(1).png" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem>
                <Link to="/dashboard">
                  <i className="fa fa-tachometer" aria-hidden="true" />{" "}
                  <span className="color">Dashboard</span>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/adminuser">
                  <i className="fa fa-upload" aria-hidden="true" /><span className="color"> Admin User</span>
                </Link>
              </MenuItem>
              {/* <MenuItem>
                <Link to="/administratoruser">
                  <i className="fa fa-upload" aria-hidden="true" />{" "}
                  Administrator User
                </Link>
              </MenuItem> */}

              <SubMenu
                title="Master Data"
                icon={<i class="fa fa-info-circle" aria-hidden="true"></i>}
              >
                <MenuItem>
                  {" "}
                  <Link to="/countries" style={{ color: "white" }}>
                    Countries
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/cities" style={{ color: "white" }}>
                    Cities
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/bloodgroup" style={{ color: "white" }}>
                    Blood Group
                  </Link>
                </MenuItem>

                <MenuItem>
                  {" "}
                  <Link to="/resources" style={{ color: "white" }}>
                    Resources
                  </Link>
                </MenuItem>
              </SubMenu>
              <SubMenu
                title="CMS"
                icon={<i className="fa fa-home" aria-hidden="true"></i>}
              >
                <MenuItem>
                  {" "}
                  <Link
                    to="/privacypolicypage/60a2573033be630015d6fcad"
                    style={{ color: "white" }}
                  >
                    Privacy Policy
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    to="/termsofservicepage/60a25d9c33be630015d6fcaf"
                    style={{ color: "white" }}
                  >
                    Terms of Service
                  </Link>
                </MenuItem>
              </SubMenu>
                <MenuItem>
                <Link to="/menu">
                  <i class="fa fa-book fa-fw" aria-hidden="true"></i> 
                   <span className="color"> Menu</span>
                </Link>
              </MenuItem>
               <MenuItem>
                <Link to="/submenu">
                  <i class="fa fa-book fa-fw" aria-hidden="true"></i> 
                   <span className="color"> Sub Menu</span>
                </Link>
              </MenuItem>
              {/* <MenuItem>
                <Link to="/change_password">
                  <i class="fa fa-book fa-fw" aria-hidden="true"></i> Change
                  Password
                </Link>
              </MenuItem> */}
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
                  <Link to="/about_section_2" style={{ color: "white" }}>
                    Values
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/about_section_3" style={{ color: "white" }}>
                    Leadership
                  </Link>
                </MenuItem>
              </SubMenu>

              <SubMenu
                title="Blog"
                icon={<i className="fa fa-rss-square" aria-hidden="true"></i>}
              >
                <MenuItem>
                  {" "}
                  <Link to="/blogcategory" style={{ color: "white" }}>
                    Category
                  </link>{" "}
                </MenuItem>
                <MenuItem>
                  {" "}
                  <li>
                    {" "}
                    <Link to="/article" style={{ color: "white" }}>
                      Articles
                    </Link>{" "}
                  </li>
                </MenuItem>
              </SubMenu>

              <MenuItem>
                <Link to="/post">
                  <i className="fa fa-upload" aria-hidden="true" /> Posts
                </Link>
              </MenuItem>
              */}
              <MenuItem>
                <Link
                  to=""
                  onClick={() => {
                    signout(() => {
                      history.push("/superadminlogin");
                    });
                  }}
                >
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                  <span className="color"> Logout {name}</span>
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
