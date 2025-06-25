import React from 'react'

const BookingRow = ({ movie }) => {
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{movie.name}</td>
            <td className="px-4 py-3 text-center">{movie.session}</td>
            <td className="px-4 py-3 text-center">{movie.seat}</td>
            <td className="px-4 py-3 text-center">{movie.customer}</td>
        </tr>
    )
}

export default BookingRow