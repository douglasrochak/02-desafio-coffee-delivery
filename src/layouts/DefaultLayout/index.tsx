import { Header } from "../../components/header";
import { BodyWrapper, DefaultLayoutContainer } from "./style";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <BodyWrapper>
        <Outlet />
      </BodyWrapper>
    </DefaultLayoutContainer>
  );
}
