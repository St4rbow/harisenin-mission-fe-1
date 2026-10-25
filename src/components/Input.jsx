import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({ label, id, type = "text", prefix, ...props }) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm text-muted">
        {label} <span className="text-accent">*</span>
      </label>

      <div className="flex gap-2">
        {prefix && (
          <span className="flex items-center rounded-md border border-line bg-surface px-3 text-muted">
            {prefix}
          </span>
        )}

        <div className="relative flex-1">
          <input
            id={id}
            name={id}
            type={isPassword && show ? "text" : type}
            required
            className="w-full rounded-md border border-line bg-surface px-3 py-3 user-invalid:border-accent focus-visible:outline-2 focus-visible:outline-focus"
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShow(!show)}
              aria-label={show ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-focus"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
