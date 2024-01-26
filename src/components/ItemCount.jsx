

const ItemCount = ({ tag, onClick }) => {
    return (
        <div className="w-full flex flex-row items-center justify-between gap-4">
            <p className="text-black text-base font-bold font-quicksand phone:text-sm">{tag}</p>
            <div className="flex flex-row items-center justify-between gap-4 border border-yellow px-2 py-1 rounded-lg phone:px-1 phone:py-0">
                <p className="text-yellow text-sm">3 pcs</p>
            </div>
        </div>
    );
};

export default ItemCount;