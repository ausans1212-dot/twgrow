export interface DonorRecord {
  id: string;
  receiptDate: string; // e.g. '2026/03/19'
  gregorianDate: string; // e.g. '2026/03/19'
  month: string; // e.g. '2026/03'
  monthKey: string; // e.g. '2026-03'
  name: string; // Already masked name (e.g. 蘇*琪 or store name)
  rawName: string;
  amount: number;
  project: string;
  isOrganization?: boolean;
}

export const CAMPAIGN_INFO = {
  title: '「孩有陪伴」假日陪伴照顧暨家庭支持服務',
  organizer: '社團法人中華陪童長大兒少關懷協會',
  reportDate: '2026/10/15',
  campaignPeriod: '2026/03/18 至 2027/02/01',
  permitNumber: '衛部救字第1151361110號',
  totalIncome: 452106,
  purpose: '捐贈用途皆為勸募財務支出使用。',
  monthlySubtotals: [
    { month: '2026/03', key: '2026-03', count: 8 },
    { month: '2026/04', key: '2026-04', count: 8 },
    { month: '2026/05', key: '2026-05', count: 20 },
    { month: '2026/06', key: '2026-06', count: 16 },
    { month: '2026/07', key: '2026-07', count: 20 },
    { month: '2026/08', key: '2026-08', count: 22 },
    { month: '2026/09', key: '2026-09', count: 29 },
  ],
};

export const DEFAULT_PROJECT_DETAIL = '「孩有陪伴」假日陪伴照顧暨家庭支持服務';

