import { CHANGE_LANG, IMPORT_JSON } from '../constants/ActionTypes'
import settings from '../../settings'

import defaultDataEn from '../../data/cv/en.json'
import defaultDataFr from '../../data/cv/fr.json'
import defaultDataZhCn from '../../data/cv/zh-cn.json'

const defaultData = {
  en: defaultDataEn,
  fr: defaultDataFr,
  'zh-cn': defaultDataZhCn,
}

const userData = (state = defaultData[settings.default_lang], action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return defaultData[action.lang]
    case IMPORT_JSON:
      return action.data
    default:
      return state
  }
}

export default userData