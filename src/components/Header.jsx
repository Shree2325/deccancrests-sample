
export default function Header(props) {

  const menuItems = props.menuItems;
  const menu = menuItems.map((item)=>{
    return <li key={item.link}><a href={item.link}>{item.label}</a></li>
  })
  console.log(menu)
  return (
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {menu}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Deccan Crests</a>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {menu}
        {/* <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Contact</a></li> */}

        {/* <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li> */}
      </ul>
    </div>
   
  </div>
  );
}