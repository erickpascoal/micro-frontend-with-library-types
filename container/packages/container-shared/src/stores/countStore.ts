import { StoreApi, UseBoundStore } from "zustand";

//@ts-ignore
import { countStore as countStoreRemote } from "CortexCoreRemote/stores/countStore";

export type CountStore = {
    value: number;
    inc: () => void;
    dec: () => void;
  }


export const countStore: UseBoundStore<
  CountStore,
  StoreApi<CountStore>
> = countStoreRemote;

