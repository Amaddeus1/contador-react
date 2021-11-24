const Contador = () =>{
    const [contador,setContador] = React.useState(0);

    const aumentar = () => {setContador(contador+1)};
    const reducir = () => {setContador(contador -1)};
    const resetear = () => {setContador(contador-contador)};
    return(
        <div>
            <h1 className={contador < 0 ? "menor" : "mayor"}>Contador : {contador} </h1>
            <hr/>
            <button onClick={aumentar}>Agregar</button>
            <button onClick={reducir}>Reducir</button>
            <button onClick={resetear}>Resetear</button>

        </div>
    )
}