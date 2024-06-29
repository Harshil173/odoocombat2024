import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import makeRequest from "../../../Helpers/makeRequest";

function Register() {

    const [currentRegType, setCurrentRegType] = useState("advertiser");
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRepass] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await makeRequest('post', '/auth/register', { email, pass });
            if (response.data.status === -1) {
                console.log(response.message)
            } else if (response.data.status === 1) {
                navigate('/home');
            }
        } catch (error) {
            console.error('Error logging in', error.response.data.message);
        }
    };

    return (
        <div className="registeration">
            <div>
            <div className="registration-type-selector">
                <span onClick={() => setCurrentRegType("advertiser")}>Advertiser</span>
                <span onClick={() => setCurrentRegType("ad_space_owner")}>Ad Space Owner</span>
                <span onClick={() => setCurrentRegType("admin")}>Admin</span>
            </div>
            <div style={{minWidth: "650px", minHeight:"400px", border: "1px solid gray", padding: "40px", borderRadius: "0px 0px 5px 5px"}}>
            <h3>Sign up for OOH</h3>
            <p style={{marginBottom: "12px"}}>New to OOH, Let's get you started!</p>
            <form className="active-form" onSubmit={handleSubmit}>
                {currentRegType === "advertiser" && (
                    <input
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                    />
                )}
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Re-enter Password"
                    value={repass}
                    onChange={(e) => setRepass(e.target.value)}
                    required
                />
                <button type="submit">Create account</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Register;
