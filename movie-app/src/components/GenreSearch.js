
export default function GenreSearch(){
    //fetch genres
    //show drop down list

    return(
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
                Dropdown
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="\">Movies</a></li>
                <li><a className="dropdown-item" href="\">TV</a></li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="\">Something else here</a></li>
            </ul>
        </li>
    );
}