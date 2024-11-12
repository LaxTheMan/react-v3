type Color = 'red' | 'yellow' | 'green';

type ButtonProps = {
  text: string;
  color: Color;
};

export const Button = ({ text, color }: ButtonProps) => {
  function handleClick(text: string) {
    console.log(text);
  }

  const colorClass =
    {
      red: 'bg-red',
      yellow: 'bg-yellow',
      green: 'bg-green',
    }[color] || 'bg-gray-500';

  return (
    <button className={`px-8 py-1.5 mx-2 rounded-lg text-light ${colorClass}`} onClick={() => handleClick(text)}>
      {text}
    </button>
  );
};
