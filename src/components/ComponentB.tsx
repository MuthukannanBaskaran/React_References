import { useContext } from "react";
import MessageContext from "../context/MessageContext";

export default function ComponentB() {
    const userData = useContext(MessageContext);
    const dataPrint = `My name is ${userData.firstname} and my father's name is ${userData.father}. My mother's name is ${userData.mother} and my spouse's name is ${userData.spouse}. I am ${userData.age} years old.`
    return (
        <div>
            <h1>Component B</h1>
            <p>{dataPrint}</p>
        </div>
    )
}