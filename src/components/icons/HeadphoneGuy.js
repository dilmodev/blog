import React from "react";
import { useThemeColor } from "../../hooks/useThemeColors";

export const HeadphoneGuy = () => {
  const color = useThemeColor("text");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="36 "
      stroke={color}
      strokeWidth={0.1}
    >
      <g fill={color}>
        <path d="M29.715 12.955h1.52v6.09h-1.52zM9.905 12.955h1.52v-1.53h1.53v-1.52h6.09v1.52h1.53v-1.52h4.57v1.52h1.52v12.19h1.53v-3.04h1.52v-1.53h-1.52v-6.09h1.52v-1.53h-1.52v-6.09h-1.53v1.52h-1.52v-1.52h-3.05v-1.53h-10.67v1.53h-1.52v1.52h-1.52v3.05h-1.53v-4.57h-1.52v4.57h-1.52v1.52h6.09v1.53z" />
        <path d="M25.145 23.615h1.52v1.53h-1.52zM25.145 3.805h1.52v1.53h-1.52zM23.615 20.575h1.53v1.52h-1.53zM23.615 15.995h1.53v3.05h-1.53zM23.615 2.285h1.53v1.52h-1.53zM11.425 25.145V28.2h-3.04v1.52h-3.05v1.52h24.38v-1.52h-3.05V28.2h-3.05v-1.53h1.53v-1.52Zm10.67 4.57h-6.09V28.2h-3.05v-1.53H22.1ZM19.045 22.095h4.57v1.52h-4.57zM17.525 20.575h1.52v1.52h-1.52zM16.005 15.995h1.52v3.05h-1.52zM16.005 11.425h3.04v1.53h-3.04zM11.425 12.955h1.53v6.09h-1.53zM9.905.765h13.71v1.52H9.905zM9.905 23.615h1.52v1.53h-1.52zM9.905 19.045h1.52v1.53h-1.52zM3.815 20.575v1.52h4.57v1.52h1.52v-3.04h-6.09zM8.385 2.285h1.52v1.52h-1.52zM6.855 3.805h1.53v1.53h-1.53zM5.335 12.955h1.52v1.52h-1.52zM3.815 14.475h1.52v3.05h-1.52z" />
        <path d="M2.285 19.045h1.53v1.53h-1.53zM2.285 11.425h1.53v1.53h-1.53zM.765 12.955h1.52v6.09H.765z" />
      </g>
    </svg>
  );
};