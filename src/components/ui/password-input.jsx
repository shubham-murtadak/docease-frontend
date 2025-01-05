"use client";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "./input";
import { Label } from "./label";
const PASSWORD_REQUIREMENTS = [
  { regex: /.{6,}/, text: "At least 6 characters" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
];
const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const calculateStrength = useMemo(() => {
    const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }));
    return {
      score: requirements.filter((req) => req.met).length,
      requirements,
    };
  }, [password]);
  return (
    <div className="w-full mx-auto ">
      <form className="space-y-2">
        <Label htmlFor="password" className="">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-invalid={calculateStrength.score < 4}
            aria-describedby="password-strength"
            className=""
          />
          <button
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
            aria-label={isVisible ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-0 outline-none flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground  "
          >
            {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </form>
      <div className="flex gap-2 w-full justify-between mt-2">
        <span
          className={`${
            calculateStrength.score >= 1 ? "bg-green-200" : "bg-border"
          }  p-1 rounded-full w-full`}
        ></span>
        <span
          className={`${
            calculateStrength.score >= 2 ? "bg-green-300" : "bg-border"
          }  p-1 rounded-full w-full`}
        ></span>
        <span
          className={`${
            calculateStrength.score >= 3 ? "bg-green-400" : "bg-border"
          }  p-1 rounded-full w-full`}
        ></span>
      </div>

      <p
        id="password-strength"
        className="my-2 text-sm font-medium flex justify-between"
      >
        <span>Must contain:</span>
        {/* <span>
          {STRENGTH_CONFIG.texts[Math.min(calculateStrength.score, 4)]}
        </span> */}
      </p>

      <ul className="space-y-1.5" aria-label="Password requirements">
        {calculateStrength.requirements.map((req, index) => (
          <li key={index} className="flex items-center space-x-2">
            {req.met ? (
              <Check size={16} className="text-emerald-500" />
            ) : (
              <X size={16} className="text-muted-foreground/80" />
            )}
            <span
              className={`text-xs ${
                req.met ? "text-emerald-600" : "text-muted-foreground"
              }`}
            >
              {req.text}
              <span className="sr-only">
                {req.met ? " - Requirement met" : " - Requirement not met"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PasswordInput;
