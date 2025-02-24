import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Space({ ...rest }: Props) {
  return <div {...rest}></div>;
}
