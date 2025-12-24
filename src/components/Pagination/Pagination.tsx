import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface ReactPaginateEvent {
  selected: number; // 0-based
}

interface PaginationProps {
  pageCount: number;
  page: number; // 1-based
  onPageChange: (page: number) => void; // 1-based
}

export default function Pagination({
  pageCount,
  page,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={page - 1}
      onPageChange={(event: ReactPaginateEvent) =>
        onPageChange(event.selected + 1)
      }
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      containerClassName={css.pagination}
      pageClassName={css.page}
      pageLinkClassName={css.pageLink}
      previousClassName={css.page}
      previousLinkClassName={css.pageLink}
      nextClassName={css.page}
      nextLinkClassName={css.pageLink}
      breakClassName={css.page}
      breakLinkClassName={css.pageLink}
      activeClassName={css.active}
      disabledClassName={css.disabled}
    />
  );
}
