interface PageCheckboxProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

const PageCheckbox = ({ label, checked, onClick }: PageCheckboxProps) => (
  <div
    className="flex justify-between items-center py-2 cursor-pointer group"
    onClick={onClick}
  >
    <span className="font-montserrat text-custom-black">{label}</span>

    <label className="relative">
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="peer hidden"
      />
      <div onClick={onClick} className="custom-checkbox" />
    </label>
  </div>
);

export default PageCheckbox;
