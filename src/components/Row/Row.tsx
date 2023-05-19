import { forwardRef } from "react";
import { Box, BoxProps } from "@mui/material";

export const Row = forwardRef<HTMLDivElement, BoxProps>(({
  children,
  ...props
}, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
      {...props}
    >
      {children}
    </Box>
  )
});
