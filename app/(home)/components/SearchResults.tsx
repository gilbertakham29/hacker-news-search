"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function SearchResults({ results, onSelectItem }) {
  return (
    <div className="flex flex-col items-center justify-between">
      <ul className="mt-12">
        {results.map((result) => (
          <li className="mt-2" key={result.objectID}>
            <Button onClick={() => onSelectItem(result.objectID)}>
              <p className=" text-xl font-bold">🌟 {result.title}</p>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
