function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MyMainContent() {
    return (
        <h1>
            Start Composable!
        </h1>
    )
}

// An declarative way
// ReactDOM.render(
//     <div>    
//         <Navbar />
//         <MyMainContent />
//     </div>,
//     document.getElementById("root")
// )

// An imperative way to program
// (() => { 
//     let h1 = document.createElement("h1");
//     h1.appendChild(document.createTextNode("vanilla JS"));
//     h1.className = "header";
//     document.getElementById("root").appendChild(h1);
// })()

// JSX practice: nav bar
// function MyNaviBar() {
//     return (
//         <nav>
//             <h1>website</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     );
// }
// ReactDOM.render(
//     <MyNaviBar />,
//     document.getElementById("root")
// );

// section project
const body = (
    <div>
        <i className="fa-brands fa-react" width="40px"></i>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li> 
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)
ReactDOM.render(body, document.getElementById("root"))