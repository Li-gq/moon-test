import mockAjax from './mockAjax';

export function reqOrderInfo(){
  return mockAjax({
    url: "/orderInfo",
    method: "get",
  });
};
