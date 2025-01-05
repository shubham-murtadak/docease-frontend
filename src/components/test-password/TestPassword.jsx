import { Check, Eye, EyeOff, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function TestPassword({ setTotalScore }) {
  const PASSWORD_REQUIREMENTS = [
    { regex: /.{6,}/, text: "At least 6 characters" },
    { regex: /[a-z]/, text: "At least 1 lowercase letter" },
    { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  ];
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [score, setScore] = useState({});
  useEffect(() => {
    const calculateStrength = () => {
      const filtered = PASSWORD_REQUIREMENTS.map((req) => {
        return {
          met: req.regex.test(password),
          text: req.text,
        };
      });
      return {
        score: filtered.filter((req) => req.met).length,
        filtered,
      };
    };
    const x = calculateStrength();
    setScore(x);
  }, [password]);
  useEffect(() => {
    setTotalScore(score.score);
  }, [score]);
  return (
    <div className="grid gap-2">
      <Label htmlFor="photo">Password</Label>
      <div className="relative">
        <Input
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="******"
          name="password"
          type={!isVisible ? "password" : "text"}
        />
        <p
          className="absolute text-muted-foreground/80 hover:text-muted-foreground justify-center outline-none
           top-2 right-0 w-9 flex items-center cursor-pointer"
          aria-label={isVisible ? "Hide password" : "Show password"}
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
        </p>
        <div className="flex gap-2 w-full justify-between mt-2">
          <span
            className={`${
              score.score >= 1 ? "bg-green-200" : "bg-border"
            }  p-1 rounded-full w-full`}
          ></span>
          <span
            className={`${
              score.score >= 2 ? "bg-green-200" : "bg-border"
            }  p-1 rounded-full w-full`}
          ></span>
          <span
            className={`${
              score.score >= 3 ? "bg-green-200" : "bg-border"
            }  p-1 rounded-full w-full`}
          ></span>
        </div>
        <div>
          <p className="my-2 text-sm font-medium flex justify-between">
            Must Contain
          </p>
          <ul>
            {score?.filtered?.map((req, i) => {
              return (
                <li key={i} className="flex gap-2 items-center">
                  {req.met ? (
                    <Check size={16} className="text-emerald-500" />
                  ) : (
                    <X className="text-muted-foreground/80" size={16} />
                  )}
                  <p
                    className={`${
                      req.met ? "text-emerald-500" : "text-muted-foreground"
                    } text-xs`}
                  >
                    {req.text}
                  </p>
                  <span className="sr-only">
                    {req.met ? "- Requirement met" : "- Requirement not met"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TestPassword;
