import React from "react";

interface ListProps {
  contents: string[];
}

export default function List(props: ListProps) {
  const listItems = props.contents.map((number) => <li>{number}</li>);

  return <ul>{listItems}</ul>;
}
