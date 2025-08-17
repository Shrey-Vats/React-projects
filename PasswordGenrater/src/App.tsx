import { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
function App() {
  const [length, setLength] = useState<number>(12);
  const [isNumberAllowed, setIsNumberAllowed] = useState<boolean>(true);
  const [isSymbolAllowed, setIsSymbolAllowed] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) str += "0123456789";
    if (isSymbolAllowed) str += `!@#$%^&*()-_=+[]{};:'",.<>/?\\|~\``;

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isSymbolAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberAllowed, isSymbolAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    toast.success("Copied to clipboard");
    setIsCopied(true);
  };

  return (
    <div className="h-screen w-screen bg-gray-800 ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col justify-center items-center w-full h-auto ">
        <h1 className="font-bold text-7xl text-white">Password Generator</h1>
        <div className="w-full flex items-center justify-center mt-10">
          <input
            type="text"
            className="w-2/5 h-[40px] outline-none rounded-l-4xl bg-white text-black pl-5"
            placeholder="password"
            value={password}
            readOnly
          />
          <Button
            variant="contained"

            color={isCopied ? "success" : "primary"}
            endIcon={isCopied ? <CheckBoxIcon /> : <ContentCopyIcon />}
            size="large"
            
            className={`${isCopied ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={copyPasswordToClipboard}
          ></Button>
        </div>
        <div className="flex items-center justify-center gap-10 w-full mt-10">
          <div className="flex items-center gap-2 w-1/5">
            <Slider
              value={length}
              onChange={(_, newValue) => {
                setIsCopied(false);
                setLength(newValue as number); // since it can be number | number[]
              }}
              defaultValue={12}
              min={10}
              max={100}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Checkbox
              checked={isNumberAllowed}
              color="secondary"
              onChange={() => {
                setIsNumberAllowed((prev) => !prev);
                setIsCopied(false);
              }}
            />
            <span className="text-white font-medium">Include numbers</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Checkbox
              checked={isSymbolAllowed}
              color="secondary"
              onChange={() => {
                setIsSymbolAllowed((prev) => !prev);
                setIsCopied(false);
              }}
            />
            <span className="text-white font-medium">Include Symbols</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
