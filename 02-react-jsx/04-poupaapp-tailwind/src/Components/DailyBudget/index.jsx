const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const DailyBudget = ({ value }) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <p className="m-0 text-primary-highlight font-bold text-[39px] leading-[125%] text-center">
      {formatter.format(value)}
    </p>
  );
};
