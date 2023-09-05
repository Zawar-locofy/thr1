import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import VariantContainedSizeLarge from "./VariantContainedSizeLarge";
import styles from "./SubscribeForm.module.css";
const SubscribeForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonClick = useCallback(() => {
    window.open("https://www.locofy.ai/");
  }, []);

  return (
    <div className={styles.subscribeSection}>
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <a
            className={styles.formTitleSubtext}
            href="https://www.locofy.ai/"
            target="_blank"
          >
            subscribe to our newsletter
          </a>
          <b className={styles.formTitle}>Get weekly updates</b>
        </div>
        <div className={styles.form}>
          <div className={styles.formText}>
            <div className={styles.fillInYour}>
              Fill in your details to join the party!
            </div>
          </div>
          <div className={styles.formText}>
            <div className={styles.formText}>
              <TextField
                className={styles.input}
                color="success"
                variant="filled"
                type="text"
                label="My Name"
                placeholder="Naam das"
                size="medium"
                margin="none"
              />
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <VariantContainedSizeLarge
              button="submit"
              variantContainedSizeLargeBoxSizing="border-box"
              buttonColor="#fff"
              buttonDisplay="inline-block"
            />
          </button>
          <TextField
            className={styles.inputfilledWithIcon}
            sx={{ width: 220 }}
            color="primary"
            variant="filled"
            defaultValue="Input"
            type={showPassword ? "text" : "text"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPasswordClick}
                    aria-label="toggle password visibility"
                  >
                    <Icon>
                      {showPassword ? "visibility_off" : "visibility"}
                    </Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label="Password "
            placeholder="khul ja"
            size="medium"
            margin="none"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
