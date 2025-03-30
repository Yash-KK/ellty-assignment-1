import usePageSelect from "../hooks/usePageSelect";
import PageCheckbox from "./PageCheckbox";
import Button from "./ui/Button";
import Label from "./ui/Label";

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
        <Label text="All Pages" className="font-montserrat text-custom-black" />
        <input
          type="checkbox"
          checked={selectAll}
          readOnly
          className="peer hidden"
        />
        <div className="custom-checkbox" />
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
        <Button
          text="Done"
          className="w-[340px] h-[40px] font-montserrat bg-[#FFCE22] text-custom-black rounded-md hover:bg-yellow-200"
        />
      </div>
    </div>
  );
};

export default PageSelector;
