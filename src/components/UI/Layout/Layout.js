import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
