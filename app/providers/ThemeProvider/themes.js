const neutralColors = {
  neutral0: "#FEFEFE",
  neutral1: "#F2F2F2",
  neutral2: "#E8E9E9",
  neutral3: "#D1D3D4",
  neutral4: "#BABDBF",
  neutral5: "#808488",
  neutral6: "#666A6D",
  neutral7: "#4D5052",
  neutral8: "#212122",
  neutral9: "#333"
};
const themes = {
  light : {
    background: "#F9F9F9",
    foreground: neutralColors.neutral0,
    // text
    primaryText: "#111111",
    link: neutralColors.neutral5,
    hoveredLink: neutralColors.neutral6,
    // primary
    primary:     neutralColors.neutral4,
    primaryDark: neutralColors.neutral6,
    primaryLight:neutralColors.neutral3,
    // secondary
    secondary: "#673AB7",
    secondaryDark:"#311B92",
    secondaryLight:"#9575CD",
    // primary accent
    primaryAccent:      "#009688",
    primaryAccentDark:  "#004D40",
    primaryAccentLight: "#4DB6AC",
    // secondary accent
    secondaryAccent: "#8BC34A",
    secondaryAccentDark:"#558B2F",
    secondaryAccentLight:"#AED581",
    // tertiary accent
    tertiaryAccent:     "#F44336",
    tertiaryAccentDark:  "#B71C1C",
    tertiaryAccentLight: "#EF9A9A"
  },
  dark: {
    background: "#222",
    foreground: neutralColors.neutral9,
    // text
    primaryText: "#E3F2FD",
    link: neutralColors.neutral2,
    hoveredLink: neutralColors.neutral1,
    // primary
    primary: "#999",
    primaryDark: "#777",
    primaryLight: "#AAA",
    // secondary
    secondary: "#38BFA7",
    secondaryDark:"#2E9D89",
    secondaryLight:"#6ED0BE",
    // primary accent
    primaryAccent: "#586994",
    primaryAccentDark: "#39435F",
    primaryAccentLight: "#7684A7",
    // secondary accent
    secondaryAccent: "#A3E6B2",
    secondaryAccentDark:"#76B985",
    secondaryAccentLight:"#A3E6B2",
    // tertiary accent
    tertiaryAccent: "#f53e38",
    tertiaryAccentDark:"#B32340",
    tertiaryAccentLight: "#F65475"
  }
};

// sunset : {
//   background: "#F9F9F9",
//   foreground: neutralColors.neutral0,
//   // text
//   primaryText: "#111111",
//   link: neutralColors.neutral5,
//   hoveredLink: neutralColors.neutral6,
//   // primary
//   primary: "#FF9557",
//   primaryDark: "#D17A48",
//   primaryLight: "#FFB184",
//   // secondary
//   secondary: "#FFCC67",
//   secondaryDark:"#BA954B",
//   secondaryLight:"#FFD074",
//   // primary accent
//   primaryAccent: "#4E5166",
//   primaryAccentDark: "#404354",
//   primaryAccentLight: "#8E909D",
//   // secondary accent
//   secondaryAccent: "#588B8B",
//   secondaryAccentDark:"#497272",
//   secondaryAccentLight:"#85AAAA",
//   // tertiary accent
//   tertiaryAccent: "#FE5F55",
//   tertiaryAccentDark:"#B9463E",
//   tertiaryAccentLight: "#FE7C73"
// },
// moonlight : {
//   background: "#2A313B",
//   foreground: neutralColors.neutral7,
//   // text
//   primaryText: "#E3F2FD",
//   link: neutralColors.neutral2,
//   hoveredLink: neutralColors.neutral1,
//   // primary
//   primary:     "#367BC3",
//   primaryDark: "#285A8E",
//   primaryLight: "#5A93CD",
//   // secondary
//   secondary: "#38BFA7",
//   secondaryDark:"#2E9D89",
//   secondaryLight:"#6ED0BE",
//   // primary accent
//   primaryAccent:      "#586994",
//   primaryAccentDark:  "#39435F",
//   primaryAccentLight: "#7684A7",
//   // secondary accent
//   secondaryAccent: "#A3E6B2",
//   secondaryAccentDark:"#76B985",
//   secondaryAccentLight:"#A3E6B2",
//   // tertiary accent
//   tertiaryAccent: "#FE938C",
//   tertiaryAccentDark:"#B96B66",
//   tertiaryAccentLight: "#FEA6A0"
// },
// chester : {
//   background: "#F9F9F9",
//   foreground: neutralColors.neutral0,
//   // text
//   primaryText: "#111111",
//   link: neutralColors.neutral5,
//   hoveredLink: neutralColors.neutral6,
//   // primary
//   primary:      "#A05793",
//   primaryDark:  "#834879",
//   primaryLight: "#B984B0",
//   // secondary
//   secondary: "#A3D858",
//   secondaryDark:"#779E41",
//   secondaryLight:"#BCE285",
//   // primary accent
//   primaryAccent: "#245E71",
//   primaryAccentDark: "#1E4D5D",
//   primaryAccentLight: "#7398A4",
//   // secondary accent
//   secondaryAccent: "#2AA5A1",
//   secondaryAccentDark:"#1F7976",
//   secondaryAccentLight:"#64BDBA",
//   // tertiary accent
//   tertiaryAccent: "#92374D",
//   tertiaryAccentDark:"#6B2939",
//   tertiaryAccentLight: "#AF6D7D"
// },
// midnight : {
//   background: "#2A313B",
//   foreground: neutralColors.neutral7,
//   // text
//   primaryText: "#E3F2FD",
//   link: neutralColors.neutral2,
//   hoveredLink: neutralColors.neutral7,
//   // primary
//   primary: "#F95794",
//   primaryDark: "#B6406C",
//   primaryLight: "#FA75A7",
//   // secondary
//   secondary: "#323DA5",
//   secondaryDark:"#293288",
//   secondaryLight:"#6971BD",
//   // primary accent
//   primaryAccent: "#FFC729",
//   primaryAccentDark: "#D1A322",
//   primaryAccentLight: "#FFD14F",
//   // secondary accent
//   secondaryAccent: "#53DD6C",
//   secondaryAccentDark:"#3DA14F",
//   secondaryAccentLight:"#72E386",
//   // tertiary accent
//   tertiaryAccent: "#F52F57",
//   tertiaryAccentDark:"#B32340",
//   tertiaryAccentLight: "#F65475"
// },
export default themes;
