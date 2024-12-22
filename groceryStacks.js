function groceryStacks() {
    const groceryStack = [];
    const maxSize = 5;
  
    function peek() {
      if (groceryStack.length === 0) {
        console.log("Stack is empty");
        return null;
      }
      return groceryStack[groceryStack.length - 1];
    }
  
    function push(item) {
      if (groceryStack.length >= maxSize) {
        console.log("Stack is full");
        return;
      }
      groceryStack.push(item);
      printStack();
    }
  
    function pop() {
      if (groceryStack.length === 0) {
        console.log("Stack is empty");
        return null;
      }
      const poppedItem = groceryStack.pop();
      printStack();
      return poppedItem;
    }
  
    function printStack() {
      console.log("Grocery Stack:", groceryStack);
    }
  
  
    // Example usage (replace with prompt() for user input in a real application):
    push("Milk");
    push("Eggs");
    push("Bread");
    push("Cheese");
    push("Apples"); //Stack is full
    push("Oranges"); //Stack is full.
    console.log("Top item:", peek());
    pop();
    pop();
    pop();
    console.log("Top item after pops:", peek());
  }
  
  groceryStacks();