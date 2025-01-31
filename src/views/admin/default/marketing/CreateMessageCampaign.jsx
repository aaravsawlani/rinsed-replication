import React, { useState } from "react";
import Card from "components/card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialMessages = [
  { id: "1", content: "Welcome to our service!" },
  { id: "2", content: "Don't forget to check our new features." },
];

const CreateMessageCampaign = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [sequence, setSequence] = useState([]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(messages);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMessages(items);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create Message Campaign</h2>
      <Card extra="p-4">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="messages">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {messages.map((message, index) => (
                  <Draggable key={message.id} draggableId={message.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="mb-2 p-2 bg-gray-100 rounded"
                      >
                        {message.content}
                        {/* Add UI for setting delay */}
                        <input
                          type="number"
                          placeholder="Days between messages"
                          className="ml-4 p-1 border rounded"
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        {/* Add UI for adding new messages */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add Message</button>
      </Card>
    </div>
  );
};

export default CreateMessageCampaign; 