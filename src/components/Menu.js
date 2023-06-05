import styled from 'styled-components';
import overview from "../img/icon/homie.png";
import health from "../img/icon/iconoir_healthcare.png"
import money from "../img/icon/la_money-bill-wave.png"
import relationship from "../img/icon/carbon_friendship.png";
import hobby from "../img/icon/solar_emoji-funny-circle-line-duotone.png";
import calendar from "../img/icon/ph_calendar-duotone.png";
import settings from "../img/icon/ant-design_setting-filled.png";
import logout from "../img/icon/ion_log-out-sharp.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #a1aaab;
`;

const Img = styled.img`
margin-right: 1vw;
`;

const Empty = styled.div`
height: 10vh;
`;
const Item = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 2vh;
text-decoration: none;
text-underline-position:none;
>img{
    width: 30px;
  }
`;
const Name = styled.div`
color:#40513B;
font-family: 'Merriweather';
font-weight: 900;
font-size: 30px;
margin-top: 13vh;
`;

const MenuContainer = styled.div`
  width: 20vw;
  height: 100vh;
  border: 1px solid #E6E6E6;
  border-radius: 30px 0 0 30px;
  box-shadow: inset 0px 4px 4px #949693;
  display:flex;
  flex-direction:column;
  align-items: center;
`;

const MenuSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  line-height: 30px;
  color: #A1AAAB;
  font-family: 'Merriweather';
  font-style: normal;
  margin-top: 10vh;
`;

const Menu = () => {
    const [color, setColor] = useState(['#40513B','#A1AAAB','#A1AAAB','#A1AAAB','#A1AAAB','#A1AAAB','#A1AAAB','#A1AAAB']);
    
    function colorChange(i){
        const newColor = color.map((item,index)=> (index === i ? '#40513B' : '#A1AAAB'))
        setColor(newColor)
        };
    

return(
    <MenuContainer>
    <Name>.studio</Name>
    <MenuSelector>
    <StyledLink to ="/">
    <Item onClick={() => colorChange(0)} style={{ color: color[0] }}>
        <Img src={overview} alt="icon"/> 
        <div>Overview</div>
    </Item>
    </StyledLink>
    <StyledLink to ="/health">
    <Item onClick={() => colorChange(1)} style={{ color: color[1] }}>
        <Img src={health} alt="icon"/>
        <div>Health</div>
    </Item>
    </StyledLink>
    <StyledLink to ="/money">
    <Item onClick={() => colorChange(2)} style={{ color: color[2] }}>
        <Img src={money} alt="icon"/>
        <div>Money</div>
    </Item>
    </StyledLink>
    <StyledLink to ="/relationship">
    <Item onClick={() => colorChange(3)} style={{ color: color[3] }}>
        <Img src={relationship} alt="icon"/>
        <div>Relationship</div>
    </Item>
    </StyledLink>
    <StyledLink to ="/hobby">
    <Item onClick={() => colorChange(4)} style={{ color: color[4] }}>
        <Img src={hobby} alt="icon"/>
        <div>hobby</div>
    </Item>
    </StyledLink>
    <StyledLink to="/calendar">
    <Item onClick={() => colorChange(5)} style={{ color: color[5] }}>
        <Img src={calendar} alt="icon"/>
        <div>Calendar</div>
    </Item>
    </StyledLink>
    <Empty></Empty>
    <StyledLink to="/settings">
    <Item onClick={() => colorChange(6)} style={{ color: color[6] }}>
        <Img src={settings} alt="icon"/>
        <div>Settings</div>
    </Item>
    </StyledLink>
    <StyledLink to="/logout">
    <Item onClick={() => colorChange(7)} style={{ color: color[7] }}>
        <Img src={logout} alt="icon"/>
        <div>Log out</div>
    </Item>
    </StyledLink>
    </MenuSelector>
    </MenuContainer>
)
};
export default Menu;