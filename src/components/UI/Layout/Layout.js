import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="layout">
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
