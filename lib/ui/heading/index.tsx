interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  name: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export default function Header({ name, type, ...rest }: Props) {
  const className =
    "font-amazingSlab text-2xl text-primary_text font-bold " + rest.className;

  switch (type) {
    case "h1":
      return <h1 className={className}>{name}</h1>;
    case "h2":
      return <h2 className={className}>{name}</h2>;
    case "h3":
      return <h3 className={className}>{name}</h3>;
    case "h4":
      return <h4 className={className}>{name}</h4>;
    case "h5":
      return <h5 className={className}>{name}</h5>;
    case "h6":
      return <h6 className={className}>{name}</h6>;
    default:
      return <h1 className={className}>{name}</h1>;
  }
}
