function AuthCard({ title, subtitle, children }) {
  return (
    <div className="mx-auto w-full max-w-xl rounded-lg border border-line bg-surface p-5 md:p-9">
      <h1 className="text-center text-2xl font-semibold md:text-3xl">{title}</h1>
      <p className="mt-2 text-center text-muted">{subtitle}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default AuthCard;
