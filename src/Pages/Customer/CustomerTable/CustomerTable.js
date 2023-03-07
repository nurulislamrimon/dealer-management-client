import React from 'react';
import CustomerTableRow from './CustomerTableRow';

const CustomerTable = () => {
    return (
        <div className="w-full h-[calc(100vh-160px)] overflow-auto">
            <table className='w-full'>
                <tbody>
                    <CustomerTableRow due={1000}/>
                    <CustomerTableRow />
                    <CustomerTableRow due={1000}/>
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow due={1000}/>
                    <CustomerTableRow />
                    <CustomerTableRow due={1000}/>
                    <CustomerTableRow />
                    <CustomerTableRow />
                    <CustomerTableRow due={1000}/>
                    <CustomerTableRow />
                </tbody>

            </table>
        </div>
    );
};

export default CustomerTable;