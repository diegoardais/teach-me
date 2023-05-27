import Icon from './Icon';

export default function SearchBar(props: { onSubmit: () => Promise<void> }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <form className="px-4 w-1/2" onSubmit={handleSubmit}>
      <div className="relative">
        <Icon
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          name="magnify"
        />
        <input
          type="text"
          placeholder="O que você deseja estudar hoje?"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
        />
      </div>
    </form>
  );
}
