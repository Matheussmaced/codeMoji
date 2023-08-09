//Import imgs
import search from '../assets/search.svg' 

const Header = () => {
    return(
        <div id="containerHeader">
            <header>
                <div id="logo">
                    <h2>CodeMoji</h2>
                </div>
                <div id="searchAndUserLogin">
                    <div id="search">
                        <img id='searchImg' src={search} alt="Search icon" />
                    </div>
                    <div id="loginUser">
                        <h3>Fazer login</h3>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
