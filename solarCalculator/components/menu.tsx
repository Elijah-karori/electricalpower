import React from 'react'


interface menuProps{
menuItems:string[],
links:string[],
classNames:string,
handleLinkClick: (link: string) => void;

}
const Menu : React.FC<menuProps> = (props)=>{
    const { menuItems, links, classNames, handleLinkClick } = props;

return(
    <div >
{menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.match(links[links.indexOf(item)])}`}
                      className={classNames}
                      onClick={() => handleLinkClick(links[index])}
                    >
                      {links[index]}
                    </a>
                  ))}
    </div>
)
}

 export default Menu