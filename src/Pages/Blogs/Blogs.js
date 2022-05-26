import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-10 p-4 '>
            <h3 className='text-2xl font-bold p-2'>How will you improve the performance of a React Application?</h3>
            <p className='p-4 text-xl text-justify'>
                React.js is widely regarded as one of the most efficient web development frameworks available. It is believed to be the best solution for interactive design because of its widely used one page application development. Other JS frameworks, in addition to React, give a significant gain in performance speed when compared to traditional JS architecture.However, even with its lightning-fast speed, React performance isn't always the best solution. Even in terms of speed, there are some factors to consider, as many things are dependent on the product's architecture and feature particular.
            </p>
            <h3 className='text-2xl font-bold p-2' > What are the different ways to manage a state in a React application?</h3>
            <p className='p-4 text-xl text-justify'>
                There are four main types of state you need to properly manage in your React apps:
            </p>
            <p className='p-1 text-xl text-justify'>
                <span className='font-bold'>1. Local state: </span>
                Data that we handle in one or more components is referred to as local state.
                The useState hook is most commonly used in React to manage local state.
            </p>
            <p className='p-1 text-xl text-justify'>
                <span className='font-bold'>2. Global state : </span>
                Data that we handle across several components is referred to as global state.
                When we wish to receive and change data from everywhere in our app, or at least across many components, we need global state.
            </p>
            <p className='p-1 text-xl text-justify'>
                <span className='font-bold'>3. Server state : </span>
                Data from an external server that has to be combined with our current UI state. Server state is a basic idea, but it can be difficult to manage alongside all of our other UI data, both local and global.
            </p>
            <p className='p-1 text-xl text-justify'>
                <span className='font-bold'>4. URL state: </span>
                The pathname and query arguments from our URLs. URL state is a kind of state that is often overlooked, although it is crucial. A lot of important elements of our app rely on URL state in several circumstances. Consider how difficult it would be to create a blog without the ability to retrieve a post by its slug or id from the URL!
            </p>

            <h3 className='text-2xl font-bold p-2'>How does prototypical inheritance work?</h3>
            <p className='p-4 text-xl text-justify'>
                Prototypal Inheritance is a javascript feature that allows you to add methods and properties to objects. It's a method that allows one object to inherit the properties and methods of another. We used to use Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object.
            </p>
            <h3 className='text-2xl font-bold p-2'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
            <p className='p-2 text-xl text-justify'>

                I've tried the following way to update the useState array values by calling a function that maps across an array (called from the database) and updates the useState array for each item in the (database array).
            </p>
            <h3 className='text-2xl font-bold p-2'>What is a unit test? Why should write unit tests?</h3>
            <p className='p-2 text-xl text-justify'>

                Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
            </p>
            <p className='p-2 text-xl text-justify'>
                Before any code is deployed, it is subjected to unit testing to ensure that it fulfills quality criteria. This promotes a dependable engineering environment that prioritizes quality. Unit testing saves time and money during the product development life cycle, and it helps developers design better, more efficient code.
            </p>
        </div>
    );
};

export default Blogs;