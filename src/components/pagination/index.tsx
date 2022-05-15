import type { NextPage } from 'next';
import ReactPaginate from 'react-paginate';

const Pagination: NextPage<{ initialPage: number; pageCount: number; changePage: (selectedItem: { selected: number }) => void }> = ({ initialPage, pageCount, changePage }) => (
  <ReactPaginate
    previousLabel="Previous"
    nextLabel="Next"
    initialPage={initialPage}
    pageCount={pageCount}
    onPageChange={changePage}
    className="flex justify-center items-center list-none h-10 mt-10 space-x-2 select-none"
    pageClassName="p-2.5 m-0.5 rounded border border-white text-white hover:bg-white hover:text-black"
    previousClassName="text-white"
    previousLinkClassName="p-3 m-0.5 rounded border border-white hover:bg-white hover:text-black"
    nextClassName="text-white"
    nextLinkClassName="p-3 m-0.5 rounded border border-white hover:bg-white hover:text-black"
    disabledClassName="text-white"
    disabledLinkClassName="cursor-not-allowed bg-red-700 text-white"
    activeClassName="bg-white"
    activeLinkClassName="text-black"
    breakClassName="p-2.5 m-0.5 rounded border border-white text-white hover:bg-white hover:text-black"
  />
);

export default Pagination;
