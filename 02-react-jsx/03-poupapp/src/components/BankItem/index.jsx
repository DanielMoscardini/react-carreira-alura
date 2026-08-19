import { IconBank } from "../icons";
import styles from "./bankitem.module.css";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const BankItem = ({ bankItem }) => {
  return (
    <div className={styles.bankItem}>
      <div className={styles.bankDescription}>
        <IconBank />
        <p> {bankItem.description}</p>
      </div>
      <div>
        <p>Saldo</p>
        <p>{formatter.format(bankItem.value)}</p>
      </div>
    </div>
  );
};
