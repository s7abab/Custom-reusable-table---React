"use client";
import React, { useState } from "react";

type DataItem = {
  id: number;
  name: string;
  age: number;
};

type Props = {
  data: DataItem[];
};

const ITEMS_PER_PAGE = 5;

const Table: React.FC<Props> = ({ data }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset pagination to page 1 when filtering
  };

  return (
    <div className="overflow-x-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="right-0 top-2 absolute px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#091336] text-gray-50 bg-[#091336]"
        />
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-14">
        <thead className="bg-gradient-to-br from-[#091742] to-[#091336] shadow-2xl text-gray-400">
          <tr>
            {Object.keys(data[0]).map((header, index) => (
              <th key={index} className="py-3 px-4 lg:py-4 lg:px-6">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-50 bg-gradient-to-br from-[#16265b] to-[#050d2e] shadow-2xl ">
          {currentItems.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-[#1b3871]">
              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="py-3 px-4 lg:py-4 lg:px-6 text-center"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <ul className="flex justify-center mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} className="mx-1">
              <button
                className="px-3 py-1 rounded-md bg-[#091336] text-gray-50 hover:bg-gray-800 focus:outline-none"
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Table;
