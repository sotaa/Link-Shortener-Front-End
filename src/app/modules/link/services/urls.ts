
const serverAddress = 'http://localhost:3000'

export const LinkUrls = {
  link: serverAddress.concat('/link'),
  info:(code: string) => serverAddress.concat('/info/', code )
};
