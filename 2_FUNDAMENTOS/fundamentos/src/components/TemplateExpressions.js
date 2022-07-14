const TemplateExpressions = () => {

    const name = "Marcus";
    const data = {
        age: 26,
        job: "Programmer",
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{ 4+4 }</p>
        </div>
    )
}

export default TemplateExpressions