import styled from 'styled-components';
import search from '../img/icon/ic_baseline-search.png'
import alarm from '../img/icon/streamline_interface-alert-alarm-bell-1-notification-vibrate-ring-sound-alarm-alert-bell-noise.png';
import down from '../img/icon/Group.png';
import profile from '../img/icon/Ellipse 1.png';

const ProfileBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    width: 20vw;
    justify-content: space-evenly;

    >img{
    width:20px;
    }

    .profile{
    width:50px;
    margin-left:-2vw;
    }

    .down{
        margin-left:-3vw;
    }
   
   .alarm{
    margin-right:-2vw;
   }
`;

const HeadContainer = styled.div`
display:flex;
flex-direction:row;
height: 15vh;
width:60vw;
justify-content: space-around;
`;

const SearchBox = styled.div`
display:flex;
flex-direction: row;
align-items:center;
margin-top: 5.5vh;
height: 5.5vh;
width: 20vw;
background: #CAF0D9;
border-radius: 15px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

>img {
 width: 30px;
 margin-right:10px;
}

> div {
font-family: 'Merriweather';
font-style: normal;
font-weight: 300;
font-size: 18px;
color: #A2A2A2;
}
`;

const Header = () => {
    return(
        <HeadContainer>
        <SearchBox>
        <img src ={search} alt="icon"></img>
        <div>Search</div>
        </SearchBox>
        <ProfileBox>
        <img className="alarm" src={alarm} alt="icon"></img>
        <div>jieun</div>
        <img className="down" src={down} alt="icon"></img>
        <img className='profile' src={profile} alt="icon"></img>
        </ProfileBox>
        </HeadContainer>
    )
    };
    export default Header;