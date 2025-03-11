import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchProps {
  request: (query: string) => void; // Функція, що приймає query як рядок
}

const SearchBar = ({ request }: SearchProps) => {
  const [query, setQuery] = useState<string>("");

  const handleQuery = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value.trim());
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!query) {
      toast("I'm waiting for your request", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        position: "top-left",
      });
      return;
    }
    request(query);
    setQuery("");
  };

  return (
    <header>
      <form className={s.inputForm} onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={handleQuery}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.buttonSearch} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
