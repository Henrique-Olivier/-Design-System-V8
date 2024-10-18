import Input from "./components/Input/Input";

function App(){
    return(
        <>
            <Input size="default" placeholder="Nome" textLabel="Digite seu nome:" textError="Nome inválido" />
            <Input size="default" placeholder="Email" textLabel="Digite seu e-mail:" />
            <Input size="default" placeholder="Senha" textLabel="Digite sua senha:" icon={true}/>
            <Input size="default" placeholder="Telefone" textLabel="Digite seu telefone:" disabled={true} />
        </>
    );
}

export default App;