type Props = {
  color: "#8F92B5" | "#151422";
};

export const OverviewIcon = ({ color = "#8F92B5" }: Props) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="10.8331"
        height="10.8331"
        rx="5.41657"
        stroke={color}
        strokeWidth="2"
      />
      <mask id="path-2-inside-1_351_823" fill="white">
        <path d="M15.1665 4.00019C15.1665 1.79105 16.9574 0.000183105 19.1665 0.000183105H23.9996C26.2088 0.000183105 27.9996 1.79104 27.9996 4.00018V8.83332C27.9996 11.0425 26.2088 12.8333 23.9996 12.8333H16.1665C15.6142 12.8333 15.1665 12.3856 15.1665 11.8333V4.00019Z" />
      </mask>
      <path
        d="M15.1665 4.00019C15.1665 1.79105 16.9574 0.000183105 19.1665 0.000183105H23.9996C26.2088 0.000183105 27.9996 1.79104 27.9996 4.00018V8.83332C27.9996 11.0425 26.2088 12.8333 23.9996 12.8333H16.1665C15.6142 12.8333 15.1665 12.3856 15.1665 11.8333V4.00019Z"
        stroke={color}
        strokeWidth="4"
        mask="url(#path-2-inside-1_351_823)"
      />
      <mask id="path-3-inside-2_351_823" fill="white">
        <path d="M0 19.1666C0 16.9575 1.79086 15.1666 4 15.1666H11.8331C12.3854 15.1666 12.8331 15.6143 12.8331 16.1666V23.9998C12.8331 26.2089 11.0423 27.9998 8.83314 27.9998H4C1.79087 27.9998 0 26.2089 0 23.9998V19.1666Z" />
      </mask>
      <path
        d="M0 19.1666C0 16.9575 1.79086 15.1666 4 15.1666H11.8331C12.3854 15.1666 12.8331 15.6143 12.8331 16.1666V23.9998C12.8331 26.2089 11.0423 27.9998 8.83314 27.9998H4C1.79087 27.9998 0 26.2089 0 23.9998V19.1666Z"
        stroke={color}
        strokeWidth="4"
        mask="url(#path-3-inside-2_351_823)"
      />
      <rect
        x="16.1665"
        y="16.1666"
        width="10.8331"
        height="10.8331"
        rx="5.41657"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};
