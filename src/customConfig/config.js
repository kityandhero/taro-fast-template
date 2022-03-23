export const appId = '';

const rootPathCollection = {
  main: {
    path: '/pages/home/main/index',
  },
};

const sectionPathCollection = {
  section: {
    path: '/section/pages/section/index',
  },
  article: {
    path: '/section/pages/article/index',
  },
};

export const pathCollection = {
  root: rootPathCollection,
  section: sectionPathCollection,
};

/**
 * 占位函数
 *
 * @export
 * @returns
 */
export async function empty() {
  return {};
}
