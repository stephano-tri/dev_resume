import tab from '../../../styles/Tab.module.css'
import {Menu} from "../../types/Fundamental";
import React from "react";
import MobileFlag from "../layout/MobileFlag";

const MenuData : Menu[] =[
    {name : "Profile"},
    {name : "Post"},
    {name : "Work Experience"},
    {name : "Project"}
]

interface IProps {
    index : number
    onClickHandler : any
}

const HeaderTab : React.FunctionComponent<IProps> = ({index , onClickHandler}) => {
    const isMobile = MobileFlag();

    return(
        <div key={"mainMenuTab"} className={tab.Container} style={{width : !isMobile ? "700px" : '100%'}}>
            {
                MenuData.map((v,i) => (
                    <>
                    <div key={i + '_' +v.name } onClick={() => {onClickHandler(i)}} className={'menu'}>
                        <div style={{display : 'flex'}}>
                            <div style={{marginRight : '15px'}}>
                                { i == index && '>.' }
                            </div>
                            <div className={tab.inMenu}>
                                {v.name}
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                    .menu {
                      color : ${i ==  index ? '#FCAE1E' : '#000000'};
                      font-weight : ${i == index ? 'bold' : 'initial'};
                    }
                    `}
                    </style>
                    </>
                ))
            }
        </div>
    )
}
export default HeaderTab
