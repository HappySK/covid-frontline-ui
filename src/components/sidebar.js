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
              <strong style={{ fontSize: "25px", color: "#f39510" }}>
                COVID HELP
              </strong>
              {/* <img src="/assets/img/logo/deepthoughtlogo.svg" /> */}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem>
                <Link to="/dashboard">
                  <i className="fa fa-tachometer" aria-hidden="true" />{" "}
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/adminuser">
                  <i className="fa fa-upload" aria-hidden="true" /> Admin User
                </Link>
              </MenuItem>
              <SubMenu
                title="Master Data"
                icon={<i className="fa fa-home" aria-hidden="true"></i>}
              >
                <MenuItem>
                  {" "}
                  <a href="/countries" style={{ color: "white" }}>
                    Countries
                  </a>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <a href="/cities" style={{ color: "white" }}>
                    Cities
                  </a>
                </MenuItem>

                <MenuItem>
                  {" "}
                  <a
                    href="/privacypolicypage/60a2573033be630015d6fcad"
                    style={{ color: "white" }}
                  >
                    Privacy Policy
                  </a>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <a
                    href="/termsofservicepage/60a25d9c33be630015d6fcaf"
                    style={{ color: "white" }}
                  >
                    Terms of Service
                  </a>
                </MenuItem>
              </SubMenu>
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
              */}

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
