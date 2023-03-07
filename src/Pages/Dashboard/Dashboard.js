import React from 'react';
import DashboardStockAlertTable from './DashboardStockAlertTable/DashboardStockAlertTable';
import DashboardTodaySummary from './DashboardTodaySummary';
import DashboardTopBar from './DashboardTopBar';
import TopSellingProductsTable from "./DashboardTopSellingProducts/DashboardTopSellingProducts"
import DashboardRecentSalesTable from './DashboardRecentSalesTable/DashboardRecentSalesTable';

const Dashboard = () => {
    return (
        <div className="w-full h-screen" >
            <DashboardTopBar />
            <DashboardTodaySummary />
            <div className="grid grid-cols-3 lg:h-[28%] 2xl:h-[33%]">
                <DashboardStockAlertTable />
                <TopSellingProductsTable />
            </div>
            <DashboardRecentSalesTable />
        </div>
    );
};

export default Dashboard;