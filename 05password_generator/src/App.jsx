import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //! useRef Hook - Used to get Ref of the element present on the web page, to do manipulation with it
  const passwordRef = useRef(null);

  //! Password Generator Function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDRFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstuvwxyz";

    for (let len = 0; len < length; len++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    if (!characterAllowed && !numberAllowed) return setPassword(pass);

    const character = "!@#$%^&*()_+{}?></][,.~";
    const numbers = "1234567890";

    if (characterAllowed) str += character;
    if (numberAllowed) str += numbers;

    let parsePass = [...pass];
    const randomIndex = Math.floor(Math.random() * pass.length + 1);

    let charFlag = false;
    let numberFlag = false;

    if (characterAllowed) {
      charFlag = parsePass.some((val) => !character.includes(val));

      if (charFlag) {
        const randomCharIndex = Math.floor(Math.random() * character.length);
        parsePass[randomIndex] = character[randomCharIndex];
      }
    }

    if (numberAllowed) {
      numberFlag = parsePass.some((val) => !numbers.includes(val));
      if (numberFlag) {
        let numberIndex = randomIndex;
        while (numberIndex === randomIndex) {
          numberIndex = Math.floor(Math.random() * pass.length);
        }
        const randomNumberIndex = Math.floor(Math.random() * numbers.length);
        parsePass[numberIndex] = numbers[randomNumberIndex];
      }
    }

    setPassword(parsePass.join(""));
  }, [length, characterAllowed, numberAllowed, setPassword]);

  //! Copy on Clipboard
  const copyOnClipboard = useCallback(() => {
    //! Functions Provided by useRef Hook
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //? Use Effect Hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed]);

  return (
    <>
      <div className="flex justify-center flex-col items-center h-screen py-5">
        <h1 className="text-4xl text-center text-white py-5">
          Password Generator
        </h1>

        <div className="h-48 bg-slate-600 w-2/3 rounded-xl relative flex flex-col px-6 py-8 justify-center gap-6">
          {/* Password Text */}
          <div className="flex w-full h-1/2">
            <input
              type="text"
              className="flex-1 pl-5 pr-2 outline-none h-16 text-2xl rounded-s-2xl overflow-auto"
              readOnly
              value={password}
              placeholder="Password"
              ref={passwordRef}
            />

            <button
              className="bg-blue-600 h-16 px-6 text-white text-2xl rounded-e-2xl
            font-medium"
              onClick={copyOnClipboard}
            >
              copy
            </button>
          </div>

          {/* Range, Number, Characters */}
          <div className="flex flex-wrap gap-5">
            <div className="flex gap-2 items-center justify-center">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                onChange={(event) => setLength(event.target.value)}
              />
              <label
                htmlFor="range"
                className="text-orange-400 text-xl font-bold"
              >
                Length({length})
              </label>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <input
                type="checkbox"
                htmlFor="number"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label className="text-orange-400 text-xl font-bold">
                Numbers
              </label>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <input
                type="checkbox"
                htmlFor="characters"
                onChange={() => setCharacterAllowed((prev) => !prev)}
              />
              <label className="text-orange-400 text-xl font-bold">
                Characters {characterAllowed} {numberAllowed}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
