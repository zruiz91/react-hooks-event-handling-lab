// Code EyesOnMe Component Here


function EyesOnMe() {

    function eyesFocus(){
        console.log('Good!')
    }

    function eyesBlur(){
        console.log('Hey! Eyes on me!')
    }

    return (
        <div>
            <button onFocus={eyesFocus} onBlur={eyesBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;