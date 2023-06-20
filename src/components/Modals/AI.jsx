import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modals-reducer";
import Input from "../Inputs/Input";
import styles from "./Modals.module.scss";
import { useEffect } from "react";
import { buttonSimple } from "../../styles/classes";
import { tab } from "../../styles/classes";
import { Configuration, OpenAIApi } from "openai";
import { addToDom } from "../../redux/data-reducer";

const tabs = [{ name: "Preview" }, { name: "Code" }];

const MediaLibrary = () => {
  const { isAI } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [key, setKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error)
      setTimeout(() => {
        setError("");
      }, 5000);
  }, [error]);

  useEffect(() => {
    const AIKey = localStorage.getItem("AIKey");

    if (AIKey) {
      setKey(AIKey);
      setKeyInput(AIKey);
    }
  }, []);

  const onApplyKey = () => {
    setKey(keyInput);
    localStorage.setItem("AIKey", keyInput);
  };

  const onGenerate = () => {
    setIsLoading(true);

    const configuration = new Configuration({
      apiKey: key,
    });

    const openai = new OpenAIApi(configuration);

    openai
      .createChatCompletion({
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `output TailwindCSS markup that ${prompt}. Only respond with code as plain text without code block syntax around it.`,
          },
        ],
        max_tokens: 300,
      })
      .then((d) => {
        setIsLoading(false);
        setOutput(d.data.choices[0].message.content);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };

  const onAdd = () => {
    dispatch(closeModal("AI"));
    dispatch(addToDom({ label: "AI block", content: output }));
  };

  const renderTab = () => {
    switch (active) {
      case 0:
        return (
          <div className="border border-slate-500 w-full h-96 mt-3 p-3">
            {error ? (
              <div className="w-full h-full flex items-center justify-center text-red-500">
                {error}
              </div>
            ) : (
              output && <div dangerouslySetInnerHTML={{ __html: output }}></div>
            )}
          </div>
        );
      case 1:
        return (
          <div className="border border-slate-500 w-full h-96 mt-3 p-3">
            {error ? (
              <div className="w-full h-full flex items-center justify-center text-red-500">
                {error}
              </div>
            ) : (
              output && (
                <textarea
                  onChange={(e) => setOutput(e.target.value)}
                  className="w-full h-full bg-transparent border-none outline-none"
                >
                  {output}
                </textarea>
              )
            )}
          </div>
        );
    }
  };

  return (
    <Modal onClose={() => dispatch(closeModal("AI"))} active={isAI}>
      <div className={`${styles.AI}`}>
        <div className="mt-6">
          <>
            <h4>OpenAI API Key</h4>
            <div className="flex items-center">
              <Input
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="..."
                className={`mt-3 mb-3 bg-slate-700`}
              />
              <button
                onClick={() => onApplyKey()}
                className={`${buttonSimple}`}
              >
                Apply
              </button>
            </div>
            <div className={`${!key ? "opacity-30" : "opacity-100"}`}>
              <h4>Write prompt</h4>
              <div className="flex items-center">
                <Input
                  disabled={!key}
                  value={prompt}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && prompt) onGenerate();
                  }}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Create a blue button"
                  className={`mt-3 mb-3 bg-slate-700`}
                />
                <button
                  disabled={isLoading || !prompt}
                  onClick={() => onGenerate()}
                  className={`${buttonSimple} whitespace-nowrap pointer-events-${
                    isLoading || !prompt ? "none" : "auto"
                  } ${isLoading || !prompt ? "opacity-30" : "opacity-100"}`}
                >
                  {isLoading ? "Please wait" : "Generate"}
                </button>
              </div>
              <div className="flex items-center">
                {tabs.map((t, i) => (
                  <button
                    onClick={() => setActive(i)}
                    key={`tbi-${i}`}
                    className={`${tab} ${
                      active === i ? "text-slate-200" : "text-slate-400"
                    } ${active === i ? "border-slate-200" : "border-transparent"}`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
              {renderTab()}
              <div className="text-center mt-4">
                <button
                  disabled={!output}
                  onClick={() => onAdd()}
                  className={`${buttonSimple} ${
                    !output ? "pointer-events-none" : "pointer-events-auto"
                  } ${!output ? "opacity-30" : "opacity-100"}`}
                >
                  Add to the Canvas
                </button>
              </div>
            </div>
          </>
        </div>
      </div>
    </Modal>
  );
};

export default MediaLibrary;
