declare module "vtex.order-items";

declare module "vtex.order-items/OrderItems" {
  import { ComponentType } from "react";

  export const useOrderItems: () => any;
  export const OrderItemsProvider: ComponentType;
}
