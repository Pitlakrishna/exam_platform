
import { FaWpforms } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import './index.scss'


export const Sidebar = () => {
    return(
        <aside id="sidebar" className="sidebar">
            <div className="logo-img d-flex flex-column align-items-center mb-3">
                <img src="https://r2.erweima.ai/imgcompressed/img/compressed_93d2b03b93923a35d17195ac7375e5d7.webp" alt="prof"/>
                <h5 className="mt-3">Hello Eswararao</h5>
            </div>
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed">
                        <FaWpforms className="i"/>
                        <span className="">Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed" data-bs-target = "#components-nav" data-bs-toggle = "collapse">
                        <FaWpforms className="i"/>
                        <span className="">Profile</span>
                        <GoChevronDown className="ms-auto i"/>
                    </a>
                    <ul id="components-nav" className="nav-content collapse" data-bs-parent = "#sidebar-nav">
                        <li>
                            <a href="/dashboard">
                                <span>Personal Details</span>
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard">
                                <span>Education</span>
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard">
                                <span>Resume</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed">
                        <FaWpforms className="i"/>
                        <span className="">Results</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed">
                        <FaWpforms className="i"/>
                        <span className="">Practice</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed">
                        <FaWpforms className="i"/>
                        <span className="">Invite Friends</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}