

export const HdfcLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 44" height="38" aria-label="HDFC Bank">
    <rect x="0" y="4" width="7" height="34" rx="1.5" fill="#003299"/>
    <rect x="0" y="18" width="21" height="7" rx="1.5" fill="#003299"/>
    <rect x="14" y="4" width="7" height="34" rx="1.5" fill="#003299"/>
    <text x="30" y="31" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="17" fill="#003299" letterSpacing="0.4">HDFC BANK</text>
  </svg>
);

export const TataLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 48" height="38" aria-label="Tata">
    <ellipse cx="65" cy="24" rx="62" ry="21" fill="#003087"/>
    <text x="65" y="31" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="white" letterSpacing="5">TATA</text>
  </svg>
);

export const RelianceLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" height="38" aria-label="Reliance">
    <circle cx="16" cy="24" r="12" fill="none" stroke="#1B4A8C" strokeWidth="3"/>
    <path d="M10 24 Q16 12 22 24" stroke="#1B4A8C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <text x="36" y="31" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="18" fill="#1B4A8C" letterSpacing="1">RELIANCE</text>
  </svg>
);

export const InfosysLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 48" height="38" aria-label="Infosys">
    <text x="4" y="34" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="26" fill="#007CC3" letterSpacing="-0.5">infosys</text>
    <path d="M2 38 L155 38" stroke="#F97316" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const WiproLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" height="38" aria-label="Wipro">
    <circle cx="18" cy="24" r="14" fill="none" stroke="#341C68" strokeWidth="2"/>
    <circle cx="18" cy="14" r="3.5" fill="#F97316"/>
    <circle cx="26" cy="20" r="3.5" fill="#341C68"/>
    <circle cx="26" cy="28" r="3.5" fill="#F97316"/>
    <circle cx="18" cy="34" r="3.5" fill="#341C68"/>
    <circle cx="10" cy="28" r="3.5" fill="#F97316"/>
    <circle cx="10" cy="20" r="3.5" fill="#341C68"/>
    <text x="40" y="31" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#341C68" letterSpacing="1">WIPRO</text>
  </svg>
);

export const MahindraLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 52" height="40" aria-label="Mahindra">
    <path d="M8 38 C8 38 14 10 20 24 C26 38 32 10 38 24 C44 38 50 10 56 38" stroke="#CC0000" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="66" y="34" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" fill="#231F20" letterSpacing="0.5">mahindra</text>
  </svg>
);

export const LandTLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 52" height="40" aria-label="L&T">
    <rect x="2" y="2" width="126" height="48" rx="4" fill="none" stroke="#C8171E" strokeWidth="2.5"/>
    <text x="65" y="35" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="26" fill="#C8171E" letterSpacing="2">L&T</text>
  </svg>
);

export const ItcLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 52" height="40" aria-label="ITC">
    <rect x="2" y="2" width="116" height="48" rx="0" fill="#00254A"/>
    <text x="60" y="36" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" fill="white" letterSpacing="4">ITC</text>
  </svg>
);

export const GodrejLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 48" height="38" aria-label="Godrej">
    <path d="M24 12 A14 14 0 1 0 24 36 L24 26 L32 26" stroke="#009F3A" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <text x="44" y="31" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" fill="#009F3A" letterSpacing="0.5">GODREJ</text>
  </svg>
);

export const BajajLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 48" height="38" aria-label="Bajaj Finserv">
    <path d="M8 36 L8 12 C8 12 20 12 20 20 C20 28 8 28 8 28" stroke="#003566" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <text x="30" y="31" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="18" fill="#003566" letterSpacing="0.5">BAJAJ</text>
  </svg>
);

export const ALL_CLIENTS = [
  { name: 'HDFC Bank',    domain: 'hdfcbank.com',    Logo: HdfcLogo     },
  { name: 'Tata',         domain: 'tata.com',         Logo: TataLogo     },
  { name: 'Reliance',     domain: 'ril.com',          Logo: RelianceLogo },
  { name: 'Infosys',      domain: 'infosys.com',      Logo: InfosysLogo  },
  { name: 'Wipro',        domain: 'wipro.com',        Logo: WiproLogo    },
  { name: 'Mahindra',     domain: 'mahindra.com',     Logo: MahindraLogo },
  { name: 'L&T',          domain: 'larsentoubro.com', Logo: LandTLogo    },
  { name: 'ITC',          domain: 'itcportal.com',    Logo: ItcLogo      },
  { name: 'Godrej',       domain: 'godrej.com',       Logo: GodrejLogo   },
  { name: 'Bajaj',        domain: 'bajajfinserv.in',  Logo: BajajLogo    },
];
