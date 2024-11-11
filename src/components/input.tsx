type InputProps = {
  type: string;
  checked: boolean;
  style?: string;
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
};

export const Input: React.FC<InputProps> = ({ type, checked, style = '', onChange }: InputProps) => {
  return (
    <div className="flex justify-between">
      <input type={type} className={style} checked={checked} onChange={onChange} />
      <label className="mx-2">{checked && 'hello world'}</label>
    </div>
  );
};
