import { PencilAltIcon, XCircleIcon } from "@heroicons/react/solid";
import TicketClerkService from "../../services/TicketClerkService";

const ClerksRow = ({ clerk }) => {
    const handleDelete = () => {
        const confirmDelete = window.confirm(`Are you sure you want to delete clerk with ID ${clerk.id}?`);
        if (confirmDelete) {
            TicketClerkService.delete(clerk.id)
        }
    }

        return (
            <tr className="border-b text-sm text-gray-800">
                <td className="px-4 py-3 text-center">{clerk.id}</td>
                <td className="px-4 py-3 text-center">{clerk.email}</td>
                <td className="px-4 py-3 text-center">
                    {"***" + clerk.password.slice(10, 30) + "***"}
                </td>
                <td className="px-4 py-3 text-center">
                    <button>
                        <PencilAltIcon className="w-5 h-5"/>
                    </button>
                    <button onClick={handleDelete}><XCircleIcon className="mr-5 w-5 h-5"></XCircleIcon></button>
            </td>
            </tr>
        );
    }

export default ClerksRow