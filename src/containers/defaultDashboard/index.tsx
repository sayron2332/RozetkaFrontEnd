
import "./App.css";
import DashboardFooter from "../../components/dashboardFooter";
import DashboardHeader from "../../components/dashboardHeader";
import SideMenu from "../../components/sideMenu";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

function DefaultDashboard() {
  return (
    <div className="App">
      <DashboardHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <Content>
            <Outlet/>
        </Content>
      </div>
      <DashboardFooter />
    </div>
  );
}
export default DefaultDashboard;
