import { Icon } from './../../components'

const Input = ({ name, type, placeholder, label  }) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
        <input name={name} id={name} type={type} placeholder={placeholder} className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"/>
    </div>
)

export const Signup = () => {
    return( 
        <div>
            <header className="flex justify-center p-4 border-b border-red-300">
                <img src="/imgs/logo-fundo-branco.svg" className="w-32 md:w-40"/>
            </header>
            <main className="p-4 container max-w-xl">
                <div className="p-4 flex space-x-2 items-center">
                    <a href="/">
                        <Icon name="arrowLeft" className="h-6"/>
                    </a>
                    <h2 className="text-xl font-bold">Crie Sua Conta</h2>
                </div>

                <form className="p-4 space-y-6">
                    <Input 
                        type="text"
                        name="name"
                        label="Seu Nome"
                        placeholder="Digite seu Nome"
                    />

                    <Input 
                        type="text"
                        name="username"
                        label="Seu Nome de Usuário"
                        placeholder="Digite seu Nome de Usuário"
                    />

                    <Input 
                        type="text"
                        name="email"
                        label="Seu e-mail"
                        placeholder="Digite seu E-mail"
                    />

                    <Input 
                        type="password"
                        name="password"
                        label="Sua Senha"
                        placeholder="Digite sua Senha"
                    />

                    <a href="/dashboard" className="block w-full text-center text-white bg-red-500 text-base px-6 py-3 rounded-xl">
                        Criar Sua Conta
                    </a >
                </form>
            </main>
        </div>
    )
}