import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' bg-cyan-50 my-10 mx-32 p-16'>
                {/* blog no 1 */}
                <div className='bg-white p-10 mt-8 rounded shadow'>
                    <h2 className=' text-[30px] font-bold '>
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h2>
                    <p className=' text-gray-500' >
                        An access token is a credential that verifies a user's identity and permissions. It is used to access protected resources and has a limited lifespan. A refresh token is a credential that obtains a new access token when the original token expires, without requiring the user to log in again. On the client-side, access tokens should be stored securely, such as in browser cookies with appropriate security measures, while refresh tokens should be stored in more secure storage options like server-side sessions or encrypted local storage.
                    </p>
                </div>
                {/* blog no 2 */}
                <div className='bg-white p-10 mt-8 rounded shadow'>
                    <h2 className=' text-[30px] font-bold '>
                        Compare SQL and NoSQL databases?
                    </h2>
                    <p className=' text-gray-500' >

                        SQL databases are relational and use structured query language (SQL) to manage and query data. They have a fixed schema, support complex queries, and ensure data integrity. NoSQL databases are non-relational and offer flexible schemas, scalability, and high performance for handling large amounts of unstructured data. They are suitable for distributed systems and handle semi-structured or schema-less data.
                    </p>
                </div>
                {/* blog no 3 */}
                <div className='bg-white p-10 mt-8 rounded shadow'>
                    <h2 className=' text-[30px] font-bold '>
                        What is express js? What is Nest JS?
                    </h2>
                    <p className=' text-gray-500' >
                        Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features for building web applications, such as routing, middleware, and HTTP request/response handling, making it easy to create APIs and web servers.

                        Nest.js is a progressive Node.js framework built on top of Express.js. It follows a modular architecture and uses TypeScript, providing a structured and scalable approach for building server-side applications. Nest.js integrates well with other libraries and frameworks and offers features like dependency injection, decorators, and powerful module management.

                        In summary, Express.js is a lightweight and versatile framework for building web applications in Node.js, while Nest.js is a more opinionated and feature-rich framework that enhances the development experience by adding structure and scalability.
                    </p>
                </div>
                {/* blog no 4 */}
                <div className='bg-white p-10 mt-8 rounded shadow'>
                    <h2 className=' text-[30px] font-bold '>
                        What is MongoDB aggregate and how does it work ?
                    </h2>
                    <p className=' text-gray-500' >
                        MongoDB's aggregate is a powerful method that allows you to perform complex data processing and analysis operations on collections. It works by applying a series of stages to documents, transforming and filtering the data based on the specified operations. Stages include grouping, sorting, filtering, projecting, and performing mathematical calculations, among others. Aggregation pipelines can be constructed using these stages to manipulate and aggregate data in a flexible and efficient manner.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;