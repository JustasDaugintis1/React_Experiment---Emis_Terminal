import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavRow from 'react-bootstrap/lib/Nav';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';
import PatientViewer from './PatientViewer';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar>
                        <NavbarHeader>
                            <NavbarBrand >
                                <div
                                    style={{
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginLeft: -300,
                                    marginBottom: 10
                                }}>
                                    <h1
                                        style={{
                                        fontSize: 40,
                                        fontFamily: 'Helvetica, sans-serif'
                                    }}>emis health
                                        <small
                                            style={{
                                            margin: 30
                                        }}>Terminal</small>
                                    </h1>
                                    <img
                                        style={{
                                        width: 70
                                    }}
                                        src={require("C:/NewProject/emis-react-skeleton/src/Pictures/EMISGroupLogo_icon.png")}
                                        alt=""></img>
                                </div>
                            </NavbarBrand>
                        </NavbarHeader>
                        <NavRow
                            style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <NavItem >
                                <Link
                                    to="/"
                                    style={{
                                    fontSize: 20
                                }}>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/login"
                                    style={{
                                    fontSize: 20
                                }}>Login</Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    to="/patientrecview"
                                    style={{
                                    fontSize: 20
                                }}>Patient Record Viewer</Link>
                            </NavItem>
                        </NavRow>
                    </Navbar>

                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/patientrecview" component={PatientViewer}/>
                </div>
            </Router>
        );
    }
}

export default AppRouter;
