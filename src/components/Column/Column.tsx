import { forwardRef } from "react";
import { Box, BoxProps } from "@mui/material";

export const Column = forwardRef<HTMLDivElement, BoxProps>(({
  children,
  ...props
}, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      {...props}
    >
      {children}
    </Box>
  )
});
