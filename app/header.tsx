import { Menu } from "./menu"

export const Header = () => {
    return (
        <header className="p-4 w-full">
            <div className="flex items-center gap-16 h-full w-full max-w-6xl mx-auto">
                <p><span className="text-slate-500">farma</span>suite</p>
                <Menu/>
            </div>
        </header>
    )

}