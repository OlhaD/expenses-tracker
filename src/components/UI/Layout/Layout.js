import "./Layout.scss";

const Layout = (props) => {
  return (
    <div>
      <header className="App-header">
        <h2>Header</h2>
      </header>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
