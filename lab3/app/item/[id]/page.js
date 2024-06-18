import TestBtn from "./testBtn"
import plus from "@/lib/plus"

export default function Item({params}){

    const added = plus(2,7)

    return(
        <div>
            <p>Item : {params.id}</p>
            <p>{added}</p>
            <TestBtn/>
        </div>
    )
}