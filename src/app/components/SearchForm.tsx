import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export const SearchForm = ({
  searchTerm, 
  onSearchTermChange,
  onSearch
}: {
  searchTerm: string,
  onSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void,
}) => (
  <form onSubmit={onSearch} className='flex items-center space-x-2'>
    <button type="submit">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
    </button>

    <input 
      type="text" 
      id='search' 
      name='search'
      value={searchTerm}
      onChange={onSearchTermChange}
      placeholder='Search'
      className='bg-transparent text-white placeholder-white outline-none'
    />
  </form>
)