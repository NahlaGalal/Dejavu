import {
  BsThreeDotsVertical,
  BsEmojiExpressionless,
  BsCalendar,
} from "react-icons/bs";

type Props = {};

const CreateMemory = (props: Props) => {
  return (
    <div className="Create-memory">
      <h2 className="Create-memory__header">Create your memory now</h2>
      <button className="Create-memory__settings">
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
    </div>
  );
};

export default CreateMemory;
