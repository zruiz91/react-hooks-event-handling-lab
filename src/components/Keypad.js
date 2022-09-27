// Code Keypad Component Here


// function Keypad() {

//     return (
//         <div>
//             <form>
//                 <input type="password" onChange={console.log("rntering password...")}/>
//             </form>
//         </div>
//     )
// }


function Keypad (){

    function enterPassword() {
        console.log("Entering password...")
    }

    return (
        <div>
            <form>
            <input onChange={enterPassword} type="password"></input>
            </form>
        </div>
    )
}

export default Keypad;


