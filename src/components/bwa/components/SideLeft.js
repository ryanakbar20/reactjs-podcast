import React from 'react';
import {Link} from 'react-router-dom';
import IconShortcut from './IconShortcut';

const SideLeft = (props) => {
    return (
        <div>
                <div className="side-left">
                    <div className="shortcut">
                        <div style={{height: "70px", backgroundColor: "#7180ff"}}>
                            <img src="./icon_pagoda.png"/>
                        </div>
                        <div className="img">
                            <Link to="/dashboard">
                                <IconShortcut className={`img-menus first ${props.dashboard}`} src={"./icon_pagoda.png"} />
                            </Link>
                            <Link to="/ticketsales">
                                <IconShortcut className={`img-menus ${props.ticketsales}`} src={"./icon_pagoda.png"} />
                            </Link>
                            <Link to="/managewisata">
                                <IconShortcut className={`img-menus ${props.managewisata}`} src={"./icon_pagoda.png"} />
                            </Link>
                            <Link to="/customers">
                                <IconShortcut className={`img-menus ${props.customers}`} src={"./icon_pagoda.png"} />
                            </Link>
                            <Link to="/accountsettings">
                                <IconShortcut className={`img-menus ${props.accountsettings}`} src={"./icon_pagoda.png"} />
                            </Link>
                            <Link to="/dashboard">
                                <IconShortcut className={`img-menus last ${props.logout}`} src={"./icon_pagoda.png"} />
                            </Link>
                        </div>
                        
                    </div>
                    <div className="admin-profile">
                        <div className="admin-picture">
                            <img src="./profil.png" />
                        </div>
                        <div className="admin-name">
                            <p>Ryan Akbar</p>
                            <p className="last">Super Admin</p>
                        </div>
                        <div className="shortcut-title">
                            <Link to="/dashboard">
                                <p className={`${props.dashboard}`}>My Dashboard</p>
                            </Link>
                            <Link to="/ticketsales">
                                <p className={`${props.ticketsales}`}>Ticket Sales</p>
                            </Link>
                            <Link to="/managewisata">
                                <p className={`${props.managewisata}`}>Manage Wisata</p>
                            </Link>
                            <Link to="/customer">
                                <p className={`${props.customer}`}>Customers</p>
                            </Link>
                            <Link to="/accountsettings">
                                <p className={`${props.accountsettings}`}>Account Settings</p>
                            </Link>
                            <Link to="/#">
                                <p className={`last ${props.logout}`}>Log Out</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SideLeft;