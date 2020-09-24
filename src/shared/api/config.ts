export let authToken = "";
export let tenantId = "";

export const setAuthToken = (token: string) => {
  authToken = token;
};

export const setTenantId = (id: string) => {
  tenantId = id;
};
