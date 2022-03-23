import { executiveRequest } from '../utils/request';

export async function getData(params) {
  return executiveRequest({
    api: `/metaData/get`,
    params,
    useVirtualRequest: true,
    virtualNeedAuthorize: false,
    virtualSuccessResponse: {
      data: {},
    },
  });
}

/**
 * 占位函数
 *
 * @export
 * @returns
 */
export async function empty() {
  return {};
}
