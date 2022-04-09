//@ts-ignore
import { useAuthorization as CoreUseAuthorization } from "CortexCoreRemote/hooks/useAuthorization";

type Permission = {
  role: string;
  right: string;
};

export function useAuthorization() {
  const coreUseAuthorization = CoreUseAuthorization();

  function isAllowed(permission: Permission) {
    return coreUseAuthorization.isAllowed(permission);
  }

  return { isAllowed };
}
