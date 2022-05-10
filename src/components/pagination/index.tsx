import type { NextPage } from 'next';
import ReactPaginate from 'react-paginate';

const Pagination: NextPage<{ pageCount: number; changePage: (selectedItem: { selected: number }) => void }> = ({ pageCount, changePage }) => (
  <ReactPaginate
    previousLabel="Previous"
    nextLabel="Next"
    pageCount={pageCount}
    onPageChange={changePage}
    className="flex justify-center items-center list-none h-10 w-4/5 mt-10 space-x-2"
    pageClassName="p-2.5 m-0.5 rounded border border-white text-white hover:bg-white hover:text-black"
    previousClassName="text-white"
    previousLinkClassName="p-2.5 m-0.5 rounded border border-white hover:bg-white hover:text-black"
    nextClassName="text-white"
    nextLinkClassName="p-2.5 m-0.5 rounded border border-white hover:bg-white hover:text-black"
    disabledClassName="text-white"
    disabledLinkClassName="bg-red-600 text-white"
    activeClassName="bg-white"
    activeLinkClassName="text-black"
    breakClassName="p-2.5 m-0.5 rounded border border-white text-white hover:bg-white hover:text-black"
  />
);

export default Pagination;
