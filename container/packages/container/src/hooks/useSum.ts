export default function useSum() {
  function calc(num1: number, num2: number) {
    return num1 + num2;
  }

  return { calc };
}
