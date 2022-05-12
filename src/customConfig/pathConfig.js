const rootPathCollection = {
  entry: {
    path: '/pages/entry/main/index',
  },
  home: {
    path: '/pages/home/main/index',
  },
};

const sectionPathCollection = {
  section: {
    path: '/section/pages/section/main/index',
  },
  article: {
    path: '/section/pages/article/main/index',
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
