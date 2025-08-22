import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "./ui/shadcn/alert-dialog";

const AlertTokenExpired = ({ open, onSignIn }) => (
  <AlertDialog open={open}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Session Expired</AlertDialogTitle>
        <AlertDialogDescription>
          Your session has expired. Please sign in again to continue.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction onClick={onSignIn}>Sign In</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertTokenExpired;
