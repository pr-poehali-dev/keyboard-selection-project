
import Icon from "@/components/ui/icon";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="relative w-full md:w-1/3">
      <input
        type="text"
        placeholder="Поиск клавиатуры..."
        value={searchTerm}
        onChange={handleChange}
        className="w-full h-10 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <Icon name="Search" className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
    </div>
  );
};

export default SearchBar;
