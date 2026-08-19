import { BankItem } from "../BankItem";
import { Button } from "../Button";
import { IconWallet } from "../icons";
import styles from "./bank.module.css";

export const Banks = () => {
  const banks = [
    { description: "Anybank", value: 1200 },
    { description: "Bytebank", value: 800 },
    { description: "Switch Bank", value: 1800 },
  ];

  return (
    <>
      <ul className={styles.list}>
        {banks.map((bankItem, index) => {
          return (
            <li key={index}>
              <BankItem bankItem={bankItem} />
            </li>
          );
        })}
      </ul>
      <div className={styles.actions}>
        <Button>
          <IconWallet />
          Adicionar conta
        </Button>
      </div>
    </>
  );
};
