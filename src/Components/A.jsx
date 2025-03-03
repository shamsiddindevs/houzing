import React, {useContext} from "react";
import {GlobalContext} from "../App";
import {Delete, X} from "lucide-react";

const A = () => {
  let {data, setData} = useContext(GlobalContext);

  function onDelete(id) {
    let res = data.filter((v) => v.id !== id);
    setData(res);
  }
  return (
    <div className="inline_container flex flex-col gap-2.5 max-w-sm mx-0">
      {data?.length == 0
        ? "Nodata"
        : data.map((v) => (
            <div
              key={v.id}
              className="bg-blue-400 p-2.5 rounded-2xl text-white flex justify-between items-center">
              <span>
                {" "}
                {v.id}.{v.name}
              </span>{" "}
              <X
                onClick={() => onDelete(v.id)}
                className="text-red-500 cursor-pointer w-4"
              />
            </div>
          ))}
    </div>
  );
};

export default A;
