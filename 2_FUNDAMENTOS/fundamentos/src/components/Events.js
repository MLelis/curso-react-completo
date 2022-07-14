const Events = () => {

    const handleMyEvent = () => {
        console.log("Ativou");
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Redenrizando isso!</h1>
        }else{
            return <h1>Renderizando isso aqui!</h1>
        }
    }

    return(
        <div>

            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
            <div>
                <button onClick={() => {
                        if(true){
                            console.log("Isso não deveria existir");
                        }
                    }}>
                        Clique aqui ue!
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events