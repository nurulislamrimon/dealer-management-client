import React from 'react';
import RecentSalesTable from './RecentSalesTable/RecentSalesTable';
import StockAlertTable from './StockAlertTable/StockAlertTable';
import TodaySummary from './TodaySummary';
import DashboardTopBar from './DashboardTopBar';
import TopSellingProductsTable from "./TopSellingProducts/TopSellingProducts"

const Dashboard = () => {
    return (
        <div className="menu-container" >
            <DashboardTopBar />
            <TodaySummary />
            <div className="grid grid-cols-3">
                <StockAlertTable />
                <TopSellingProductsTable />
            </div>
            <RecentSalesTable />
        </div>
    );
};

export default Dashboard;