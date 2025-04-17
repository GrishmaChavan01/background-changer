# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

#Background Changer concept used
as we added multiple button to change the color 
for this we can use the "onClick" method expect function should be passed so we give the refferance of that function as follow
<button onclick={setcolor}>   in this we pass the function refference
but in this we can not pass the parameter
and for pass the parameter we have to use {setcolor("")} this is the syntax
as we pass like this we execute it directly,so when function returned the value it will go to the onclick which we dont need we need the function in onclick.
In simple word onClick needs fucntion not returned value since fucntion can returned any value like integer,string etc

#solution for above onClick
we pass the callback function onClick ="{() => {}}"
onClick ="{() => setColor("red")}  it will worked as callback function call the fucntion only.