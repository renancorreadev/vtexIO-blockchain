/* eslint-disable @typescript-eslint/ban-types */
declare module "vtex.product-context" {
  export const useProduct: () => any;

  type IProductContextDispatchType =
    | "SELECT_IMAGE_VARIATION"
    | "SET_QUANTITY"
    | "SKU_SELECTOR_SET_VARIATIONS_SELECTED"
    | "SET_BUY_BUTTON_CLICKED"
    | "SKU_SELECTOR_SET_IS_VISIBLE"
    | "SET_SELECTED_ITEM"
    | "SET_ASSEMBLY_OPTIONS"
    | "SET_PRODUCT"
    | "SET_LOADING_ITEM";

  type IProductContextDispatch = {
    type: IProductContextDispatchType;
    args: object;
  };

  type IUseProductDispatch = (params: IProductContextDispatch) => void;

  export const useProductDispatch: () => IUseProductDispatch;
}
