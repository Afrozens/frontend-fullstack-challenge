import { OptionsObject, ProviderContext, useSnackbar } from "notistack";

let useSnackbarRef: ProviderContext;
export function SnackbarUtilitiesConfigurator() {
  useSnackbarRef = useSnackbar();
  return null;
}

export const SnackbarUtilities = {
  toast(msg: string, variant = "default") {
    useSnackbarRef.enqueueSnackbar(
      msg,
      variant as unknown as OptionsObject<"default">
    );
  },
  error(msg: string) {
    this.toast(msg, "error");
  },
};
