import Image from 'next/image';
import myPic from '../../../public/resume_pic.jpg';
import kakaoProfile from '../../../public/kakao_profile.jpeg';
import { IconContext } from "react-icons";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGitHub";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import {SiKakao, SiKakaotalk} from "react-icons/si";
import Display from '../../../styles/Display.module.css';
import styled from "styled-components";
import MobileFlag from "../layout/MobileFlag";

const ProfileDisplay = () => {

    const isMobile = MobileFlag();

    const profile = [
        {tag : "Name" , val : " Jihwan"},
        {tag : "Age" , val : " 30"},
        {tag : "Education" , val : " 인천대학교 전자, 컴퓨터공학과 졸업(복수전공)"},
        {tag : "Position" , val : " Backend Developer"},
        {tag : "Contact" , val : " Please check the below"}
    ]

    const generateIcon = (type: 'all' | 'git' | 'etc') => {
        switch (type) {
            case 'all':
                return (
                    <IconContext.Provider value={{ size : '3rem'}}>
                        <div style={{display : 'flex' , marginBottom: '10px'}}>
                            <div style={{width : '40px', height : '100%' , cursor : 'pointer'}} onClick={() => { window.location.href = 'https://github.com/stephano-tri' }}>
                                <AiFillGithub size={20}/>
                            </div>
                            <div style={{width : '40px', height : '100%' , cursor : 'pointer'}} onClick={() => { window.location.href = 'mailto:mtriumph23@gmail.com' }}>
                                <FaEnvelope size={18} />
                            </div>
                            <div style={{width : '40px', height : '100%' , cursor : 'pointer'}} onClick={() => { window.open(kakaoProfile.src) }}>
                                <SiKakaotalk size={20} />
                            </div>
                        </div>
                    </IconContext.Provider>
                )
        }
    }

    const generateIntroduce = () => {
        return (
            <div style={{width : !isMobile ? "100%" : '550px', height : '100%' , display: 'flex' , flexDirection: 'column'}}>
                {profile.map((pr: any , idx: number) => {
                   return (
                       <InsideIntroduce>
                            <div style={{whiteSpace : 'pre'}}>
                                {pr.tag} { " : "}
                            </div>
                            <div style={{color: '#FCAE1E', fontWeight : 'bold'}}>
                                {pr.val}
                            </div>
                       </InsideIntroduce>
                   )
                })}
            </div>
        )
    }

    return (
        <div style={{width : !isMobile ? "700px" : '500px', padding : '0 2rem' ,  height : '100%' , display : 'flex' , marginTop : '25px' , flexDirection : 'row'}}>
            <div style={{width : '250px' ,height : '100%'}}>
                {!isMobile &&
                    <Image src={myPic} layout={'responsive'} className={Display.MainImg}/>
                }
            </div>
            <div style={{width : !isMobile ? '700px' : '500px' , display: 'flex' , flexDirection: 'column' , marginLeft: !isMobile ? '15px' : '0px', whiteSpace: 'pre'}}>
                {generateIntroduce()}
                {generateIcon('all')}
            </div>
        </div>
    )
}

const InsideIntroduce = styled.div`
   margin-bottom : 20px;
   display : flex;
   flex-direction : row;
`;

export default ProfileDisplay
