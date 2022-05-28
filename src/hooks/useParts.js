import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch("https://still-tor-25168.herokuapp.com/parts")
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);
    return [parts, setParts]
}
export default useParts;