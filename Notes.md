// State Lifting:

Data is typically passed from parent to child using props, but when u need to send data from child to parent you can use a function provided by the parent as a prop.

    Steps:
    To send data from child to parent is as follows:
    1) Define a function in the parent component that receives data.
    2) Pass the function as a prop to the child component.
    3) Call the function inside the child component, passing the data as a argument.
    Or:

    Steps for State Lifting in React

1) Identify shared state
Find the state that is needed by more than one component.

2) Find the closest common parent
Locate the nearest parent component that contains all components using that state.

3) Move state to the parent component
Create the state in the parent using useState.

4) Pass state to child components via props
Send the state from parent to children.

5) Pass state updater function (setter) if needed
If a child needs to modify the state, pass the setter function as a prop.

6) Update state from the child component
Child calls the passed function to update the parent’s state.

7) React re-renders dependent components
All components using that state update automatically.



                                        Interview Q&A on State Lifting:
Q1: What is state lifting in React?

Answer:
State lifting is the process of moving state from a child component to a common parent so that multiple components can share and synchronize the same data.

Q2: Why do we lift state up?

Answer:
To share state between components, maintain a single source of truth, and ensure consistent UI updates across the application.

Q3: When should you lift state?

Answer:
When two or more components depend on the same state or need to reflect changes made by each other.

Q4: How does data flow in state lifting?

Answer:
Data flows downward from parent to child via props, and updates flow upward through callback functions.

Q5: Can siblings share state directly?

Answer:
No. Sibling components cannot directly share state. The state must be lifted to their common parent.

Q6: What are the disadvantages of state lifting?

Answer:

Prop drilling

Increased complexity in deeply nested components

Harder maintenance for large apps

Q7: How do you avoid prop drilling after lifting state?

Answer:
By using Context API, Redux, Zustand, or other state management libraries.

Q8: Is state lifting the same as Context API?

Answer:
No. State lifting is a component-level pattern, while Context API is used for global state sharing across the app.

Q9: Does lifting state cause re-renders?

Answer:
Yes. When the parent state changes, all child components that depend on that state re-render.

Q10: Give a real-life example of state lifting

Answer:
A parent component managing form data while multiple child components handle inputs and previews.

One-line interview killer 💣

“State lifting helps maintain a single source of truth by moving shared state to the closest common parent.”
