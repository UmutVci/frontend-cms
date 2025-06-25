import React from 'react'

export default function Pagination({ currentPage, pageCount, onPageChange }) {
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

    return (
        <nav className="flex justify-center items-center space-x-2 mt-10">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
                ‹ Prev
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`
            px-3 py-1 rounded
            ${page === currentPage
                        ? 'bg-[#8C8C8D] text-white'
                        : 'bg-gray-200 hover:bg-gray-300'}
          `}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pageCount}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
                Next ›
            </button>
        </nav>
    )
}
