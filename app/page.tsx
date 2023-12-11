"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./(home)/components/SearchForm";
import SearchResults from "./(home)/components/SearchResults";
import PostDetail from "./(home)/components/PostDetail";

export default function Page() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSearch = async (query) => {
    const response = await axios.get(`http://hn.algolia.com/api/v1/search`, {
      params: { query },
    });
    setSearchResults(response.data.hits);
    setSelectedPost(null);
  };

  const handleSelectPost = async (postId) => {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/items/${postId}`
    );
    setSelectedPost(response.data);
  };

  useEffect(() => {
    if (selectedPost) {
      window.scrollTo(0, 0);
    }
  }, [selectedPost]);

  return (
    <div>
      <h1 className=" my-12 text-center font-semibold text-3xl">
        Hacker News Search
      </h1>
      <SearchForm onSearch={handleSearch} />
      {selectedPost ? (
        <PostDetail post={selectedPost} />
      ) : (
        <SearchResults
          results={searchResults}
          onSelectItem={handleSelectPost}
        />
      )}
    </div>
  );
}
