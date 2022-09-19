import MainHeader from "./main-header";

const Layout = (props) => {
  return (
    <>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
      
    </>
  );
}

export default Layout;