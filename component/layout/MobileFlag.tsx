import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";

const MobileFlag = () => {
    const [isMobile , setIsMobile] = useState<boolean>(false)
    const mobileFlag = useMediaQuery({query : "(max-width: 740px)"})

    useEffect(() => {
        setIsMobile(mobileFlag)
    }, [mobileFlag])

    return isMobile
}
export default MobileFlag
