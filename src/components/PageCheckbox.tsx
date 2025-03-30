interface PageCheckboxProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

const PageCheckbox = ({ label, checked, onClick }: PageCheckboxProps) => (
  <div
    className="flex justify-between items-center py-2 cursor-pointer"
    onClick={onClick}
  >
    <span className="font-montserrat text-custom-black">{label}</span>
    <input
      type="checkbox"
      checked={checked}
      readOnly
      className="w-[23px] h-[23px] rounded-md border-gray-400 hover:border-gray-600"
    />
  </div>
);

export default PageCheckbox;
