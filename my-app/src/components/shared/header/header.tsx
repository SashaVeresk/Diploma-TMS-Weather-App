import React from "react";
import { GlobalSvgSelector } from "../../../app/assets/images/icons/global/globalSvgSelector";
import './header.scss';


interface Props {}

export const Header = (props: Props) => {
    return (
    <div className="header">
       <div className="wrapper">
           <div className="logo">
               <GlobalSvgSelector id="header-logo"/>
               </div>
           <div className="title">Weather</div>

       </div>
       <div className="wrapper">
           <div className="change_theam">
               <GlobalSvgSelector id="change-theam" />
           </div>
       </div>

    </div>
    )
}