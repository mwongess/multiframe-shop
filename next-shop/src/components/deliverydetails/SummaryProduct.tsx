import { FaTrashAlt } from "react-icons/fa"

const SummaryProduct = ({item}: any) => {
    return (
        <div className="flex gap-3  p-1 mb-1">
            <p className="border border-slate-300  h-fit px-2 rounded-lg">1</p>
            <div>
                <p className="font-bold">{item.name}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ea?</p>
                <p className="font-bold">Ksh {item.price}</p>
            </div>
            <p>
                <FaTrashAlt />
            </p>
        </div>
    )
}

export default SummaryProduct