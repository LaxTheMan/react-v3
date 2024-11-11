type ButtonProps = {
  text: string;
  color: string;
}

export default function Button({ text, color }: ButtonProps) {

  function handleClick(text: string) {
    console.log(text)
  }

  let colorClass =
    {
      red: 'bg-red',
      yellow: 'bg-yellow',
      green: 'bg-green',
    }[color] || 'bg-gray-500';

  return (
    <button className={`px-8 py-1.5 mx-2 rounded-lg text-button-text-color ${colorClass}`} onClick={() => handleClick(text)}>
      {text}
    </button>
  );
}
