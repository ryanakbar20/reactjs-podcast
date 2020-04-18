import React from 'react';
import { Table } from 'react-bootstrap';
import SideLeft from './SideLeft';
import TitlePages from './TitlePages';

const TicketSales = (props) => {
    return (
        <div>
            <SideLeft ticketsales="inactive" />
            <div className="main">
                <TitlePages title="Ticket Sales" subtitle="The items are bought around the world" />
            </div>
        </div>
    )
}

export default TicketSales;