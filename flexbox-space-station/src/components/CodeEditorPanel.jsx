import React, { useState } from "react";
import { useGame } from "../context/GameContext";
import "./CodeEditorPanel.css";

// Detect if we're on a touch/mobile device
function useIsMobile() {
  const [isMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
  );
  return isMobile;
}

// Humanise a camelCase CSS prop to display label
function labelFor(prop) {
  const map = {
    justifyContent: "justify-content",
    alignItems: "align-items",
    flexDirection: "flex-direction",
    flexWrap: "flex-wrap",
    alignContent: "align-content",
    gridTemplateColumns: "grid-template-columns",
    gridTemplateRows: "grid-template-rows",
    gap: "gap",
    display: "display",
  };
  return map[prop] || prop;
}

export default function CodeEditorPanel() {
  const isMobile = useIsMobile();
  const { currentLevel, userCSS, setCSSProp, submit, resetLevel, isCorrect, attempts } = useGame();

  return (
    <aside className="editor-panel glass">
      {/* Panel Header */}
      <div className="editor-header">
        <span className="editor-label">CSS EDITOR</span>
        <span className="editor-sub">.docking-bay &#123; &#125;</span>
      </div>

      {/* Code Block */}
      <div className="editor-code-block">
        {/* Non-editable display lines */}
        <div className="code-line static">
          <span className="line-num">1</span>
          <span className="code-selector">.docking-bay</span>
          <span className="code-brace"> &#123;</span>
        </div>

        {/* Always-visible display: flex */}
        <div className="code-line static">
          <span className="line-num">2</span>
          <span className="code-indent">  </span>
          <span className="code-prop">display</span>
          <span className="code-colon">: </span>
          <span className="code-value-static">flex</span>
          <span className="code-semi">;</span>
        </div>

        {/* Editable properties */}
        {currentLevel.editableProperties.map((prop, i) => (
          <EditableLine
            key={prop}
            prop={prop}
            value={userCSS[prop] ?? ""}
            allowedValues={currentLevel.allowedValues[prop] ?? []}
            lineNum={3 + i}
            onChange={(val) => setCSSProp(prop, val)}
            isMobile={isMobile}
          />
        ))}

        <div className="code-line static">
          <span className="line-num">{3 + currentLevel.editableProperties.length}</span>
          <span className="code-brace">&#125;</span>
        </div>
      </div>

      {/* Error / attempt feedback */}
      {attempts > 0 && !isCorrect && (
        <div className="editor-feedback error">
          <span>✗ Not quite — try again!</span>
        </div>
      )}
      {isCorrect && (
        <div className="editor-feedback success">
          <span>✓ Perfect alignment!</span>
        </div>
      )}

      {/* Actions */}
      <div className="editor-actions">
        <button className="btn-ghost" onClick={resetLevel}>
          ↺ Reset
        </button>
        <button
          className="btn-primary submit-btn"
          onClick={submit}
          disabled={isCorrect}
          id="submit-code-btn"
        >
          <span>▶ LAUNCH</span>
        </button>
      </div>

      {/* Mobile: Snippet Chips */}
      {isMobile && (
        <MobileSnippetChips
          editableProperties={currentLevel.editableProperties}
          allowedValues={currentLevel.allowedValues}
          userCSS={userCSS}
          onSelect={setCSSProp}
        />
      )}
    </aside>
  );
}

function EditableLine({ prop, value, allowedValues, lineNum, onChange, isMobile }) {
  return (
    <div className="code-line editable">
      <span className="line-num">{lineNum}</span>
      <span className="code-indent">  </span>
      <span className="code-prop">{labelFor(prop)}</span>
      <span className="code-colon">: </span>
      {isMobile ? (
        <span className="code-value-display" data-empty={!value}>
          {value || "???"}
        </span>
      ) : (
        <select
          className="code-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={`Set ${labelFor(prop)}`}
          id={`select-${prop}`}
        >
          {allowedValues.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      )}
      <span className="code-semi">;</span>
    </div>
  );
}

function MobileSnippetChips({ editableProperties, allowedValues, userCSS, onSelect }) {
  const [activeProp, setActiveProp] = useState(editableProperties[0] ?? "");

  const values = allowedValues[activeProp] ?? [];

  return (
    <div className="snippet-chips-root">
      {/* Property selector tabs */}
      <div className="chip-props-row">
        {editableProperties.map((prop) => (
          <button
            key={prop}
            className={`chip-prop-tab ${activeProp === prop ? "active" : ""}`}
            onClick={() => setActiveProp(prop)}
          >
            {labelFor(prop)}
          </button>
        ))}
      </div>

      {/* Value chips */}
      <div className="chip-values-row">
        {values.map((v) => (
          <button
            key={v}
            className={`chip-value ${userCSS[activeProp] === v ? "selected" : ""}`}
            onClick={() => onSelect(activeProp, v)}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
