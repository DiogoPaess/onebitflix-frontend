import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styles from "../../../../styles/profile.module.scss";

const UserForm = function () {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>NT</p>
          <p className={styles.userName}>NAME TEST</p>
        </div>
        <div className={styles.memberTime}>
          <img
            src="/profile/iconUserAccount.svg"
            alt="iconProfile"
            className={styles.memberTimeImg}
          />
          <p className={styles.memberText}>
            Membro desde <br /> 20 de Abril de 2022
          </p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
          <FormGroup>
            <Label className={styles.label} for="fristName">
              NOME
            </Label>
            <Input
              name="firstName"
              type="text"
              id="firstName"
              placeholder="Qual o seu primeiro nome?"
              required
              maxLength={20}
              value={"Name"}
              className={styles.inputFlex}
            />
          </FormGroup>
          <FormGroup>
            <Label className={styles.label} for="lastName">
              SOBRENOME
            </Label>
            <Input
              name="lastName"
              type="text"
              id="lastName"
              placeholder="Qual o seu primeiro nome?"
              required
              maxLength={20}
              value={"Test"}
              className={styles.inputFlex}
            />
          </FormGroup>
          <div className={styles.inputNormalDiv}>
            <FormGroup>
              <Label className={styles.phone} for="phone">
                WHATSAPP / TELEGRAM
              </Label>
              <Input
                name="phone"
                type="text"
                id="phone"
                placeholder="(xx) 9xxxxx-xxxx"
                required
                value={"+55 (21) 99999-9999"}
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label className={styles.label} for="email">
                E-MAIL
              </Label>
              <Input
                name="email"
                type="email"
                id="email"
                placeholder="Digite seu email"
                required
                value={"testemail@gmail.com"}
                className={styles.input}
              />
            </FormGroup>
            <Button className={styles.formBtn} outline type="submit">
              Salvar Alterações
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default UserForm;
