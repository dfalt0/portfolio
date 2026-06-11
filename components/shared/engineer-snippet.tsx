type EngineerSnippetProps = {
  variant?: "classic" | "apple";
};

export function EngineerSnippet({ variant = "classic" }: EngineerSnippetProps) {
  const windowClass =
    variant === "apple"
      ? "code-editor-window code-editor-window--apple"
      : "code-editor-window";

  return (
    <div className="hero-visual">
      <div className={windowClass}>
        <div className="window-header">
          <div className="window-controls">
            <span className="window-control window-control-close" />
            <span className="window-control window-control-minimize" />
            <span className="window-control window-control-maximize" />
          </div>
          <div className="window-title">engineer.js</div>
          <div className="window-actions">
            <span className="window-action">⋮</span>
          </div>
        </div>
        <div className="code-editor-content">
          <div className="code-lines">
            <div className="code-line">
              <span className="line-number">1</span>
              <span className="code-text">
                <span className="comment">{"// who can it be now"}</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">2</span>
              <span className="code-text">
                <span className="keyword">const</span>
                <span className="operator"> </span>
                <span className="variable">engineer</span>
                <span className="operator"> = </span>
                <span className="punctuation">{"{"}</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">3</span>
              <span className="code-text indent">
                <span className="property">name</span>
                <span className="operator">: </span>
                <span className="string">&apos;The Ginger Wizard&apos;</span>
                <span className="punctuation">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">4</span>
              <span className="code-text indent">
                <span className="property">passion</span>
                <span className="operator">: </span>
                <span className="string">&apos;Make Useful Things&apos;</span>
                <span className="punctuation">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">5</span>
              <span className="code-text indent">
                <span className="property">status</span>
                <span className="operator">: </span>
                <span className="string">&apos;Watching Anime&apos;</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">6</span>
              <span className="code-text">
                <span className="punctuation">{"};"}</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">7</span>
              <span className="code-text">
                <span className="cursor-blink" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
