//@ts-ignore
import { useAuthStore as useAuthStoreRemote } from "CortexCoreRemote/stores/useAuthStore";
import { StoreApi, UseBoundStore } from "zustand";

export type AuthStore = {
    userId: string;
    fullName: string;
    firstName: string;
    accessToken: string;
    idToken: string;
    isAuthenticated: boolean;
    signIn: () => void;
    signOut: () => void;
    acquireTokenSilent: () => void;
    loadPermissionsAndUnits: () => void;
    isAccessTokenExpired: () => boolean;
  };

export const useAuthStore: UseBoundStore<
  AuthStore,
  StoreApi<AuthStore>
> = useAuthStoreRemote;

