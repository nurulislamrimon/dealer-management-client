import React from 'react';
import CustomerTableRow from './CustomerTableRow';

const CustomerTable = () => {
    return (
        <div className="w-full h-[calc(100vh-160px)] overflow-auto">
            <table className='w-full'>
                {/* head */}
                {/* <thead>
                        <tr>
                            <th>Customer Info</th>
                            <th>Last activity</th>
                            <th>Contact</th>
                            <th></th>
                        </tr>
                    </thead> */}
                <tbody>
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow />
                </tbody>

            </table>
        </div>
    );
};

export default CustomerTable;