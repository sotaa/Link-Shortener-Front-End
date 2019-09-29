import { environment } from "../../../../environments/environment";

const serverAddress = environment.apiUrl;

export const LinkUrls = {
  create: serverAddress.concat("/link"),
  info: (code: string) => serverAddress.concat("/info/", code),
  getUserLinks: serverAddress.concat("/link"),
  deleteUserLink: (id: string) => serverAddress.concat("/link/", id)
};

export const LinkCategoriesUrl = {
  save: serverAddress.concat("/link/category"),
  get: serverAddress.concat("/link/category")
};
