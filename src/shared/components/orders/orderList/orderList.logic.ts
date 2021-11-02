import { OrderClient, IConfig,UpdateStatusApiRequest,
  UpdateStatusItem, OrderItemStatusType } from "../../../api/client";

export async function orderListAction() {
  console.log("order list logic");
  let ordersClient = new OrderClient(new IConfig());
let status=new UpdateStatusApiRequest();
var item=new UpdateStatusItem();

item.orderItemId="08d90eb4-d5e7-485b-8c93-0934a548c487";
item.orderItemStatusType= OrderItemStatusType.OutofStock;
let items= [item];
status.items= items;
  let response = await ordersClient
    .updateStatus(status)
    .then((response) => {
      return response;
    });

  return response;
}
