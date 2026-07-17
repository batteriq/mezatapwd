/** Line-art icon set — 24px grid, 1.5pt stroke, currentColor. No emoji anywhere. */

function Svg({ children, className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconQr = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <path d="M14 14h3v3h-3zM21 14v.01M14 21h.01M17.5 17.5L21 21" />
  </Svg>
);

export const IconCloche = (p) => (
  <Svg {...p}>
    <path d="M4 17h16" />
    <path d="M5 17a7 7 0 0 1 14 0" />
    <path d="M12 10V8.5" />
    <circle cx="12" cy="7.5" r="1" />
    <path d="M2.5 20h19" />
  </Svg>
);

export const IconCard = (p) => (
  <Svg {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M2.5 9.5h19M6 15h4" />
  </Svg>
);

export const IconArmchair = (p) => (
  <Svg {...p}>
    <path d="M5 11V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" />
    <path d="M4 11a2 2 0 0 1 2 2v2h12v-2a2 2 0 0 1 4 0v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a2 2 0 0 1 2-2z" />
    <path d="M6 20v1.5M18 20v1.5" />
  </Svg>
);

export const IconBell = (p) => (
  <Svg {...p}>
    <path d="M6 9.5a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 13.5 6 9.5z" />
    <path d="M10 18.5a2 2 0 0 0 4 0" />
  </Svg>
);

export const IconWallet = (p) => (
  <Svg {...p}>
    <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5" />
    <rect x="3" y="7.5" width="18" height="11.5" rx="2.5" />
    <path d="M16 13.25h.01" />
  </Svg>
);

export const IconChart = (p) => (
  <Svg {...p}>
    <path d="M3.5 3.5v17h17" />
    <path d="M7.5 16v-5M12 16V7.5M16.5 16v-3" />
  </Svg>
);

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 2.8 4.5 5.6v5.2c0 4.7 3.2 8.3 7.5 9.6 4.3-1.3 7.5-4.9 7.5-9.6V5.6L12 2.8z" />
    <path d="m9 11.6 2.1 2.1L15.3 9.5" />
  </Svg>
);

export const IconPrinter = (p) => (
  <Svg {...p}>
    <path d="M7 8V3.5h10V8" />
    <rect x="3.5" y="8" width="17" height="8.5" rx="2" />
    <path d="M7 13.5h10V21H7z" />
  </Svg>
);

export const IconBuilding = (p) => (
  <Svg {...p}>
    <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5V21" />
    <path d="M14 9h4.5A1.5 1.5 0 0 1 20 10.5V21" />
    <path d="M2.5 21h19M7 8h1.5M7 11.5h1.5M7 15h1.5M17 12.5v.01M17 16v.01" />
  </Svg>
);

export const IconPalette = (p) => (
  <Svg {...p}>
    <path d="M12 21a9 9 0 1 1 9-9c0 2.5-1.7 3.5-3.5 3.5H15a2 2 0 0 0-1.5 3.3c.4.5.2 1.2-.4 1.2H12z" />
    <path d="M7.5 11.5h.01M11 7.5h.01M16 8.5h.01" />
  </Svg>
);

export const IconCalendar = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
    <path d="M8 3v4M16 3v4M3.5 10h17M12 14v3M10.5 15.5h3" />
  </Svg>
);

export const IconStar = (p) => (
  <Svg {...p}>
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5z" />
  </Svg>
);

export const IconPhone = (p) => (
  <Svg {...p}>
    <path d="M5 4h4l1.5 4.5-2.2 1.6a12 12 0 0 0 5.6 5.6l1.6-2.2L20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Svg>
);

export const IconMail = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Svg>
);

export const IconWhatsApp = (p) => (
  <Svg {...p}>
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
    <path d="M9 8.5c-.3 2.5 3 6.5 5.5 6.5.8 0 1.6-.5 1.6-1.2 0-.5-1.2-1.3-1.7-1.3s-.7.5-1.2.4c-.8-.2-2.1-1.5-2.3-2.3-.1-.5.4-.7.4-1.2S10.5 8 10 8c-.4 0-.9.1-1 .5z" />
  </Svg>
);

export const IconArrow = (p) => (
  <Svg {...p}>
    <path d="M4 12h16m0 0-6-6m6 6-6 6" />
  </Svg>
);

export const IconCheck = (p) => (
  <Svg {...p}>
    <path d="m4.5 12.5 5 5L19.5 7" />
  </Svg>
);

export const IconRefresh = (p) => (
  <Svg {...p}>
    <path d="M20 8A8.5 8.5 0 0 0 5.5 6L4 7.5M4 4v3.5H7.5" />
    <path d="M4 16a8.5 8.5 0 0 0 14.5 2l1.5-1.5m0 3.5v-3.5H16.5" />
  </Svg>
);

export const IconUsers = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.25" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.4a3.25 3.25 0 0 1 0 5.7M17.5 15.1a5.5 5.5 0 0 1 3 4.9" />
  </Svg>
);

export const IconReceipt = (p) => (
  <Svg {...p}>
    <path d="M6 3.5h12V21l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21V3.5z" />
    <path d="M9 8h6M9 11.5h6M9 15h3.5" />
  </Svg>
);

export const IconSmartphone = (p) => (
  <Svg {...p}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 18.5h2" />
  </Svg>
);

export const IconLaptop = (p) => (
  <Svg {...p}>
    <rect x="4.5" y="4.5" width="15" height="10.5" rx="1.5" />
    <path d="M2.5 19.5h19l-1.5-3h-16l-1.5 3z" />
  </Svg>
);

export const IconBed = (p) => (
  <Svg {...p}>
    <path d="M3 18.5V7" />
    <path d="M3 15h18v3.5" />
    <path d="M3 11.5h18V15" />
    <path d="M6.5 11.5a2 2 0 1 1 4 0" />
  </Svg>
);

export const IconMapPin = (p) => (
  <Svg {...p}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);

export const IconClock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const IconChevronUp = (p) => (
  <Svg {...p}>
    <path d="m6 15 6-6 6 6" />
  </Svg>
);

export const IconSignal = (p) => (
  <Svg {...p}>
    <path d="M4 19.5h.01M8 19.5v-3M12 19.5v-6.5M16 19.5V9M20 19.5V5" />
  </Svg>
);
