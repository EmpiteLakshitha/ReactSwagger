import { OrdersClient, IConfig } from "../../../api/client";

export async function orderListAction() {
  console.log("order list logic");
  let ordersClient = new OrdersClient(new IConfig());

  let response = await ordersClient
    .getOrders(null, "1", false, 1, 10)
    .then((response) => {
      return response;
    });

  return response;
}
