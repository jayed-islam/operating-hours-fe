import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";
import { paths } from "../paths";

export const configsNavs = [
  { text: "Home", icon: <HomeIcon />, route: paths.root },
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    route: paths.panel.operatingHours,
  },
];
