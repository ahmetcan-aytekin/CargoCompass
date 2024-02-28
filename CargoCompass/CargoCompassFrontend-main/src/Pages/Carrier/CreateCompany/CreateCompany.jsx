import React, { useState } from "react";
import Input from '../../../Components/Input/Input';
import axios from "axios";
import heroBanner from '../../../Components/Assets/hero-banner.jpg'
import {Navbar} from '../../../Components/Navbar/Navbar'
import {Footer} from '../../../Components/Footer/Footer'
import './CreateCompany.css';
import { API_COMPANY_URL } from "../../../Config";

const CreateCompany = (props) => {
    const [form, setForm] = useState({
        name: null,
        registrationNumber: null,
        address: null,
        email: null,
        phoneNumber: null,
        establishmentDate: null,
        userId: null
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const onChange = event => {
        event.preventDefault();
        setSuccess(false);
        const { name, value } = event.target;
        const errorsCopy = { ...errors };
        errorsCopy[name] = undefined;
        setErrors(errorsCopy);
        setForm((previousForm) => ({ ...previousForm, [name]: value }));
    };

    const onClickCreate = async event => {
        event.preventDefault();
        const { name, registrationNumber, address, email, phoneNumber, establishmentDate, userId } = form;
        const body = {
            name,
            registrationNumber,
            address,
            email,
            phoneNumber,
            establishmentDate,
            userId
        };

        try {
            const response = await axios.post(`${API_COMPANY_URL}/api/v1/companies/create`, body);
            if (response.status === 201) {
                setSuccess(true);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.validationErrors) {
                setErrors(error.response.data.validationErrors);
            } else {
                console.error("An error occurred:", error);
                setErrors({ general: "An error occurred. Please try again later." });
            }
        }
    };

    return (
        <div>
            <section style={{ backgroundImage: `url(${heroBanner})` }}>
                <Navbar></Navbar>
                <div className="createCompanyForm">
                    <form className="form-group" style={{ marginTop: '150px', marginBottom: '75px' }}>
                        <h1>Create Company</h1>
                        <Input name="name" type="text" label="Company Name" error={errors.name} onChange={onChange}></Input>
                        <Input name="registrationNumber" type="text" label="Registration Number" error={errors.registrationNumber} onChange={onChange}></Input>
                        <Input name="address" type="text" label="Address" error={errors.address} onChange={onChange}></Input>
                        <Input name="email" type="email" label="Email" error={errors.email} onChange={onChange}></Input>
                        <Input name="phoneNumber" type="tel" label="Phone Number" error={errors.phoneNumber} onChange={onChange}></Input>
                        <Input name="establishmentDate" type="date" label="Establishment Date" error={errors.establishmentDate} onChange={onChange}></Input>
                        <div className="text-center" style={{ marginLeft: 'auto' }}>
                            <button className="btn" onClick={onClickCreate}>Create Company</button>
                            {success && <div className="alert alert-success" role="alert">Company Created</div>}
                        </div>
                    </form>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default CreateCompany;
