import React, { useState } from 'react'
import '../../assets/scss/header.scss'
import logo from "../../assets/images/logo.svg"
import fuel from '../../assets/images/gas-pump.svg'
import arrow from '../../assets/images/arrow-down.svg'
const Header = () => {
    const [visible, setVisible] = useState(false)
    const dropdown=()=>{
        if(visible === false){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }
    return (
        <div className="navbar">
            <nav>
                <span><img className="logo" src={logo} alt="" /></span>
                <ul>
                    <li className="active">Buy ASVA</li>
                    <li>0 ETH</li>
                    <li>0xf293i829</li>
                    <li className="fuel "onClick={dropdown}><img src={fuel} alt="" />95 <img src={arrow} alt="" />
                       { visible ?
                        <ul className="dropdown">
                            <span>Select Gas Setting</span>
                            <li>standerd <br />(13 Gwei)</li>
                            <li>fast <br />(15 Gwei)</li>
                            <li>instant <br />(23 Gwei)</li>
                        </ul>:null
                        }
                    </li>
                    <li>EN</li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Header
