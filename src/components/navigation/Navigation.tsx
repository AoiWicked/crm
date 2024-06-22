import cl from "./Navigation.module.scss";
import key from "../../assets/key.svg";
import product from "../../assets/product.svg";
import customers from "../../assets/customers.svg";
import income from "../../assets/income.svg";
import promote from "../../assets/promote.svg";
import help from "../../assets/help.svg";
import right from "../../assets/right.svg";
import { useState } from "react";

const Navigation = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const style = (index: number) =>
        activeIndex === index ? `${cl.table__inside}` : `${cl.table__active}`;

    const mouseHandler = (index: number) => {
        setActiveIndex(index);
    };

    const items = [
        { img: key, label: "Dashboard" },
        { img: product, label: "Product" },
        { img: customers, label: "Customers" },
        { img: income, label: "Income" },
        { img: promote, label: "Promote" },
        { img: help, label: "Help" },
    ];

    return (
        <ol className={cl.table}>
            {items.map((item, index) => (
                <li
                    key={index}
                    onClick={() => mouseHandler(index)}
                    className={cl.table__elem}
                >
                    <div className={style(index)}>
                        <div className={cl.table__info}>
                            <img
                                className={cl.table__img}
                                width={24}
                                height={24}
                                src={item.img}
                                alt={item.label.toLowerCase()}
                            />
                            <span>{item.label}</span>
                        </div>
                        {index !== 0 && (
                            <img
                                width={16}
                                height={16}
                                src={right}
                                alt="right"
                            />
                        )}
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default Navigation;
