import { AuthClient } from "@dfinity/auth-client";
import { createActor, canisterId } from "declarations/Art_tokenization_backend";

let authClient = null;
let actor = null;
let identity = null;

export async function initAuth() {
  if (!authClient) authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) {
    identity = authClient.getIdentity();
    actor = createActor(canisterId, { agentOptions: { identity } });
  }
  return { authClient, identity, actor };
}

export async function loginWithII() {
  if (!authClient) authClient = await AuthClient.create();

  return new Promise((resolve, reject) => {
    authClient.login({
      identityProvider: "https://identity.ic0.app", // hosted II
      onSuccess: async () => {
        identity = authClient.getIdentity();
        actor = createActor(canisterId, { agentOptions: { identity } });
        resolve({ identity, actor });
      },
      onError: (err) => reject(err),
    });
  });
}

export async function logout() {
  if (!authClient) return;
  await authClient.logout();
  identity = null;
  actor = null;
}

export function getActor() {
  return actor;
}

export function getIdentity() {
  return identity;
}
