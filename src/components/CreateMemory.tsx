import React, { useState } from "react";
import {
  BsThreeDotsVertical,
  BsEmojiExpressionless,
  BsCalendar,
} from "react-icons/bs";
import WriteMemorySettings from "./Popups/WriteMemorySettings";

type Props = {};

const CreateMemory: React.FC<Props> = () => {
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  const openSettings = () => setSettingsOpen(true);

  return (
    <div className="Create-memory">
      <h2 className="Create-memory__header">Create your memory now</h2>
      <button className="Create-memory__settings" onClick={openSettings}>
        <BsThreeDotsVertical size={16} color="#2F0B4D" title="More settings" />
      </button>
      <textarea name="memory" id="memory" className="Create-memory__text" />
      <button className="Create-memory__additions">
        <BsEmojiExpressionless
          size={16}
          color="#2F0B4D"
          title="Memory feeling"
        />
        Add your feeling*
      </button>
      <button className="Create-memory__additions">
        <BsCalendar size={16} color="#2F0B4D" title="Memory time" />
        Add time of memory*
      </button>
      <button className="btn btn-primary Create-memory__submit">Publish</button>

      {settingsOpen && (
        <WriteMemorySettings onClose={() => setSettingsOpen(false)} />
      )}
    </div>
  );
};

export default CreateMemory;
