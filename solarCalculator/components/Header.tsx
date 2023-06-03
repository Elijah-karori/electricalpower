import React from "react";
import Menu from "./menu";

interface subMenuProps {
  items: string[];
  links: string[];
  title: string;
  selectedLink: string;
  handleTabChange?: (tab: string) => void;
}



const Header: React.FC<subMenuProps> = (props) => {
  const { title, items, links, selectedLink, handleTabChange } = props;

  

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 justify-between flex flex-row flex-wrap align-middle pt-4 items-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        <div className="flex flex-row px-4 mx-2 align-middle pt-4 items-center">
          {selectedLink && (
            <div className="flex flex-row">
             
              <Menu
                menuItems={items}
                links={links}
                classNames="focus:border-green-400 focus:bg-green-400 focus:rounded-lg m-2 align-middle items-center hover:border-red-700 hover:border-solid hover:border-b-2 text-black px-3 py-2 text-sm font-medium"
                handleLinkClick={(link: string) =>
                  handleTabChange && handleTabChange(link.toLowerCase())}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
