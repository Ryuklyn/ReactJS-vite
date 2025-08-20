import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import ProgressBar from "../category/ProgressBar";

const CategoryCard = ({ category, onDelete }) => {
  const { name, budget, spent, color } = category;
  const percentage = ((spent / budget) * 100).toFixed(1);

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex gap-2">
          <Edit2 className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Trash2
            className="w-5 h-5 text-red-500 cursor-pointer"
            onClick={() => onDelete(name)}
          />
        </div>
      </div>
      <p className="text-gray-600 mb-1">
        ${spent} of ${budget}
      </p>
      <ProgressBar percentage={percentage} color={color} />
      <p className="text-sm text-gray-500 mt-1">{percentage}%</p>
    </div>
  );
};

export default CategoryCard;
