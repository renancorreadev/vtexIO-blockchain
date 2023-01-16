
import React,{ ComponentType, FC, Fragment, useMemo } from "react";
import { ToastProvider } from "vtex.styleguide";
import { WalletProvider } from "../../providers/WalletProvider";


type IStoreWrapper = {
  CustomContext?: ComponentType;
};

const StoreWrapper: FC<IStoreWrapper> = ({ children, CustomContext }) => {
  const CustomContextElement = useMemo(
    () => CustomContext || Fragment,
    [CustomContext]
  );

  return (
    <div >
      <ToastProvider>
        <WalletProvider>
          <CustomContextElement>{children}</CustomContextElement>
        </WalletProvider>
      </ToastProvider>
    </div>
  );
};

export default StoreWrapper;
