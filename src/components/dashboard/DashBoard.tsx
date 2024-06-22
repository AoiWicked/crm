import cl from "./DashBoard.module.scss";
import logo from "../../assets/dashboard.svg";
import elipse from "../../assets/Ellipse 8.png";
import Navigation from "../navigation/Navigation";

interface IPropsDash {
    activeDash: boolean;
}

function DashBoard({ activeDash }: IPropsDash) {
    const version = "01";
    const style = activeDash
        ? `${cl.dash} ${cl.show}`
        : `${cl.dash} ${cl.hide}`;

    return (
        <div className={style}>
            <div className={cl.dash__header}>
                <div className={cl.dash__name}>
                    <img src={logo} alt="" />
                    <h1>Dashboard</h1>
                </div>
                <p>v.{version}</p>
            </div>
            <nav className={cl.dash__nav}>
                <Navigation />
            </nav>
            <div className={cl.dash__footer}>
                <img width={42} height={42} src={elipse} alt="elipse" />
                <div className={cl.dash__manager}>
                    <span style={{ color: "#000000", fontSize: "14" }}>
                        Evano
                    </span>
                    <span style={{ color: "#757575", fontSize: "12" }}>
                        Project Manager
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
