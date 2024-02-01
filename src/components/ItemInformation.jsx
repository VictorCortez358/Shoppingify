import React from "react";
import Image from "next/image";
import BackIcon from "../../public/keyboard_backspace.svg";
import AguacateImg from "../../public/aguacate.jpeg";
import { useRootContext } from "./RootContext";

const ItemInformation = () => {
    const { handleShowShoppingList, showItemInformation } = useRootContext();
    return (
        <div
            className={`w-shopping_list min-h-screen flex flex-col py-4 px-6 gap-4 fixed right-0 top-0 bottom-0 phone:${showItemInformation ? "hidden" : "w-content"
                } phone:px-3`}
        >
            <div
                onClick={handleShowShoppingList}
                className="flex flex-row justify-start items-center gap-2"
            >
                <Image src={BackIcon} width={20} height={20} />
                <p className="text-sm font-bold text-yellow font-quicksand phone:text-xs">
                    Back
                </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
                <Image
                    src={AguacateImg}
                    width={250}
                    height={250}
                    className="w-full rounded-md"
                />
                <ul className="flex flex-col justify-start items-start gap-4 font-quicksand">
                    <li className="flex flex-col items-start justify-center">
                        <p className="text-xs text-gray-tex-2">Name</p>
                        <p className="text-lg font-medium phone:text-base">Aguacate</p>
                    </li>
                    <li className="flex flex-col items-start justify-center">
                        <p className="text-xs text-gray-tex-2">Category</p>
                        <p className="text-sm font-medium phone:text-sm">
                            Fruit and vegetables
                        </p>
                    </li>
                    <li className="flex flex-col items-start justify-center">
                        <p className="text-xs text-gray-tex-2">Note</p>
                        <p className="text-sm font-medium phone:text-xs">
                            Nutrient-dense foods are those that provide substantial amounts of
                            vitamins, minerals and other nutrients with relatively few
                            calories. One-third of a medium avocado (50 g) has 80 calories and
                            contributes nearly 20 vitamins and minerals, making it a great
                            nutrient-dense food choice.{" "}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-4 mt-auto mb-2 font-quicksand">
                <button className="text-black bg-white rounded text-sm py-2 px-4 font-medium font-quicksand phone:py-1 phone:text-xs">
                    Delete
                </button>
                <button className="text-white bg-yellow rounded text-sm py-2 px-5 font-medium font-quicksand phone:py-1 phone:text-xs">
                    Add to list
                </button>
            </div>
        </div>
    );
};

export default ItemInformation;
