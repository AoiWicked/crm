import cl from "./Table.module.scss";
import { fetchData, IData } from "../../../data/data";
import { useEffect, useState } from "react";
import Loader from "../../../UI/Loader/Loader";

interface ITable {
    value: string;
    page: number;
}

function Table({ value, page }: ITable) {
    const [data, setData] = useState<null | IData[]>(null);
    const [filteredData, setFilteredData] = useState<null | IData[]>(null);

    useEffect(() => {
        setTimeout(() => {
            setData(fetchData);
        }, 1000);
    }, [page]);

    useEffect(() => {
        filter(value);
    }, [value, data]);

    const filter = (value: string) => {
        const filterValue = data;
        if (filterValue) {
            const filtered = filterValue?.filter((elem) =>
                elem?.name.toLowerCase().includes(value.toLowerCase().trim())
            );
            setFilteredData(filtered);
        }
    };

    return (
        <div>
            {!data ? (
                <div className={cl.loader}>
                    <Loader />
                </div>
            ) : (
                <table className={cl.table}>
                    <thead>
                        <tr className={cl.table__head}>
                            <th className={cl.table__elem}>Customer Name</th>
                            <th className={cl.table__elem}>Company</th>
                            <th className={cl.table__elem}>Phone Number</th>
                            <th className={cl.table__elem}>Email</th>
                            <th className={cl.table__elem}>Country</th>
                            <th className={cl.table__elem}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData?.map((el: IData) => (
                            <tr className={cl.table__main} key={el.email}>
                                <td className={cl.table__elem}>{el.name}</td>
                                <td className={cl.table__elem}>{el.company}</td>
                                <td className={cl.table__elem}>{el.phone}</td>
                                <td className={cl.table__elem}>{el.email}</td>
                                <td className={cl.table__elem}>{el.country}</td>
                                <td className={cl.table__elem}>
                                    <span
                                        className={
                                            el.status === "Active"
                                                ? cl.table__active
                                                : cl.table__inactive
                                        }
                                    >
                                        {el.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Table;
