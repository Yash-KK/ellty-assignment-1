import { useState } from "react";

const usePageSelect = (pages: string[]) => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedPages(newSelectAll ? pages : []);
  };

  const handlePageSelect = (page: string) => {
    setSelectedPages((prev) => {
      const newSelected = prev.includes(page)
        ? prev.filter((p) => p !== page)
        : [...prev, page];
      setSelectAll(newSelected.length === pages.length);
      return newSelected;
    });
  };

  return { selectAll, selectedPages, handleSelectAll, handlePageSelect };
};

export default usePageSelect;
