import Link from "next/link";

const SubHeader = ({ dark }) => {
return (
    <div className="thrown-subheader-area style-two" id="sticky-subheader">
    <div className="container">
        <div className="row align-items-center">
            
            <div className="col-lg-3 align-items-center"></div>
            
            <div className="col-lg-6 align-items-center">
        {/* <div className="col-lg-12"> */}
                <div className="thrown-menu style-two">
                    <ul>
                        <li>
                            <div className="menu-item">
                                {/* <a href="#"> */}
                                <Link legacyBehavior href="#paint">
                                    <a>
                                    行业痛点 {/* Home <i className="fas fa-chevron-down" /> */}
                                    </a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="menu-item">
                                {/* <a href="#"> */}
                                <Link legacyBehavior href="#solutions">
                                    <a>
                                    技术架构 {/* Home <i className="fas fa-chevron-down" /> */}
                                    </a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="menu-item">
                                {/* <a href="#"> */}
                                <Link legacyBehavior href="#solution1">
                                    <a>
                                    智慧交管 {/* Home <i className="fas fa-chevron-down" /> */}
                                    </a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="menu-item">
                                {/* <a href="#"> */}
                                <Link legacyBehavior href="#solution2">
                                    <a>
                                    智慧出行 {/* Home <i className="fas fa-chevron-down" /> */}
                                    </a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            {/* <a href="#"> */}
                            <Link legacyBehavior href="#contact">
                                <a>
                                索取方案 {/* Home <i className="fas fa-chevron-down" /> */}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 align-items-center"></div>
        </div>
        <div className="side-menu-info">
        <div className="sidebar-menu">
            <a className="navSidebar-button" href="#">
            <i className="bi bi-justify-right" />
            </a>
        </div>
        </div>
    </div>
    </div>
);
};

export default SubHeader;