import { useState } from "react"




const Card = (props) => {
    const [checked, setChecked] = useState(false)
    function checker() {
        setChecked(!checked)
    }
    return (
        <section className="mt-4">
            <div className="flex items-center">
            <input className=""
            type="checkbox"
            onChange = {checker}/>
            <p className="text-2xl">{props.text}</p>
        </div>

        <img src="./trash-solid.svg"
        className="w-12 border-2 border-teal-500 rounded-full p-2"
        alt="trash-icon"
        name = {props.id}
         />
        
        </section>
        
    )
}

export default Card 