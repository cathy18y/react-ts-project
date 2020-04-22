export const menus = [{
  name: '概览',
  path: '/overview',
  pathname: 'overview'
}, {
  name: '管理',
  path: '/management',
  pathname: 'management',
}];

export const isActive = (fullPath: string, pathname: string) => {
  const path = fullPath.split('/');
  return path.includes(pathname);
};
