import{H as a,E as e}from"./BXREgLoY.js";const o=async r=>await a.get(`${e.get_all_orders}/`,r).then(t=>t).catch(t=>t),s=async r=>await a.post(e.add_order,r).then(t=>t.data).catch(t=>t),n={getOrders:o,addOrder:s};export{n as o};
