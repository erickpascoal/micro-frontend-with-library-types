export type AuthorizationStore = {
    userId: User["id"];
    permissions: User["funcionalidades"];
    hasPermissions: boolean;
    getPermissions: () => void;
  };

  export type User = ShortUser & {
    matricula?: string
    email: string
    funcao?: string
    celular?: string | null
    apelido?: string
    ativo: boolean
    unidadesNegocio?: BusinessUnitBase[]
    funcionalidades?: { [key: string]: ShortPermissionGroup[] }
  }

  export type ShortUser = {
    id: string
    nome?: string
  }
  
// Unidades de Negócio /api/unidadenegocio
export type BusinessUnitBase = {
    id: string
    nome?: string
  }
  
  export type BusinessUnit = BusinessUnitBase & {
    slug: string
  }
  
  // Permission /api/funcionalidades
export type ShortPermissionGroup = {
    id: string
    acao: string
  }
  

  

import { StoreApi, UseBoundStore } from "zustand";

//@ts-ignore
import { useAuthorizationStore as useAuthorizationStoreRemote } from "CortexCoreRemote/stores/useAuthorizationStore";

export const useAuthorizationStore: UseBoundStore<
  AuthorizationStore,
  StoreApi<AuthorizationStore>
> = useAuthorizationStoreRemote;

