import './search-box.styles.css';

const SearchBox = ({className, placeholder, onSearchHandler}) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={onSearchHandler}
  />
);

export default SearchBox;
