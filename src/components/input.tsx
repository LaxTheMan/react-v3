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
      {checked && <label className="mx-2">'hello world'</label>}
    </div>
  );
};
