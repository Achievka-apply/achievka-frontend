export default function Header() {
    return (
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                    <li><a href="#" className="nav-link px-2 link-body-emphasis">Inventory</a></li>
                    <li><a href="#" className="nav-link px-2 link-body-emphasis">Customers</a></li>
                    <li><a href="#" className="nav-link px-2 link-body-emphasis">Products</a></li>
                </ul>

                <div className="dropdown text-end">
                    <ul className="dropdown-menu text-small">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}