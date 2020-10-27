import React from "react";
import { connect } from "react-redux";
import { Menu } from "../../components";
import { CheckState } from "../AuthModule/reducer";
import { useAuthModule } from "../AuthModule/useAuthModule";
import { menu } from "./menuConfig";

const mapStateToProps = ({ auth }) => ({
  authStatus: auth.status,
});

const MenuModuleComponent = ({ authStatus }) => {
  useAuthModule();

  const [menuConfig, setMenuConfig] = React.useState(
    menu.filter((x) => !x.authStatus)
  );

  React.useEffect(() => {
    if (authStatus === CheckState.failed) {
      setMenuConfig(
        menu.filter((x) => !x.authStatus || x.authStatus === "failed")
      );
    } else if (authStatus === CheckState.succeed) {
      setMenuConfig(
        menu.filter((x) => !x.authStatus || x.authStatus === "success")
      );
    }
  }, [authStatus]);

  return <Menu items={menuConfig} />;
};

export const MenuModule = connect(mapStateToProps)(MenuModuleComponent);
