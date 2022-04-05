export function useOi() {
  function helloWithName(name: string) {
    console.log("olá", name);
  }

  return { helloWithName };
}
