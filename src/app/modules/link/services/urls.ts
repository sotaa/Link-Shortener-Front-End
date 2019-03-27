
const serverAddress = 'http://localhost:3000'

export const LinkUrls = {
  create: serverAddress.concat('/link'),
  info:(code: string) => serverAddress.concat('/info/', code ),
  getUserLinks: serverAddress.concat('/link')
};

export const LinkCategoriesUrl = {
  save: serverAddress.concat('/link/category'),
  get: serverAddress.concat('/link/category')
}
