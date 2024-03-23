import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
};

export default SearchBox;