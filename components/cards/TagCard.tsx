import Link from "next/link";
import React from "react";

interface TagCardProps {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
}: TagCardProps) => {
  return <Link href={`/tags/${_id}`}>Tag Card</Link>;
};

export default TagCard;
