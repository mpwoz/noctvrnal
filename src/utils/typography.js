import Typography from "typography"
import moragaTheme from "typography-theme-moraga"

let typography = moragaTheme;

const overrides = {
  headerColor: 'white',
  bodyColor: 'white',
};

typography = Object.assign(typography, overrides);


export default new Typography(typography);

