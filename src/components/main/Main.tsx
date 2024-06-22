import cl from "./Main.module.scss";
import DashBoard from "../dashboard/DashBoard";
import AllCustomers from "../allCustomers/AllCustomers";
import { useState } from "react";
function Main() {
    const [activeDash, setActiveDash] = useState<boolean>(false);
    const openClose = activeDash ? `OPEN NAV` : `CLOSE`;
    const style = activeDash ? `${cl.main__callDash}` : `${cl.main__close}`;
    return (
        <main className={cl.main}>
            <div
                onClick={() => setActiveDash((prev) => !prev)}
                className={style}
            >
                {openClose}
            </div>
            <DashBoard activeDash={activeDash} />
            <div className={cl.main__container}>
                <h2 className={cl.main__hello}>Hello Evano 👋🏼,</h2>
                <div className={cl.main__contant}>
                    <AllCustomers />
                </div>
            </div>
        </main>
    );
}

export default Main;
