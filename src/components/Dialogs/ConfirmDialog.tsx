import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { AwesomeButton } from 'react-awesome-button'; 

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
          
          <AwesomeButton
              style={{
                '--button-primary-color': '#D70040',
                '--button-primary-color-dark': '#C41E3A',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#D70040',
                '--button-primary-color-active': '#D2042D',
                '--button-default-border-radius': '8px',
                width: '80px',
                height: '40px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onPress={onCancel}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
               Cancel
            </AwesomeButton>

          <AwesomeButton
              style={{
                '--button-primary-color': '#343434',
                '--button-primary-color-dark': '#353935',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#343434',
                '--button-primary-color-active': '#1aa81a',
                '--button-default-border-radius': '8px',
                width: '80px',
                height: '40px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onPress={onOK}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
               Confirm
            </AwesomeButton>

        </DialogFooter>
      </Dialog>
    </>
  );
}