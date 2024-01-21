import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";


function DashboardHeader() {
  

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
      ></Image>
      <Typography.Title>Aamir's Dashboard</Typography.Title>
      <Space>
        <Badge dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              
            }}
          />
        </Badge>
        <Badge >
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
            
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
      
        onClose={() => {
         
        }}
        maskClosable
      >
        <List
       
         
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
      
        onClose={() => {
        
        }}
        maskClosable
      >
        <List
        
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong></Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}
export default DashboardHeader;
