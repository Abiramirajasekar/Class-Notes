import { useState } from 'react';
import Card from './Card';
const InputTags = () => {
    const [form, setForm] = useState({
        name: "",
        height: "",
        weight: "",
        level: 0,
        id: Date.now()
    })
    const [data, setData] = useState([])
    const [dis, setDis] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
        setDis(true)
    }


    function handleClick(e) {
        e.preventDefault()
        setData([...data, form])
    }
    // 
    console.log(data)
    return (
        <>
            <form onSubmit={handleClick}><label>NAME:</label>
                <input data-testid="input-name" type="text" value={form.name} name="name" onChange={handleChange} /><br /> <br />
                <label>HEIGHT:</label>
                <input data-testid="input-height" type="text" value={form.height} name="height" onChange={handleChange} /><br /><br />
                <lable>WEIGHT:</lable>
                <input data-testid="input-weight" type="text" value={form.weight} name="weight" onChange={handleChange} /><br /><br />
                <label>POWER:</label>
                <input data-testid="input-power" type="text" value={form.level} name="level" onChange={handleChange} /><br /><br />
                <button data-testid="add-button" disabled={dis === false} >Add SuperHero</button><br /><br />
            </form>
            <button data-testid="most-powerfull">Most Powerful Superhero</button>
            <button data-testid="all-superheroes">Show All</button>
            <Card data={data} />
        </>
    )
}

export default InputTags;
