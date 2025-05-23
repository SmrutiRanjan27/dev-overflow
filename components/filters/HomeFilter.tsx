"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";
import { cn } from "@/lib/utils";

const filters = [
  { name: "React", value: "react" },
  { name: "Javascript", value: "javascript" },
  // { name: "Newest", value: "newest" },
  // { name: "Popular", value: "popular" },
  // { name: "Unanswered", value: "unanswered" },
  // { name: "Recommended", value: "recommended" },
];

const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");

  const handleOnClick = (value: string) => {
    setActive(value);
    if (value) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value,
      });
      router.push(newUrl, { scroll: false });
    } else {
      const newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            "body-medium rounded-lg px-6 py-3 capitalize shadow-none",
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          onClick={() =>
            handleOnClick(active === filter.value ? "" : filter.value)
          }
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
