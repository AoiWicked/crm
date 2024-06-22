import { useEffect, useState } from "react";
import cl from "./Pagination.module.scss";

function Pagination({ setPage }: any) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = 40;
    useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    const getPages = () => {
        const pages = [];

        if (currentPage <= 4) {
            for (let i = 1; i <= 4; i++) {
                pages.push(i);
            }
            pages.push("...");
            pages.push(totalPages);
        } else if (currentPage > totalPages - 4) {
            pages.push(1);
            pages.push("...");
            for (let i = totalPages - 3; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            pages.push("...");
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pages.push(i);
            }
            pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };

    const handlePageClick = (page: number | string) => {
        if (typeof page === "number") {
            setCurrentPage(page);
        }
    };

    return (
        <div className={cl.pagination}>
            <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            {getPages().map((page, index) => (
                <button
                    key={index}
                    onClick={() => handlePageClick(page)}
                    className={page === currentPage ? `${cl.active}` : ""}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
