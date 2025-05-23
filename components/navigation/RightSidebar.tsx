import Image from "next/image";
import Link from "next/link";
import React from "react";

import TagCard from "../cards/TagCard";

interface hotQuestionProps {
  _id: string;
  title: string;
}

interface popularTagsProps {
  _id: string;
  name: string;
  questions: number;
}

const RightSidebar = () => {
  const hotQuestions: hotQuestionProps[] = [
    { _id: "1", title: "How to create a custom hook in React?" },
    { _id: "2", title: "How to use React query?" },
    { _id: "3", title: "How to use Redux?" },
    { _id: "4", title: "How to use Rect Router?" },
  ];

  const popularTags: popularTagsProps[] = [
    { _id: "1", name: "react", questions: 100 },
    { _id: "2", name: "nextjs", questions: 1000 },
    { _id: "3", name: "react-query", questions: 1000 },
    { _id: "4", name: "redux", questions: 1000 },
    { _id: "5", name: "react-router", questions: 1000 },
  ];

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/question/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <TagCard key={tag._id} {...tag} showCount compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
