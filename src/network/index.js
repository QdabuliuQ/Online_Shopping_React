import ajax from "./request";

const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'

export const getBanner = () => {
  return ajax(BASE_URL + '/home/swiperdata', {}) 
}

export const getNavList = () => {
  return ajax(BASE_URL + '/home/catitems', {}) 
}

export const getFloorData = () => {
  return ajax(BASE_URL + '/home/floordata', {}) 
}

export const getCategory = () => {
  return ajax(BASE_URL + '/categories', {}) 
}

export const getSearchResult = (data) => {
  return ajax(BASE_URL + '/goods/qsearch', {
    ...data
  }) 
}

export const getGoodsDetail = (data) => {
  return ajax(BASE_URL + '/goods/detail', {
    ...data
  }) 
}

export const getGoodsList = (data) => {
  return ajax(BASE_URL + '/goods/search', {
    ...data
  }) 
}