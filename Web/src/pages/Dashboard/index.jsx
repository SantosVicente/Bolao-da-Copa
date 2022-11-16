import { Icon } from './../../components'

export const Dashboard = () => (
    <div className="">
        <header className="bg-red-500 text-white">
            <div className="container max-w-3xl p-4 flex justify-between">
                <img src="/imgs/logo-fundo-vermelho.svg" className="w-32 md:w-40" />
                <a href="/profile">
                    <Icon name="Profile" className="w-10"/>
                </a>
            </div>
        </header>
        
        <main>
            <section id="header" className="bg-red-500 text-white p-4">
                <div className="container max-w-5xl space-y-2">
                    <span>Olá Vicente</span>
                    <h3 className="text-xl font-bold">Qual é o seu palpite?</h3>
                </div>
            </section>

            <section id="content">

            </section>
        </main>
    </div>
)