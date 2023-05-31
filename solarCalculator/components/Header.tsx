import React from "react"
import Menu from "./menu"

interface subMenuProps{
    items:string[],
    links:string[],
    title:string,
    selectedLink: string;

}

const Header: React.FC<subMenuProps> = (props)=>{
    const { title, items, links, selectedLink } = props;
return(
    <header className="bg-white shadow">
<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 justify-between flex flex-row flex-wrap align-middle pt-4 items-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          <div className="flex flex-row px-4 mx-2 align-middle pt-4 items-center">
           {/* <Menu menuItems={items} links={links} handleLinkClick={()=>{null}} classNames="focus:border-green-400 hover:border-red-700 hover:border-solid hover:border-b-2 text-gray-300 px-3 py-2 text-sm font-medium" />*/}
            {selectedLink && (
            <div>
              Sub Menu for {selectedLink} // Replace this with your desired sub menu component or content
            </div>
          )}
           </div>
          </div>
    </header>
)
}

export default Header