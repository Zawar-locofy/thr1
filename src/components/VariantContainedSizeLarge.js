import { useMemo } from "react";
import styles from "./VariantContainedSizeLarge.module.css";
const VariantContainedSizeLarge = ({
  button,
  variantContainedSizeLargeBoxSizing,
  buttonColor,
  buttonDisplay,
}) => {
  const variantContainedSizeLargeStyle = useMemo(() => {
    return {
      boxSizing: variantContainedSizeLargeBoxSizing,
    };
  }, [variantContainedSizeLargeBoxSizing]);

  const buttonStyle = useMemo(() => {
    return {
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonColor, buttonDisplay]);

  return (
    <div
      className={styles.variantcontainedSizelarge}
      style={variantContainedSizeLargeStyle}
    >
      <div className={styles.button} style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;
