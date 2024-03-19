import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export interface ConfirmDialogProps {
  body?: React.ReactNode
  onOK?: () => void
  onCancel: () => void
  open: boolean
  title?: React.ReactNode
}

export function ConfirmDialog({ body, onOK, onCancel, open, title }: ConfirmDialogProps) {  
  return (
    <>
      <Dialog open={open} handler={onCancel}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>
          {body}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={onCancel}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={onOK}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}