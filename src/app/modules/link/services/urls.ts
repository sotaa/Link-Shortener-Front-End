import { environment } from "../../../../environments/environment";

const serverAddress = environment.apiUrl;

export const LinkUrls = {
  create: serverAddress.concat("/link"),
  update: (id: string) => serverAddress.concat("/link/", id),
  info: (code: string) => serverAddress.concat("/info/", code),
  getUserLinks: serverAddress.concat("/link"),
  getUserLink: (id: string) => serverAddress.concat("/link/", id),
  deleteUserLink: (id: string) => serverAddress.concat("/link/", id)
};

export const LinkCategoriesUrl = {
  save: serverAddress.concat("/link/category"),
  get: serverAddress.concat("/link/category")
};
