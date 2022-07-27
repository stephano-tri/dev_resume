import HeaderTab from "../header/HeaderTab";
import {PropsWithChildren} from "react";

const MainLayout = ( {children} : PropsWithChildren<any> ) => {
    return(
        <div>
            {children}
        </div>
    )
}
export default MainLayout
