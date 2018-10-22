
const serverAddress = ''

export const LinkUrls = {
  link: serverAddress.concat('/link'),
  info:(code: string) => serverAddress.concat('/info/', code )
};
