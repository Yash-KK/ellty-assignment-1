import usePageSelect from "../hooks/usePageSelect";
import PageCheckbox from "./PageCheckbox";

const PageSelector = () => {
  const pages: string[] = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const { selectAll, selectedPages, handleSelectAll, handlePageSelect } =
    usePageSelect(pages);

  return (
    <div className="w-[370px] h-[326px] border-1 border-[#EEEEEE] shadow-xl rounded-md bg-white p-4">
      <div
        className="flex justify-between items-center border-b pb-2 border-[#CDCDCD] cursor-pointer group"
        onClick={handleSelectAll}
      >
        <label className="font-montserrat text-custom-black">All pages</label>

        <label className="relative">
          <input
            type="checkbox"
            checked={selectAll}
            readOnly
            onClick={handleSelectAll}
            className="peer hidden"
          />
          <div
            className="w-[23px] h-[23px] border border-gray-300 rounded-sm flex items-center justify-center
              group-hover:border-gray-600
              peer-checked:bg-blue-500 peer-checked:border-blue-500
              group-hover:after:content-['✓'] group-hover:after:text-gray-300 
              peer-checked:after:content-['✓'] peer-checked:after:text-white
              after:text-[20px] after:font-bold"
          />
        </label>
      </div>

      <div className="my-4 border-b pb-2 border-[#CDCDCD]">
        {pages.map((page) => (
          <PageCheckbox
            key={page}
            label={page}
            checked={selectedPages.includes(page)}
            onClick={() => handlePageSelect(page)}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="w-[340px] h-[40px] font-montserrat bg-[#FFCE22] text-custom-black rounded-md hover:bg-yellow-200">
          Done
        </button>
      </div>
    </div>
  );
};

export default PageSelector;
