import cl from "./AllCustomers.module.scss";
import MyInput from "../../UI/MyInput/MyInput";
import Table from "../allCustomers/Table/Table";
import Pagination from "../pagination/Pagination";
import { useState } from "react";

function AllCustomers() {
    const [value, setValue] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const trimValue = event.target.value;
        if (trimValue.trim().length === 0) {
            setValue("");
            setPage(3);
        } else {
            setValue(trimValue);
        }
    };

    return (
        <div className={cl.allCustomers}>
            <div className={cl.allCustomers__header}>
                <div className={cl.allCustomers__name}>
                    <h3 style={{ fontSize: "22", fontWeight: "bold" }}>
                        All Customers
                    </h3>
                    <span style={{ fontSize: "14" }}>Active Members</span>
                </div>
                <MyInput setValue={handleChange} value={value} />
            </div>
            <Table value={value} page={page} />
            <div className={cl.allCustomers__footer}>
                <span>Showing data 1 to 8 of 256K entries</span>
                <Pagination setPage={setPage} />
            </div>
        </div>
    );
}

export default AllCustomers;
