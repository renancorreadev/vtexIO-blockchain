/* eslint-disable import/no-duplicates */

declare module "vtex.order-manager";

declare module "vtex.order-manager/OrderForm" {
  import { ComponentType } from "react";

  export const useOrderForm: () => any;
  export const OrderFormProvider: ComponentType;
}

declare module "vtex.order-manager/OrderQueue" {
  import { ComponentType } from "react";

  export const OrderQueueProvider: ComponentType;
}
