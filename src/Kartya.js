

function Kartya(props){

    return(
        <div>
            <h3>Név: {props.obj.nev}</h3>
            <p>Kor: {props.obj.kor} év</p>
        </div>
    )

}

export default Kartya;