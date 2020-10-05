/*
 * DraggableLines - Component responsible for dividing and displaying draggable lines of the initial text.
 */

import React from "react";
import {connect} from "react-redux";
import {setAlert} from "../../actions";
import "./index.css";

const DraggableLines = ({ text, maxLength, dispatch }) => {

  // Save order
  const saveOrder = (order) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then((response) => response.json()).then((json) => console.log(json));
    // Sets alert when the order is saved.
    dispatch(setAlert({id: Math.random(), message:"Order saved!"}));
  }

  // Debounce and call saveOver.
  let interval = null;
  const debounce = (order, delay) => {
    clearTimeout(interval);
    interval = setTimeout(() => saveOrder(order), delay);
  }

  // Get and return the current order.
  const getCurrentOrder = () => {
    const lines = document.querySelectorAll(".line");
    let order = [];
    for (let i = 0; lines.length > i; i++) {
      order[i] = {
        id: lines[i].id,
        order: i
      };
    }
    return order;
  };

  // Add class to the dragged element.
  const dragStart = (e) => {
    e.target.classList.add("current");
  }

  // Removes class from the dragged element and sets the new order.
  const dragEnd = (e) => {
    e.target.classList.remove("current");
    debounce(getCurrentOrder(), 2000);
    // Sets alert when order changes
    dispatch(setAlert({id: Math.random(), message:"Order changed!"}));
  }

  // Defines the container and where the dragged element should be dropped.
  const dragOver = (e) => {
    e.preventDefault();
    const container = document.getElementById("lines");
    const nextElement = getNextElement(container, e.clientY);
    // Inserts the dragged element in the right place.
    const currentDraggableLine = document.querySelector(".current");
    if(nextElement == null){
      container.appendChild(currentDraggableLine);
    }else{
      container.insertBefore(currentDraggableLine, nextElement);
    }
  }

  // Defines the position where the dragged element should be dropped.
  function getNextElement(container, y) {
    // Selects all draggable elements but the current one.
    const draggableNotSelected = [...container.querySelectorAll(".line:not(.current)")];
    // Determines which element is direct after the mouse cursor when dragging based on the Y position.
    return draggableNotSelected.reduce(
      (closestElement, index) => {
        // Get size and position of each child
        const box = index.getBoundingClientRect();
        // Get the relative distance between the center of the line and the coursor when dragging.
        const offset = y - box.top - box.height / 2;
        // If the offset is negative and greater then the "closestElement" offset it should return the offset and the current element.
        if(offset < 0 && offset > closestElement.offset){
          return { offset: offset, element: index };
        }else{
          return closestElement;
        }
      }, { offset: Number.NEGATIVE_INFINITY }
    ).element;
  } 

  // Splits the text into lines of a maximum of 80 characters each.
  const returnLines = (txt) => {
    let lines = [];
    let newText = txt;
    // Inserts text into the lines array. Creates an object with id and the line text for each line.
    // Removes the inserted text from the initial string.
    // Once there's no more characters in the initial string it stops looping.
    for (let i = 0; newText.length > 0; i++) {
      if (newText.length > maxLength) {
        lines[i] = {
          id: i,
          text: newText.substr(0, newText.lastIndexOf(" ", maxLength)).trimStart()
        };
        newText = newText.replace(newText.substr(0, newText.lastIndexOf(" ", maxLength)),"");
      } else {
        lines[i] = {
          id: i,
          text: newText.trimStart()
        };
        newText = newText.replace(newText, "");
      }
    }
    // It maps the array and retuns each object in a div element.
    return lines.map((line) => {
      return (
        <div
        key={line.id}
        id={line.id}
        className="line"
        draggable="true"
        onDragStart={e => dragStart(e)}
        onDragEnd={e => dragEnd(e)}>
          {line.text}
        </div>
      );
    });
  };

  // Returns the draggable lines in a container
  return (
    <div
    id="lines"
    onDragOver={e => dragOver(e)}>
      {returnLines(text)}
    </div>
  );
};

// exports the component
export default connect()(DraggableLines);