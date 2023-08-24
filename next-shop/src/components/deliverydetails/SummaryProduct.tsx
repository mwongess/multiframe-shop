import { FaTrashAlt } from "react-icons/fa"

const SummaryProduct = () => {
    return (
        <div className="flex gap-3  p-1 mb-1">
            <p className="border border-slate-300  h-fit px-2 rounded-lg">1</p>
            <div>
                <p className="font-bold">Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ea?</p>
                <p className="font-bold">Ksh 790</p>
            </div>
            <p>
                <FaTrashAlt />
            </p>
        </div>
    )
}

export default SummaryProduct