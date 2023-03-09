import React from 'react';
import CustomersTableRow from './CustomersTableRow';

const CustomersTable = () => {
    return (
        <div className="w-full h-[calc(100vh-160px)] overflow-auto">
            <div className='w-full'>
                <CustomersTableRow customer={{ due: 1000, id: 1 }} />
                <CustomersTableRow customer={{ id: 1 }} />
                <CustomersTableRow customer={{ due: 1000, id: 1 }} />
                <CustomersTableRow customer={{ due: 1000, id: 1 }} />
                <CustomersTableRow customer={{ id: 1 }} />
                <CustomersTableRow customer={{ due: 1000, id: 1 }} />
                <CustomersTableRow customer={{ due: 1000, id: 1 }} />
                <CustomersTableRow customer={{ id: 1 }} />
                <CustomersTableRow customer={{ due: 1000, id: 1 }} />
                <CustomersTableRow customer={{ id: 1 }} />
                <CustomersTableRow customer={{ due: 1000, id: 1 }} />
                <CustomersTableRow customer={{ due: 1000, id: 1 }} />
            </div>
        </div>
    );
};

export default CustomersTable;