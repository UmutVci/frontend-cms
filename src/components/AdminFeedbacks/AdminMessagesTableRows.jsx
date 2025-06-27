import React from "react";

const MessagesRow = ({ message }) => {
    return (
        <tr className="border-b text-sm text-gray-800">
            <td className="px-4 py-3 text-center">{message.clientName}</td>
            <td className="px-4 py-3 text-center">{message.movie}</td>
            <td className="px-4 py-3 text-center">{message.hall}</td>
            <td className="px-4 py-3 text-center">{message.description}</td>
        </tr>
    )
}

export default MessagesRow