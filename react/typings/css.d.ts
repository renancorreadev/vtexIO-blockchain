declare module "*.css" {
  type Styles = {
    [selector: string]: string;
  };

  const styles: Styles;

  export default styles;
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
