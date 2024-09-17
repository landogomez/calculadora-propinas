import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}
export default function MenuItem({item} : MenuItemProps) {
  return (
    <button
    
    >

        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    
    </button>
  )
}
