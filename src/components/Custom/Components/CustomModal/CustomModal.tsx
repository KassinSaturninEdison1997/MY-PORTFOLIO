import React from "react";
import {
  BasicDialog,
  BasicDialogActions,
  BasicDialogContent,
  BasicDialogTitle,
} from "../BasicDialog";
import { TSize } from "../BasicDialog/BasicDialog";
import { Button } from "@material-ui/core";

interface ICustomModal {
  open: boolean;
  onClose: () => void;
  children?: JSX.Element;
  size?: TSize;
  title?: string;
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;

  justCancel?: boolean;
  onSave?: () => void;
  onEdit?: () => void;
  onAuth?: () => void;

  fullScreen?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}
const CustomModal: React.FunctionComponent<ICustomModal> = ({
  open,
  onClose,
  children,
  size,
  title,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  onSave,
  onEdit,
  onAuth,
  justCancel,
  fullScreen,
  fullWidth,
  disabled,
}) => {
  const getConfirmButtonLabel = () => {
    if (onAuth) return { label: "Se connecter", onAction: onAuth };
    if (onSave) return { label: "Enregistrer", onAction: onSave };
    if (onEdit) return { label: "Modifier", onAction: onEdit };
    return { label: "", onAction: undefined };
  };

  const button = getConfirmButtonLabel();
  return (
    <BasicDialog
      open={open}
      onClose={onClose}
      size={size}
      minWidth={minWidth}
      minHeight={minHeight}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
    >
      {title && (
        <BasicDialogTitle className="font-bold">{title}</BasicDialogTitle>
      )}
      {children && <BasicDialogContent>{children}</BasicDialogContent>}
      <BasicDialogActions>
        <ModalAction label="Annuler" onAction={onClose} />

        {(onAuth || onEdit || onSave) && !justCancel && (
          <ModalAction
            label={button.label}
            withColor
            disabled={disabled}
            onAction={button.onAction}
          />
        )}
      </BasicDialogActions>
    </BasicDialog>
  );
};

const ModalAction = ({
  label,
  withColor,
  onAction,
  disabled,
}: {
  label: string;
  withColor?: boolean;
  onAction?: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      style={{
        background: withColor ? "#1f2937" : undefined,
        color: withColor ? "#fff" : "#1f2937",
        padding: "10px",
      }}
      onClick={onAction}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default CustomModal;
