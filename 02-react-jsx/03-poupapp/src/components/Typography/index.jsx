import styles from "./typography.module.css";

const TAGS = {
  h1: "h1",
  body: "p",
};

export const Typography = ({ children, variant }) => {
  const Component = TAGS[variant] || "p";
  const variantClass = styles[variant] || styles.p;

  return <Component className={variantClass}>{children}</Component>;
};
