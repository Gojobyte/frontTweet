import ThreeColumnLayout from "../layouts/ThreeColumnLayout";
import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";

const AuthenticatedLayout = ({ children }) => {
  return (
    <ThreeColumnLayout
      left={<LeftMenu />}
      center={children}
      right={<RightMenu />}
    />
  );
};

export default AuthenticatedLayout;
