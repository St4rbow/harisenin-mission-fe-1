const variants = {
  primary: "bg-primary text-surface hover:bg-primary-dark",
  secondary: "bg-primary-light text-primary hover:bg-primary hover:text-surface",
  outline: "border border-line bg-surface text-ink hover:bg-cream",
  yellow: "bg-yellow text-ink hover:brightness-95",
};

function Button({ children, variant = "primary", type = "button", href, className = "", ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-5 py-3 text-sm font-semibold transition-colors md:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
