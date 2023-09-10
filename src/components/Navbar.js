import logo from "../page/assets/icons/profile.png";
import naruto from "../page/assets/icons/otaku.png";
import man from "../page/assets/icons/man.png";
import dota2 from "../page/assets/icons/dota-2.png";

const NavBar = () => {
    return(     
        <div className="flex justify-between items-center">
            <img src={logo} alt="logo" width={50} className="cursor-pointer "/>
            <ul className="hidden md:flex">
                <li className="px-3 py-5"><a href="https://naruto.fandom.com/wiki/Naruto_Uzumaki" target="blank"><img src={naruto} alt="naruto" width={50}/></a></li>
                <li className="px-3 py-5"><a href="https://en.wiktionary.org/wiki/gigachad" target="blank"><img src={man} alt="man" width={50}/></a></li>
                <li className="px-3 py-5"><a href="https://www.dota2.com/home" target="blank" ><img src={dota2} alt="dota2" width={50}/></a></li>
            </ul>
        </div>
    )
}

export default NavBar;