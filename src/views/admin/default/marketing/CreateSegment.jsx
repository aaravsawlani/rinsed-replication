import React, { useState } from "react";
import Card from "components/card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialFilters = [
  { id: "1", condition: "Age > 25" },
  { id: "2", condition: "Location = New York" },
];

const CreateSegment = () => {
  const [filters, setFilters] = useState(initialFilters);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(filters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFilters(items);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create Segment</h2>
      <Card extra="p-4">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="filters">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {filters.map((filter, index) => (
                  <Draggable key={filter.id} draggableId={filter.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="mb-2 p-2 bg-gray-100 rounded"
                      >
                        {filter.condition}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        {/* Add UI for adding new filters */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add Filter</button>
      </Card>
    </div>
  );
};

export default CreateSegment; 