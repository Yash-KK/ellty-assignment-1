interface LabelProps {
  text: string;
  className?: string;
}
const Label: React.FC<LabelProps> = ({ text, className }) => {
  return <button className={`${className}`}>{text}</button>;
};
export default Label;
