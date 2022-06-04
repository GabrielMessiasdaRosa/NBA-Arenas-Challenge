import React from "react";
import useQueryParams from "../hooks/use-query-params";
import Clickable from "./clickable";
export type PaginationProps = {
  data: any;
};

const Pagination = ({ data }: PaginationProps) => {
  const { params, updateParams } = useQueryParams();
  return (
    <nav
      className="px-4 pb-8 pt-4 flex items-center justify-between  sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-50">
          Page <span className="font-medium">{data?.current_page}</span> of{" "}
          <span className="font-medium">{data?.total_pages}</span>{" "}
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <Clickable
          disabled={data?.current_page === 1}
          onClick={() => {
            updateParams({ page: params.page - 1 });
          }}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-50  hover:bg-slate-500"
        >
          Previous
        </Clickable>
        <Clickable
          disabled={data?.current_page === data?.total_pages}
          onClick={() => {
            updateParams({ page: parseInt(params.page) + 1 });
          }}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-50  hover:bg-slate-500"
        >
          Next
        </Clickable>
      </div>
    </nav>
  );
};

export default Pagination;