export const DONOR_RECORDS: DonorRecord[] = [
  // 2026/03
  { id: 'M03-01', receiptDate: '2026/03/19', gregorianDate: '2026/03/19', month: '2026/03', monthKey: '2026-03', rawName: '蘇珮琪', name: '蘇*琪', amount: 1800, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M03-02', receiptDate: '2026/03/19', gregorianDate: '2026/03/19', month: '2026/03', monthKey: '2026-03', rawName: '陳曉璇', name: '陳*璇', amount: 1800, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M03-03', receiptDate: '2026/03/19', gregorianDate: '2026/03/19', month: '2026/03', monthKey: '2026-03', rawName: '李潔玲', name: '李*玲', amount: 3600, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M03-04', receiptDate: '2026/03/22', gregorianDate: '2026/03/22', month: '2026/03', monthKey: '2026-03', rawName: '張詠鈞', name: '張*鈞', amount: 50000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M03-05', receiptDate: '2026/03/25', gregorianDate: '2026/03/25', month: '2026/03', monthKey: '2026-03', rawName: '黃俊榮', name: '黃*榮', amount: 6000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M03-06', receiptDate: '2026/03/30', gregorianDate: '2026/03/30', month: '2026/03', monthKey: '2026-03', rawName: '陳瑞豐', name: '陳*豐', amount: 10000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M03-07', receiptDate: '2026/03/30', gregorianDate: '2026/03/30', month: '2026/03', monthKey: '2026-03', rawName: '孫士民', name: '孫*民', amount: 5000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M03-08', receiptDate: '2026/03/30', gregorianDate: '2026/03/30', month: '2026/03', monthKey: '2026-03', rawName: '楊茂重', name: '楊*重', amount: 5000, project: DEFAULT_PROJECT_DETAIL },

  // 2026/04
  { id: 'M04-01', receiptDate: '2026/04/01', gregorianDate: '2026/04/01', month: '2026/04', monthKey: '2026-04', rawName: '郭士瑄', name: '郭*瑄', amount: 10000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M04-02', receiptDate: '2026/04/01', gregorianDate: '2026/04/01', month: '2026/04', monthKey: '2026-04', rawName: '鄭國雄', name: '鄭*雄', amount: 10000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M04-03', receiptDate: '2026/04/03', gregorianDate: '2026/04/03', month: '2026/04', monthKey: '2026-04', rawName: '蔡雨潔', name: '蔡*潔', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M04-04', receiptDate: '2026/04/03', gregorianDate: '2026/04/03', month: '2026/04', monthKey: '2026-04', rawName: '善心人士', name: '善心人士', amount: 3400, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M04-05', receiptDate: '2026/04/17', gregorianDate: '2026/04/17', month: '2026/04', monthKey: '2026-04', rawName: '善心人士', name: '善心人士', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M04-06', receiptDate: '2026/04/17', gregorianDate: '2026/04/17', month: '2026/04', monthKey: '2026-04', rawName: '謝宗祐', name: '謝*祐', amount: 800, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M04-07', receiptDate: '2026/04/22', gregorianDate: '2026/04/22', month: '2026/04', monthKey: '2026-04', rawName: '葉千寧', name: '葉*寧', amount: 800, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M04-08', receiptDate: '2026/04/29', gregorianDate: '2026/04/29', month: '2026/04', monthKey: '2026-04', rawName: '一抽解癢商行', name: '一抽解癢商行', amount: 5800, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },

  // 2026/05
  { id: 'M05-01', receiptDate: '2026/05/09', gregorianDate: '2026/05/09', month: '2026/05', monthKey: '2026-05', rawName: '鄭予文', name: '鄭*文', amount: 3000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M05-02', receiptDate: '2026/05/09', gregorianDate: '2026/05/09', month: '2026/05', monthKey: '2026-05', rawName: '七賢脊椎外科醫院', name: '七賢脊椎外科醫院', amount: 21000, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M05-03', receiptDate: '2026/05/13', gregorianDate: '2026/05/13', month: '2026/05', monthKey: '2026-05', rawName: '粘乃華', name: '粘*華', amount: 100, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M05-04', receiptDate: '2026/05/15', gregorianDate: '2026/05/15', month: '2026/05', monthKey: '2026-05', rawName: '美樂司', name: '美樂司', amount: 967, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M05-05', receiptDate: '2026/05/15', gregorianDate: '2026/05/15', month: '2026/05', monthKey: '2026-05', rawName: '可利丹食品行', name: '可利丹食品行', amount: 1000, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M05-06', receiptDate: '2026/05/15', gregorianDate: '2026/05/15', month: '2026/05', monthKey: '2026-05', rawName: '悅飴館', name: '悅飴館', amount: 1200, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M05-07', receiptDate: '2026/05/16', gregorianDate: '2026/05/16', month: '2026/05', monthKey: '2026-05', rawName: '中華民國太陽光電發電系統商業同業公會', name: '中華民國太陽光電發電系統商業同業公會', amount: 20000, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M05-08', receiptDate: '2026/05/20', gregorianDate: '2026/05/20', month: '2026/05', monthKey: '2026-05', rawName: '陳佳儀', name: '陳*儀', amount: 150000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M05-09', receiptDate: '2026/05/23', gregorianDate: '2026/05/23', month: '2026/05', monthKey: '2026-05', rawName: '郭瓔慧', name: '郭*慧', amount: 1500, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M05-10', receiptDate: '2026/05/23', gregorianDate: '2026/05/23', month: '2026/05', monthKey: '2026-05', rawName: '張詠鈞', name: '張*鈞', amount: 50000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M05-11', receiptDate: '2026/05/26', gregorianDate: '2026/05/26', month: '2026/05', monthKey: '2026-05', rawName: '戴彩勤', name: '戴*勤', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M05-12', receiptDate: '2026/05/26', gregorianDate: '2026/05/26', month: '2026/05', monthKey: '2026-05', rawName: '陳德福', name: '陳*福', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M05-13', receiptDate: '2026/05/26', gregorianDate: '2026/05/26', month: '2026/05', monthKey: '2026-05', rawName: '加鑫五金百貨商行', name: '加鑫五金百貨商行', amount: 1439, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M05-14', receiptDate: '2026/05/26', gregorianDate: '2026/05/26', month: '2026/05', monthKey: '2026-05', rawName: '克里姆晨食', name: '克里姆晨食', amount: 300, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M05-15', receiptDate: '2026/05/28', gregorianDate: '2026/05/28', month: '2026/05', monthKey: '2026-05', rawName: '張語妡', name: '張*妡', amount: 200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M05-16', receiptDate: '2026/05/28', gregorianDate: '2026/05/28', month: '2026/05', monthKey: '2026-05', rawName: '蔡宗軒', name: '蔡*軒', amount: 200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M05-17', receiptDate: '2026/05/28', gregorianDate: '2026/05/28', month: '2026/05', monthKey: '2026-05', rawName: '早安美芝城大明概念店', name: '早安美芝城大明概念店', amount: 300, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M05-18', receiptDate: '2026/05/28', gregorianDate: '2026/05/28', month: '2026/05', monthKey: '2026-05', rawName: '蔡枚芬', name: '蔡*芬', amount: 400, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M05-19', receiptDate: '2026/05/29', gregorianDate: '2026/05/29', month: '2026/05', monthKey: '2026-05', rawName: '大億小吃店', name: '大億小吃店', amount: 1000, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M05-20', receiptDate: '2026/05/29', gregorianDate: '2026/05/29', month: '2026/05', monthKey: '2026-05', rawName: '善心人士', name: '善心人士', amount: 1710, project: DEFAULT_PROJECT_DETAIL },

  // 2026/06
  { id: 'M06-01', receiptDate: '2026/06/15', gregorianDate: '2026/06/15', month: '2026/06', monthKey: '2026-06', rawName: '曾紟緯', name: '曾*緯', amount: 2000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M06-02', receiptDate: '2026/06/18', gregorianDate: '2026/06/18', month: '2026/06', monthKey: '2026-06', rawName: '曾紟緯', name: '曾*緯', amount: 2000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M06-03', receiptDate: '2026/06/22', gregorianDate: '2026/06/22', month: '2026/06', monthKey: '2026-06', rawName: '粘乃華', name: '粘*華', amount: 100, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M06-04', receiptDate: '2026/06/23', gregorianDate: '2026/06/23', month: '2026/06', monthKey: '2026-06', rawName: '戴彩勤', name: '戴*勤', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M06-05', receiptDate: '2026/06/23', gregorianDate: '2026/06/23', month: '2026/06', monthKey: '2026-06', rawName: '陳德福', name: '陳*福', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M06-06', receiptDate: '2026/06/23', gregorianDate: '2026/06/23', month: '2026/06', monthKey: '2026-06', rawName: '克里姆晨食', name: '克里姆晨食', amount: 300, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M06-07', receiptDate: '2026/06/24', gregorianDate: '2026/06/24', month: '2026/06', monthKey: '2026-06', rawName: '加鑫五金百貨商行', name: '加鑫五金百貨商行', amount: 748, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M06-08', receiptDate: '2026/06/24', gregorianDate: '2026/06/24', month: '2026/06', monthKey: '2026-06', rawName: '可利丹食品行', name: '可利丹食品行', amount: 1000, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M06-09', receiptDate: '2026/06/24', gregorianDate: '2026/06/24', month: '2026/06', monthKey: '2026-06', rawName: '大億小吃店', name: '大億小吃店', amount: 1000, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M06-10', receiptDate: '2026/06/25', gregorianDate: '2026/06/25', month: '2026/06', monthKey: '2026-06', rawName: '早安美芝城大明概念店', name: '早安美芝城大明概念店', amount: 300, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M06-11', receiptDate: '2026/06/25', gregorianDate: '2026/06/25', month: '2026/06', monthKey: '2026-06', rawName: '張語妡', name: '張*妡', amount: 200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M06-12', receiptDate: '2026/06/25', gregorianDate: '2026/06/25', month: '2026/06', monthKey: '2026-06', rawName: '蔡宗軒', name: '蔡*軒', amount: 200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M06-13', receiptDate: '2026/06/25', gregorianDate: '2026/06/25', month: '2026/06', monthKey: '2026-06', rawName: '蔡枚芬', name: '蔡*芬', amount: 400, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M06-14', receiptDate: '2026/06/29', gregorianDate: '2026/06/29', month: '2026/06', monthKey: '2026-06', rawName: '美樂司', name: '美樂司', amount: 1315, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M06-15', receiptDate: '2026/06/29', gregorianDate: '2026/06/29', month: '2026/06', monthKey: '2026-06', rawName: '悅飴館', name: '悅飴館', amount: 1500, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M06-16', receiptDate: '2026/06/29', gregorianDate: '2026/06/29', month: '2026/06', monthKey: '2026-06', rawName: '善心人士', name: '善心人士', amount: 951, project: DEFAULT_PROJECT_DETAIL },

  // 2026/07
  { id: 'M07-01', receiptDate: '2026/07/01', gregorianDate: '2026/07/01', month: '2026/07', monthKey: '2026-07', rawName: '周育如', name: '周*如', amount: 300, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-02', receiptDate: '2026/07/01', gregorianDate: '2026/07/01', month: '2026/07', monthKey: '2026-07', rawName: '張雅玲', name: '張*玲', amount: 300, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-03', receiptDate: '2026/07/02', gregorianDate: '2026/07/02', month: '2026/07', monthKey: '2026-07', rawName: '曾維梃', name: '曾*梃', amount: 800, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-04', receiptDate: '2026/07/08', gregorianDate: '2026/07/08', month: '2026/07', monthKey: '2026-07', rawName: '戴彩勤', name: '戴*勤', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-05', receiptDate: '2026/07/08', gregorianDate: '2026/07/08', month: '2026/07', monthKey: '2026-07', rawName: '陳德福', name: '陳*福', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-06', receiptDate: '2026/07/14', gregorianDate: '2026/07/14', month: '2026/07', monthKey: '2026-07', rawName: '許雅雯', name: '許*雯', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-07', receiptDate: '2026/07/15', gregorianDate: '2026/07/15', month: '2026/07', monthKey: '2026-07', rawName: '陪童之友', name: '陪童之友', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-08', receiptDate: '2026/07/15', gregorianDate: '2026/07/15', month: '2026/07', monthKey: '2026-07', rawName: '粘乃華', name: '粘*華', amount: 100, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-09', receiptDate: '2026/07/19', gregorianDate: '2026/07/19', month: '2026/07', monthKey: '2026-07', rawName: '許靜兒', name: '許*兒', amount: 1200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-10', receiptDate: '2026/07/21', gregorianDate: '2026/07/21', month: '2026/07', monthKey: '2026-07', rawName: '加鑫五金百貨商行', name: '加鑫五金百貨商行', amount: 1641, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M07-11', receiptDate: '2026/07/21', gregorianDate: '2026/07/21', month: '2026/07', monthKey: '2026-07', rawName: '克里姆晨食', name: '克里姆晨食', amount: 300, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M07-12', receiptDate: '2026/07/22', gregorianDate: '2026/07/22', month: '2026/07', monthKey: '2026-07', rawName: '美樂司', name: '美樂司', amount: 1170, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M07-13', receiptDate: '2026/07/22', gregorianDate: '2026/07/22', month: '2026/07', monthKey: '2026-07', rawName: '悅飴館', name: '悅飴館', amount: 1500, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M07-14', receiptDate: '2026/07/22', gregorianDate: '2026/07/22', month: '2026/07', monthKey: '2026-07', rawName: '可利丹食品行', name: '可利丹食品行', amount: 1000, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M07-15', receiptDate: '2026/07/23', gregorianDate: '2026/07/23', month: '2026/07', monthKey: '2026-07', rawName: '張語妡', name: '張*妡', amount: 200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-16', receiptDate: '2026/07/23', gregorianDate: '2026/07/23', month: '2026/07', monthKey: '2026-07', rawName: '蔡宗軒', name: '蔡*軒', amount: 200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-17', receiptDate: '2026/07/23', gregorianDate: '2026/07/23', month: '2026/07', monthKey: '2026-07', rawName: '早安美芝城大明概念店', name: '早安美芝城大明概念店', amount: 300, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M07-18', receiptDate: '2026/07/23', gregorianDate: '2026/07/23', month: '2026/07', monthKey: '2026-07', rawName: '蔡枚芬', name: '蔡*芬', amount: 400, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M07-19', receiptDate: '2026/07/29', gregorianDate: '2026/07/29', month: '2026/07', monthKey: '2026-07', rawName: '大億小吃店', name: '大億小吃店', amount: 1000, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M07-20', receiptDate: '2026/07/30', gregorianDate: '2026/07/30', month: '2026/07', monthKey: '2026-07', rawName: '善心人士', name: '善心人士', amount: 799, project: DEFAULT_PROJECT_DETAIL },

  // 2026/08
  { id: 'M08-01', receiptDate: '2026/08/01', gregorianDate: '2026/08/01', month: '2026/08', monthKey: '2026-08', rawName: '周育如', name: '周*如', amount: 300, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-02', receiptDate: '2026/08/01', gregorianDate: '2026/08/01', month: '2026/08', monthKey: '2026-08', rawName: '張雅玲', name: '張*玲', amount: 300, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-03', receiptDate: '2026/08/10', gregorianDate: '2026/08/10', month: '2026/08', monthKey: '2026-08', rawName: '戴彩勤', name: '戴*勤', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-04', receiptDate: '2026/08/10', gregorianDate: '2026/08/10', month: '2026/08', monthKey: '2026-08', rawName: '陳德福', name: '陳*福', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-05', receiptDate: '2026/08/12', gregorianDate: '2026/08/12', month: '2026/08', monthKey: '2026-08', rawName: '粘乃華', name: '粘*華', amount: 100, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-06', receiptDate: '2026/08/12', gregorianDate: '2026/08/12', month: '2026/08', monthKey: '2026-08', rawName: '劉*榛', name: '劉*榛', amount: 1200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-07', receiptDate: '2026/08/14', gregorianDate: '2026/08/14', month: '2026/08', monthKey: '2026-08', rawName: '許雅雯', name: '許*雯', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-08', receiptDate: '2026/08/15', gregorianDate: '2026/08/15', month: '2026/08', monthKey: '2026-08', rawName: '陪童之友', name: '陪童之友', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-09', receiptDate: '2026/08/17', gregorianDate: '2026/08/17', month: '2026/08', monthKey: '2026-08', rawName: '鄭怡姍', name: '鄭*姍', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-10', receiptDate: '2026/08/25', gregorianDate: '2026/08/25', month: '2026/08', monthKey: '2026-08', rawName: '加鑫五金百貨商行', name: '加鑫五金百貨商行', amount: 1512, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M08-11', receiptDate: '2026/08/25', gregorianDate: '2026/08/25', month: '2026/08', monthKey: '2026-08', rawName: '克里姆晨食', name: '克里姆晨食', amount: 300, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M08-12', receiptDate: '2026/08/26', gregorianDate: '2026/08/26', month: '2026/08', monthKey: '2026-08', rawName: '美樂司', name: '美樂司', amount: 1942, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M08-13', receiptDate: '2026/08/26', gregorianDate: '2026/08/26', month: '2026/08', monthKey: '2026-08', rawName: '悅飴館', name: '悅飴館', amount: 1400, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M08-14', receiptDate: '2026/08/26', gregorianDate: '2026/08/26', month: '2026/08', monthKey: '2026-08', rawName: '可利丹食品行', name: '可利丹食品行', amount: 1304, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M08-15', receiptDate: '2026/08/27', gregorianDate: '2026/08/27', month: '2026/08', monthKey: '2026-08', rawName: '早安美芝城大明概念店', name: '早安美芝城大明概念店', amount: 300, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M08-16', receiptDate: '2026/08/27', gregorianDate: '2026/08/27', month: '2026/08', monthKey: '2026-08', rawName: '張語妡', name: '張*妡', amount: 200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-17', receiptDate: '2026/08/27', gregorianDate: '2026/08/27', month: '2026/08', monthKey: '2026-08', rawName: '蔡宗軒', name: '蔡*軒', amount: 200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-18', receiptDate: '2026/08/27', gregorianDate: '2026/08/27', month: '2026/08', monthKey: '2026-08', rawName: '蔡枚芬', name: '蔡*芬', amount: 400, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-19', receiptDate: '2026/08/27', gregorianDate: '2026/08/27', month: '2026/08', monthKey: '2026-08', rawName: '丈母娘找茶', name: '丈母娘找茶', amount: 4293, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M08-20', receiptDate: '2026/08/28', gregorianDate: '2026/08/28', month: '2026/08', monthKey: '2026-08', rawName: '大億小吃店', name: '大億小吃店', amount: 647, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M08-21', receiptDate: '2026/08/31', gregorianDate: '2026/08/31', month: '2026/08', monthKey: '2026-08', rawName: '善心人士', name: '善心人士', amount: 4476, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M08-22', receiptDate: '2026/08/31', gregorianDate: '2026/08/31', month: '2026/08', monthKey: '2026-08', rawName: '高雄市私立鳳翔社區(小規模多機能)長照機構', name: '高雄市私立鳳翔社區(小規模多機能)長照機構', amount: 2216, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },

  // 2026/09
  { id: 'M09-01', receiptDate: '2026/09/01', gregorianDate: '2026/09/01', month: '2026/09', monthKey: '2026-09', rawName: '張雅玲', name: '張*玲', amount: 300, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-02', receiptDate: '2026/09/01', gregorianDate: '2026/09/01', month: '2026/09', monthKey: '2026-09', rawName: '周育如', name: '周*如', amount: 300, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-03', receiptDate: '2026/09/02', gregorianDate: '2026/09/02', month: '2026/09', monthKey: '2026-09', rawName: '曾維梃', name: '曾*梃', amount: 800, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-04', receiptDate: '2026/09/04', gregorianDate: '2026/09/04', month: '2026/09', monthKey: '2026-09', rawName: '昆蟲哲學甲蟲生態館', name: '昆蟲哲學甲蟲生態館', amount: 628, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-05', receiptDate: '2026/09/05', gregorianDate: '2026/09/05', month: '2026/09', monthKey: '2026-09', rawName: '臻Q雞爪', name: '臻Q雞爪', amount: 1862, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-06', receiptDate: '2026/09/08', gregorianDate: '2026/09/08', month: '2026/09', monthKey: '2026-09', rawName: '戴彩勤', name: '戴*勤', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-07', receiptDate: '2026/09/08', gregorianDate: '2026/09/08', month: '2026/09', monthKey: '2026-09', rawName: '陳德福', name: '陳*福', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-08', receiptDate: '2026/09/14', gregorianDate: '2026/09/14', month: '2026/09', monthKey: '2026-09', rawName: '許雅雯', name: '許*雯', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-09', receiptDate: '2026/09/15', gregorianDate: '2026/09/15', month: '2026/09', monthKey: '2026-09', rawName: '陪童之友', name: '陪童之友', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-10', receiptDate: '2026/09/17', gregorianDate: '2026/09/17', month: '2026/09', monthKey: '2026-09', rawName: '鄭怡姍', name: '鄭*姍', amount: 1000, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-11', receiptDate: '2026/09/17', gregorianDate: '2026/09/17', month: '2026/09', monthKey: '2026-09', rawName: '花枝媽媽', name: '花枝媽媽', amount: 1022, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-12', receiptDate: '2026/09/18', gregorianDate: '2026/09/18', month: '2026/09', monthKey: '2026-09', rawName: '丈母娘找茶', name: '丈母娘找茶', amount: 2323, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-13', receiptDate: '2026/09/18', gregorianDate: '2026/09/18', month: '2026/09', monthKey: '2026-09', rawName: '大億小吃店', name: '大億小吃店', amount: 1240, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-14', receiptDate: '2026/09/18', gregorianDate: '2026/09/18', month: '2026/09', monthKey: '2026-09', rawName: '盈冠商行', name: '盈冠商行', amount: 308, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-15', receiptDate: '2026/09/18', gregorianDate: '2026/09/18', month: '2026/09', monthKey: '2026-09', rawName: '克里姆晨食', name: '克里姆晨食', amount: 300, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-16', receiptDate: '2026/09/22', gregorianDate: '2026/09/22', month: '2026/09', monthKey: '2026-09', rawName: '加鑫五金百貨商行', name: '加鑫五金百貨商行', amount: 748, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-17', receiptDate: '2026/09/22', gregorianDate: '2026/09/22', month: '2026/09', monthKey: '2026-09', rawName: '臻Q雞爪', name: '臻Q雞爪', amount: 843, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-18', receiptDate: '2026/09/22', gregorianDate: '2026/09/22', month: '2026/09', monthKey: '2026-09', rawName: '心頌冰坊', name: '心頌冰坊', amount: 499, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-19', receiptDate: '2026/09/22', gregorianDate: '2026/09/22', month: '2026/09', monthKey: '2026-09', rawName: '新圓山自助餐', name: '新圓山自助餐', amount: 885, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-20', receiptDate: '2026/09/22', gregorianDate: '2026/09/22', month: '2026/09', monthKey: '2026-09', rawName: '可利丹食品行', name: '可利丹食品行', amount: 1247, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-21', receiptDate: '2026/09/22', gregorianDate: '2026/09/22', month: '2026/09', monthKey: '2026-09', rawName: '頑皮寶貝(保南店)', name: '頑皮寶貝(保南店)', amount: 1074, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-22', receiptDate: '2026/09/23', gregorianDate: '2026/09/23', month: '2026/09', monthKey: '2026-09', rawName: '美樂司', name: '美樂司', amount: 1592, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-23', receiptDate: '2026/09/23', gregorianDate: '2026/09/23', month: '2026/09', monthKey: '2026-09', rawName: '悅飴館', name: '悅飴館', amount: 1600, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-24', receiptDate: '2026/09/23', gregorianDate: '2026/09/23', month: '2026/09', monthKey: '2026-09', rawName: '桂林自助餐', name: '桂林自助餐', amount: 445, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-25', receiptDate: '2026/09/24', gregorianDate: '2026/09/24', month: '2026/09', monthKey: '2026-09', rawName: '張語妡', name: '張*妡', amount: 200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-26', receiptDate: '2026/09/24', gregorianDate: '2026/09/24', month: '2026/09', monthKey: '2026-09', rawName: '蔡宗軒', name: '蔡*軒', amount: 200, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-27', receiptDate: '2026/09/24', gregorianDate: '2026/09/24', month: '2026/09', monthKey: '2026-09', rawName: '早安美芝城大明概念店', name: '早安美芝城大明概念店', amount: 300, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
  { id: 'M09-28', receiptDate: '2026/09/24', gregorianDate: '2026/09/24', month: '2026/09', monthKey: '2026-09', rawName: '蔡枚芬', name: '蔡*芬', amount: 400, project: DEFAULT_PROJECT_DETAIL },
  { id: 'M09-29', receiptDate: '2026/09/24', gregorianDate: '2026/09/24', month: '2026/09', monthKey: '2026-09', rawName: '東洲黑糖奶舖', name: '東洲黑糖奶舖', amount: 360, project: DEFAULT_PROJECT_DETAIL, isOrganization: true },
];
