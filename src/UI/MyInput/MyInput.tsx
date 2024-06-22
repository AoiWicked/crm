import cl from "./MyInput.module.scss";
import search from "../../assets/search.svg";

interface IProps {
    value: string;
    setValue: any;
}

function Myinput({ value, setValue }: IProps) {
    return (
        <div className={cl.input}>
            <img width={24} height={24} src={search} alt="search" />
            <input
                type="text"
                placeholder="Search..."
                value={value}
                onChange={setValue}
            />
        </div>
    );
}

export default Myinput;
