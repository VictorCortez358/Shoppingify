import Image from "next/image";
import AddIcon from "../../public/add.svg";


const ItemTag = ({ tag, handleShowShoppingList }) => {
    return (
        <div onClick={handleShowShoppingList} className="max-w-item flex flex-row items-center justify-between gap-4">
            <p className="text-black text-base font-medium font-quicksand phone:text-sm">{tag}</p>
            <Image src={AddIcon} width={26} height={26} />
        </div>
    );
};

export default ItemTag;