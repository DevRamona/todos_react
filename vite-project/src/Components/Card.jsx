const Card = () => {
    return (
        <section>
            <h1 className="text-blue-100 text-5xl font-bold text-center" >todos</h1>
            <div>
            <input placeholder="Add todo..." type="text" className="border rounded-2xl mt-4 p-3 w-10/12"/>
            <button className="border px-3 bg-blue-200 rounded-3xl">+</button>
            </div>
           
        </section>
    )
}

export default Card 