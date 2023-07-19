import Item from "./Item"

function List() {
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Samsung"/>
            <Item marca="Apple"/>
        </ul>
        </>
    )
}

export default List