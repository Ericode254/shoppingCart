const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "Ksh",
  style: "currency",
});

const currencyFormatter = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default currencyFormatter;
