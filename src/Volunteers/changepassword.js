import React from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import { isAutheticated } from "../auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Changepassword() {
	const {
		user: { name, _id, email },
	} = isAutheticated();

	const history = useHistory();

	const initialValues = {
		password: "",
		newpassword: "",
	};

	const validationSchema = Yup.object({
		password: Yup.string().required("Old Password is required"),
		newpassword: Yup.string().required("New Password is required"),
	});

	const onSubmit = (values, actions) => {
		const { user, token } = JSON.parse(sessionStorage.getItem("user"));
		axios
			.post(
				`${process.env.REACT_APP_BASE_URL}/volunteers/volunteerchangepassword`,
				{
					userid: user._id,
					password: values.password,
					newpassword: values.newpassword,
				},
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			)
			.then(({ data: { success, message } }) => {
				success
					? history.push("/volunteer_request")
					: actions.setFieldError("password", message);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	};

	return (
		<div>
			<Sidebar></Sidebar>
			<div className="admin-wrapper col-12">
				<div className="admin-content">
					<div className="admin-head">Change Password</div>
					<div className="admin-data">
						<div className="container-fluid p-0">
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={onSubmit}
							>
								{(formik) => {
									return (
										<Form>
											<div className="row m-0">
												<div className="col-lg-12 p-0">
													<div className="form-group tags-field row m-0">
														<label className="col-lg-2 p-0">Old Password</label>
														<Field
															className="form-control col-lg-6"
															type="password"
															name="password"
															placeholder="*****"
														/>
														<ErrorMessage name="password" />
													</div>
												</div>
												<div className="col-lg-12 p-0">
													<div className="form-group tags-field  row m-0">
														<label className="col-lg-2 p-0">New Password</label>
														<Field
															className="form-control col-lg-6"
															type="password"
															name="newpassword"
															placeholder="*****"
														/>
														<ErrorMessage name="newpassword" />
													</div>
												</div>

												<div className="col-lg-12 p-0">
													<div className="form-group tags-field  row m-0">
														<label className="col-lg-2 p-0" />
														<div className="col-lg-6 p-0">
															<div className="button button-contactForm boxed-btn">
																<Button type="submit">Save Password</Button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Form>
									);
								}}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Changepassword;