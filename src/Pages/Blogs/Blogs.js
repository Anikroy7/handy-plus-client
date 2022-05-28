import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12'>
            <section>
                <p className='text-xl text-red-500'>
                    How will you improve the performance of a React Application?
                </p>
                1.Keeping component state local where necessary.
                2. Memoizing React components to prevent unnecessary 3.re-renders.
                3. Code-splitting in React using dynamic import
                Windowing or list virtualization in React.
                4.Lazy loading images in React.
            </section>
            <section>
                <p className='text-xl text-red-500'>How does prototypical inheritance work?</p>
                <p>he Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
            </section>
            <section>
                <p className='text-xl text-red-500'>What is a unit test? Why should write unit tests?</p>
                Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
            </section>
            <section>
                <p className='text-xl text-red-500'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>

                1.Know Who Your Target Audience is.<br />
                2.Focus on the Product Benefits.<br />
                3.Tell the Full Story.<br />
                4.Use Natural Language and Tone.<br />
                5.Use Power Words That Sell.<br />
            </section>
            <section>
                <p className='text-xl text-red-500'>
                    What are the different ways to manage a state in a React application?
                </p>
                1.Local state.<br />
                2.Global state.<br />
                3.Server state.<br />
                4. URL state.<br />
            </section>
        </div >
    );
};

export default Blogs;