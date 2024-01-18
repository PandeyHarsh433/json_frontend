import { useState } from "react";

function AdvancedFieldsSwitch({
  hasOptionalFields,
  showAdvanced,
  setShowAdvanced,
}) {
  return (
    <>
      {hasOptionalFields ? (
        <button
          onClick={() => {
            setShowAdvanced(!showAdvanced);
          }}
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid gray",
            cursor: "pointer",
            margin: "5px",
            width : "full"
          }}
        >
          Advanced Fields Toggle
        </button>
      ) : null}
    </>
  );
}

export default AdvancedFieldsSwitch;
