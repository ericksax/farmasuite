import { MenuLink } from "./menuLink"

export const Menu = () => {

    return (
        <nav className=''>
            <ul className='flex gap-8 p-4 font-thin'>
                <MenuLink label="Relatórios"/>
                <MenuLink label="Home"/>
            </ul>
        </nav>
    )
}