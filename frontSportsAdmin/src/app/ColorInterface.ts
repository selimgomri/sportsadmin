export interface Theme {
  name: string;
  properties: any;
}

export const defaultTheme: Theme = {
  name: "defaultTheme",
  properties: {
    "--btn": "#4ac285",
    "--navbar": "#cc0102"
  }
};

export const customTheme: Theme = {
  name: "customTheme",
  properties: {
    "--btn": "$primaryColor",
    "--navbar": "$secondaryColor"
  }
};
