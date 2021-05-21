import axios from "axios";
import React from "react";
import Sidebar from "../../AdminComponents/sidebar";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
// import { Modal } from "react-responsive-modal";
import { isAutheticated, signout } from "../../auth";
// import AddNote from "../../AdminComponents/Request/add_note";
import * as moment from "moment";
class ViewRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient_name: "",
      patient_mobilenumber: "",
      patient_requirement: "",
      patient_stage: "",
      guardian_name: "",
      guardian_mobilenumber: "",
      addedby: "",
      status: true,

      patient_at: "",
      current_spo2: "",
      patient_location: "",
      comorbidity_conditions: "",
      Priority: "",
      comments1: "",

      data: Date.now(),
      mobile_message: "",
      validError: false,

      // open: false,
      addedby: "",
      patientid: "",
      note: "",
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = new SimpleReactValidator({
      className: "text-danger",
      validators: {
        passwordvalid: {
          message:
            "The :attribute must be at least 6 and at most 30 with 1 numeric,1 special charac" +
            "ter and 1 alphabet.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(
                val,
                /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,30}$/i
              ) && params.indexOf(val) === -1
            );
          },
        },
        passwordMismatch: {
          message: "confirm password must match with password field.",
          rule: function (val, params, validator) {
            return document.getElementById("password_input").value === val
              ? true
              : false;
          },
        },
        whitespace: {
          message: "The :attribute not allowed first whitespace   characters.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /[^\s\\]/) &&
              params.indexOf(val) === -1
            );
          },
        },
        specialChar: {
          message: "The :attribute not allowed special   characters.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /^[ A-Za-z0-9_@./#&+-]*$/i) &&
              params.indexOf(val) === -1
            );
          },
        },
        specialCharText: {
          message: "The :attribute may only contain letters, dot and spaces.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /^[ A-Za-z_@./#&+-]*$/i) &&
              params.indexOf(val) === -1
            );
          },
        },

        zip: {
          message: "Invalid Pin Code",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /^(\d{5}(\d{4})?)?$/i) &&
              params.indexOf(val) === -1
            );
          },
        },
        website: {
          message: "The Url should be example.com ",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(
                val,
                /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
              ) && params.indexOf(val) === -1
            );
          },
        },
        Fax: {
          message: "Invalid fax number ",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(
                val,
                /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i
              ) && params.indexOf(val) === -1
            );
          },
        },
      },
    });
  }
  componentDidMount() {
    const { _id } = this.props.match.params;

    console.log(_id);

    axios
      .get(`https://api.covidfrontline.net/request/update_request/${_id}`)
      .then(res => {
        console.log(res.data);
        const menu = {
          _id: res.data._id,
          patient_name: res.data.patient_name,
          patient_mobilenumber: res.data.patient_mobilenumber,
          patient_requirement: res.data.patient_requirement,
          patient_stage: res.data.patient_stage,
          guardian_name: res.data.guardian_name,
          guardian_mobilenumber: res.data.guardian_mobilenumber,
          comments: res.data.comments,

          addedby: res.data.addedby,

          patient_at: res.data.patient_at,
          current_spo2: res.data.current_spo2,
          patient_location: res.data.patient_location,
          comorbidity_conditions: res.data.comorbidity_conditions,
          Priority: res.data.Priority,
          comments1: res.data.comments1,
          updatedAt: res.data.updatedAt,
          createdAt: res.data.createdAt,
        };
        console.log(menu.name);
        this.setState({
          _id: menu._id,
          patient_name: menu.patient_name,
          patient_mobilenumber: menu.patient_mobilenumber,
          patient_requirement: menu.patient_requirement,
          patient_stage: menu.patient_stage,
          guardian_name: menu.guardian_name,
          guardian_mobilenumber: menu.guardian_mobilenumber,
          comments: menu.comments,

          addedby: menu.addedby,
          patient_at: menu.patient_at,
          current_spo2: menu.current_spo2,
          patient_location: menu.patient_location,
          comorbidity_conditions: menu.comorbidity_conditions,
          Priority: menu.Priority,
          comments1: menu.comments1,
          updatedAt: menu.updatedAt,
          createdAt: menu.createdAt,
          loading: true,
        });
      });
    axios
      .get(`https://api.covidfrontline.net/resource/allresources`)
      .then(res => {
        const resources = res.data;
        console.log(resources);
        this.setState({ resources });
      });

    axios.get(`https://api.covidfrontline.net/note/notes/${_id}`).then(res => {
      const notes = res.data;
      console.log(notes);
      this.setState({ notes });
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validator.allValid()) {
      const {
        user: { _id },
      } = isAutheticated();

      const { _id1 } = this.props.match.params;

      console.log(_id1);

      const menu = {
        note: this.state.note,
        patientid: this.state._id,
        addedby: _id,
      };
      console.log(menu.patientid);
      axios
        .post(`https://api.covidfrontline.net/note/addnote`, menu)
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
      // alert("note added sucessfully");
      this.props.history.push("/request");

      // window.location.href = "/request";
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    const {
      user: { name },
    } = isAutheticated();
    console.log(name);
    return (
      <>
        <div>
          <Sidebar></Sidebar>
          <div className="admin-wrapper col-12">
            <div className="admin-content">
              <div className="admin-head">Request - View</div>
              {this.state.loading ? (
                <div className="admin-data">
                  <div className="col-lg-12 p-0 text-right mb-30">
                    <Link to="/request">
                      <button className="button button-contactForm boxed-btn">
                        Back
                      </button>
                    </Link>
                  </div>
                  <div className="table-responsive admin-table demo">
                    <table>
                      <tbody>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Patient Name</b>
                          </td>
                          <td>{this.state.patient_name}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Patient Mobile Number</b>
                          </td>
                          <td>{this.state.patient_mobilenumber}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Patient Requirement</b>
                          </td>
                          <td>{this.state.patient_requirement}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Patient Stage</b>
                          </td>
                          <td>{this.state.patient_stage}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Guardian Name</b>
                          </td>
                          <td>{this.state.guardian_name}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Guardian Mobile Number</b>
                          </td>
                          <td>{this.state.guardian_mobilenumber}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Comments</b>
                          </td>
                          <td>{this.state.comments}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Added By</b>
                          </td>
                          <td>
                            {" "}
                            {name} on{" "}
                            {moment(this.state.createdAt)
                              .locale("en")
                              .format("DD-MM-YYYY")}{" "}
                            {moment(this.state.createdAt)
                              .locale("en")
                              .format("HH:mm:ss")}
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Patient At</b>
                          </td>
                          <td>{this.state.patient_at}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Comorbidity conditions</b>
                          </td>
                          <td>{this.state.comorbidity_conditions}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Patient Location</b>
                          </td>
                          <td>{this.state.patient_location}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Priority</b>
                          </td>
                          <td>{this.state.Priority}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Comments</b>
                          </td>
                          <td>{this.state.comments1}</td>
                        </tr>
                        <tr>
                          <td valign="top" width="150px;">
                            <b> Verified By</b>
                          </td>
                          <td>
                            {" "}
                            {name} on{" "}
                            {moment(this.state.updatedAt)
                              .locale("en")
                              .format("DD-MM-YYYY")}{" "}
                            {moment(this.state.updatedAt)
                              .locale("en")
                              .format("HH:mm:ss")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div style={{ marginLeft: "500px", marginTop: "200px" }}>
                  {" "}
                  <Loader
                    type="Circles"
                    color="#f39510"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ViewRequest;
