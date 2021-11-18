import React, { useState } from 'react'
import '../assets/scss/container.scss'

const Vault = () => {
    
    
    
    const [toggle, setToggle] = useState("stack")
    
    // const onStackChange=(e)=>{
    //     console.log(e.target.name);
    //     if(e.target.name)setToggle(e.target.name);
    // }

  
   
    return (
        
        <div className="vault-container">
            <p className="vault_head_left"><b>Vault</b></p>
            <p className="vault_head_right"><b> tvl:$232,300</b></p>
            <div className="your_staked text-center">
                <span>you have staked</span>
                <p>0 asva</p>

            </div>
            <div className="rewards">
            <span>rewards <p>0 asva</p></span>
                <p className="amount_vault">=$0.00</p>
                <button className="claim">claim</button>
            </div>
            <div className="toggel_stack">
                <button className={`toggle-btn ${toggle === "stack" ? "active":""}`} name="stack" onClick={()=>setToggle("stack")}>stack <span>asva</span></button>
                <button className={`toggle-btn ${toggle === "unstack" ? "active":""}`} name="unstack"onClick={()=>setToggle("unstack")}>unstack</button>
            </div>
            {toggle==="stack"?<>
            <div className="bal-add">
                <button>max</button>
                <label htmlFor="">balance :<span>0</span></label> <br />
                <input type="text" placeholder="Enter quantity to be staked"/>
            </div>
            <div className="bal-add-buttom">
                <label htmlFor="">APY | Lockin Time</label>
                <div>
                    <div>
                        <p>12%</p>
                        <span>30 days</span>
                    </div>
                    <div>
                        <p>12%</p>
                        <span>30 days</span>
                    </div>
                    <div>
                        <p>12%</p>
                        <span>30 days</span>
                    </div>
                    <div>
                        <p>12%</p>
                        <span>30 days</span>
                    </div>
                </div>
            </div>
            </>:
            <>
            <div className="bal-add">
                <label htmlFor="">balance :<span>0</span></label> <br />
                <label className="unstack"htmlFor="">0.0</label>
            </div>
            <div className="bal-add-buttom extra-bottom">
                
                <div>
                    <div>
                        <p>12%</p>
                    </div>
                    <div>
                        <p>12%</p>
                    </div>
                    <div>
                        <p>12%</p>
                    </div>
                    <div>
                        <p>12%</p>
                    </div>
                </div>
            </div>
            </> }   
            <button className="stake">stake</button>

            

        </div>
        
        
    )
}

export default Vault
