import { executiveRequest } from '../utils/request';

export async function getData(params) {
  return executiveRequest({
    api: `/metaData/get`,
    params,
    useVirtualRequest: true,
    virtualNeedAuthorize: false,
    virtualSuccessResponse: {
      data: {
        scoreAlias: '',
        shareResourceList: [
          {
            id: '1471775398785323008',
            imageUrl:
              'http://file.1010101.cc/2017532777.png?imageMogr2/thumbnail/340x340/format/jpg/blur/1x0/quality/75',
            platformId: '1467878158987563008',
            key: 'universalityMallWechatMicroAppShareImage_1471775398785323008',
            note: '',
          },
        ],
        sectionList: [
          {
            sectionId: '1471371216139980800',
            name: '通知公告',
            image: '',
            rectangleImage: '',
            description: '',
            platformId: '1467878158987563008',
            key: '1471371216139980800',
            config: { renderMode: '2' },
          },
          {
            sectionId: '1471371338865315840',
            name: '会议筹备',
            image: '',
            rectangleImage: '',
            description: '',
            platformId: '1467878158987563008',
            key: '1471371338865315840',
            config: { renderMode: '3' },
          },
          {
            sectionId: '1471371433375567872',
            name: '展会掠影',
            image: '',
            rectangleImage: '',
            description: '',
            platformId: '1467878158987563008',
            key: '1471371433375567872',
            config: { renderMode: '4' },
          },
          {
            sectionId: '1471371484575436800',
            name: '精彩视频',
            image: '',
            rectangleImage: '',
            description: '',
            platformId: '1467878158987563008',
            key: '1471371484575436800',
            config: { renderMode: '5' },
          },
          {
            sectionId: '1471371718022008832',
            name: '政策解读',
            image: '',
            rectangleImage: '',
            description: '',
            platformId: '1467878158987563008',
            key: '1471371718022008832',
            config: {},
          },
          {
            sectionId: '1471372391757254656',
            name: '展会资讯',
            image: '',
            rectangleImage: '',
            description: '',
            platformId: '1467878158987563008',
            key: '1471372391757254656',
            config: {},
          },
          {
            sectionId: '1471372608451776512',
            name: '天中艺苑',
            image: '',
            rectangleImage: '',
            description: '',
            platformId: '1467878158987563008',
            key: '1471372608451776512',
            config: {},
          },
          {
            sectionId: '1471373914683871232',
            name: '投洽会概况',
            image: '',
            rectangleImage: '',
            description: '',
            platformId: '1467878158987563008',
            key: '1471373914683871232',
            config: { renderMode: '1' },
          },
        ],
        rankList: [],
        scoreRankList: [],
        cityList: [],
        replenishmentReasonTypeList: [
          { flag: 1, name: '公司缺货' },
          { flag: 2, name: '订单漏配' },
          { flag: 3, name: '坏果残果损耗补货' },
        ],
        replenishmentTypeList: [
          { flag: 1, name: '缺货补发' },
          { flag: 3, name: '损坏补发' },
        ],
        refundReasonTypeList: [
          { flag: 1, name: '公司缺货' },
          { flag: 3, name: '订单漏配' },
          { flag: 4, name: '下错地址' },
        ],
      },
    },
  });
}

export async function exchangeShareData(params) {
  return executiveRequest({
    api: `/share/exchangeShare`,
    params,
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
