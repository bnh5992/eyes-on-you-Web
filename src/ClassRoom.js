import React, {Component, useState} from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import './ClassRoom.css'
import FileUploader from "./FileUploader";

const ClassRoom = () => {
    return (
        <div className="class-room">
            <TopBar/>
            <div className="main-contents">
                <SideBar/>
                <FileUploader/>
            </div>
        </div>
    );
}
export default ClassRoom
