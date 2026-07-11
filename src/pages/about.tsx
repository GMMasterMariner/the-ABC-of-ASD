import { useState } from "react"

export default function About() {
    const [count, setCount] = useState(0)

    const addOne = () => setCount(count+1)
    
    return (
    <div>
        <button type="button" onClick={addOne}>Count is {count}</button>
    </div>
    )
}
