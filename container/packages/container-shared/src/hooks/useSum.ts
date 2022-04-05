//@ts-ignore
import useSumRemote from "ContainerRemote/hooks/useSum";

type UseSum = {
  calc: (num1: number, num2: number) => number;
};

export function useSum(): UseSum {
  return useSumRemote();
}
