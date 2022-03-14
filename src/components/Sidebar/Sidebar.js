import React from 'react'
import './Sidebar.css'
import {ExpandMore,Add,SignalCellularAlt, Call,InfoOutlined, Mic, Headset, Settings} from '@material-ui/icons';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import { Avatar } from '@material-ui/core';

const Sidebar = () => {
    return (
       <div className="sidebar">
           <div className="sidebar-top">
               <h3>Mohak Agrawal</h3>
               <ExpandMore/>
           </div>
           <div className="sidebar-channels">
               <div className="sidebar-channelsHeader">
                   <div className="sidebar-header">
                   <ExpandMore/>
                    <h4>Test Channels</h4>
                   </div>
               <Add className="sidebar-addChannel"/>
               </div>
               <div className="sidebar-channelsList">
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                </div>
           </div>
           <div className="sidebar-voice">
                <SignalCellularAlt
                className="sidebar-voiceIcon"
                fontSize="large"
                />
                <div className="sidebar-voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar-voiceIcons">
                    <InfoOutlined/>
                    <Call/>
                </div>

           </div>

           <div className="sidebar-profile">
                    <Avatar/>
                    <div className="sidebar-profileInfo">
                        <h3>@elmaximo</h3>
                        <p>ThisIsMyId</p>
                    </div>

                    <div className="sidebar-profileIcons">
                        <Mic/>
                        <Headset/>
                        <Settings/>
                    </div>
                </div>
       </div>
    )
}

export default Sidebar
