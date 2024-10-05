import './kartya.css';

function Kartya(props){

    return(
        <div className="kartya">
            <h3>Név: {props.obj.nev}</h3>
            <p>Kor: {props.obj.kor} év</p>
        </div>
    )

}

export default Kartya;