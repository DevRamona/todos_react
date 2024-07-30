import { useState } from "react"




const Card = (props) => {
    const [checked, setChecked] = useState(false)
    function checker() {
        setChecked(!checked)
    }

    const styles = {
        textDecoration :"line-through",
        color : "red"
    }
    return (
        <section className="mt-4 flex justify-between">
            <div className="flex items-center">
            <input className=""
            type="checkbox"
            onChange = {checker}/>
            <p className="text-2xl font-serif" style = {checked ? styles : {}}>
                
                {props.text}</p>
        </div>

        <img src="./trash-solid.svg"
        onClick={props.delete}
        className="w-12 border-2 text-red-500 rounded-full p-2"
        alt="trash-icon"
        name = {props.id}
         />
        
        </section>
        
    )
}

export default Card 