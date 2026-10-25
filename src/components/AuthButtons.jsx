import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button.jsx";

function AuthButtons({ mainText, altText, altTo, googleText }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <Button type="submit">{mainText}</Button>
      <Button variant="secondary" onClick={() => navigate(altTo)}>
        {altText}
      </Button>

      <div className="flex items-center gap-3 text-sm text-muted">
        <hr className="flex-1 border-line" />
        atau
        <hr className="flex-1 border-line" />
      </div>

      <Button variant="outline">
        <FcGoogle className="text-xl" />
        {googleText}
      </Button>
    </div>
  );
}

export default AuthButtons;
