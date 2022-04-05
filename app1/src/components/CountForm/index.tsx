import countStore from "../../stores/countStore";

export function CountForm() {
  const value = countStore((state) => state.value);
  return <div>{value}</div>;
}
